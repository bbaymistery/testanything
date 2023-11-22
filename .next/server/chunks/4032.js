"use strict";
exports.id = 4032;
exports.ids = [4032];
exports.modules = {

/***/ 628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useConfirm)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useConfirm(params = {}) {
    let { previousUrl , nextUrl , messsage ="If you leave the page, all data will be deleted." ,  } = params;
    const { 0: confMessage , 1: setConfMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(messsage);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const beforeUnloadHandler = (e)=>{
            if (confMessage) {
                (e || window.event).returnValue = confMessage;
                return confMessage;
            }
        };
        //burasi bizim hangi sayfaya gecdigimizi soyler  (tiklayinca)
        const beforeRouteHandler = (url)=>{
            //eger resevation documente geldi ve geri paymente gitmek isterse onda direk uayri mesaji gelsin ve home page gitsin
            //this case is all about when we are in reservationDocument page   =>previousUrl === '/' && nextUrl === '/'
            if (previousUrl === "/" && nextUrl === "/") {
                router.reload();
            } else {
                //we can go back or step forward
                if (url === nextUrl || url === previousUrl) {
                    setConfMessage("");
                    return;
                } else {
                    setConfMessage(messsage);
                }
            }
            if (next_router__WEBPACK_IMPORTED_MODULE_0__.Router.pathname !== url && !confirm(confMessage)) {
                next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.emit("routeChangeError");
                throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
            }
        };
        window.addEventListener("beforeunload", beforeUnloadHandler);
        next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.on("routeChangeStart", beforeRouteHandler);
        return ()=>{
            window.removeEventListener("beforeunload", beforeUnloadHandler);
            next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.off("routeChangeStart", beforeRouteHandler);
        };
    }, []);
    return confMessage;
}


/***/ }),

/***/ 6266:
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