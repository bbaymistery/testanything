"use strict";
(() => {
var exports = {};
exports.id = 5629;
exports.ids = [5629];
exports.modules = {

/***/ 5750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _resources_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1986);

function isJSON(string) {
    try {
        let json = JSON.parse(string);
        return true;
    } catch (error) {
        return false;
    }
}
function handler(req, res) {
    if (req.method === "POST") {
        let { body , reservations , vehicleTypes , transferTypes  } = req.body;
        var requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                reservation: body
            })
        };
        fetch(`${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/reservation/`, requestOptions).then((response)=>response.json()).then((response)=>{
            console.log(response);
            response = isJSON(isJSON) ? JSON.parse(response) : response;
            if (typeof response === "object" && response.status === 200) {
                sendMail(response.data["reservations-ids"], reservations, vehicleTypes, transferTypes, (log)=>{
                    res.json({
                        status: 200,
                        response,
                        template: log.template
                    });
                });
            } else {
                // make one email for you, to collect error logs
                let ress = {
                    msg: response?.message,
                    type: response?.type,
                    name: response?.name,
                    note: "this message comes from add-reservation-api/else part"
                };
                errorEmail(ress);
                res.status(201).json({
                    status: 201,
                    response
                });
            }
        }).catch((error)=>{
            console.log(error.message);
        });
    } else {
        res.status(200).json({
            error: [
                "bad request"
            ]
        });
    }
};
const sendMail = (reservId, reservations, vehicleTypes, transferTypes, callback = ()=>{})=>{
    let reqOptions = {
        method: "POST",
        body: JSON.stringify({
            reservId,
            reservations,
            vehicleTypes,
            transferTypes
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    };
    fetch(`${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].websiteDomain */ .Z.websiteDomain}/api/send-email`, reqOptions).then((res)=>{
        callback(res);
    }).catch((e)=>console.log(e.message, "from email error "));
};


/***/ }),

/***/ 1986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isDevelopment = false; // localohst -> true || live -> false
const env = {
    websiteDomain: isDevelopment ? "http://localhost:8000" : "https://london-heathrow.taxi",
    apiDomain: "https://api.london-tech.com",
    status: {
        success: 200,
        error: 403,
        success: 200,
        badRequest: 400,
        unauthorized: 401,
        forbidden: 403,
        methodNotAllowed: 405,
        notAcceptable: 406,
        internalServerError: 500
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (env);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5750));
module.exports = __webpack_exports__;

})();