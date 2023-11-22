"use strict";
(() => {
var exports = {};
exports.id = 6505;
exports.ids = [6505,3543,9738,6557,4678,3396,2858,150,4201,1344,31,6103];
exports.modules = {

/***/ 1834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ heathrow_between_terminals)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/elements/LinkBreadcumb/index.js
var LinkBreadcumb = __webpack_require__(1680);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 4 modules
var Layout = __webpack_require__(5367);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
// EXTERNAL MODULE: ./src/pages/heathrow-between-terminals/TextContent.js
var TextContent = __webpack_require__(2377);
// EXTERNAL MODULE: ./src/pages/heathrow-between-terminals/styles.module.scss
var styles_module = __webpack_require__(2170);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/components/widgets/TransferCard/index.js
var TransferCard = __webpack_require__(3822);
;// CONCATENATED MODULE: ./src/constants/heathrowBetweenTerminals/index.js
const betwenItems = [
    {
        id: 1,
        img: "/images/destCardTerminal2.jpg",
        title: "Heathrow Inter Terminal Transfer",
        address: "Heathrow beetween the terminals",
        description: "Airport Pickups London specialises in providing first-rate minicabs to Gatwick and London to Gatwick car service. Contact us today for a competitive and fully comprehensive Gatwick Airport transfer quote.",
        price: "38"
    }, 
];

;// CONCATENATED MODULE: ./src/pages/heathrow-between-terminals/index.js










const HeathrowBetweenTerminals = ()=>{
    const { 0: crumbs , 1: setCrumbs  } = (0,external_react_.useState)([
        {
            linkName: "/",
            name: "home"
        },
        {
            linkName: "/heathrow-between-terminals",
            name: "heathrow taxi deals"
        }, 
    ]);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: pickUpDropTypes/* SET_SELECT_ACTIVE_LINK */.A3,
            payload: "heathrow between terminals"
        });
    }, []);
    //selectActiveLinkName
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "APL",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `page ${(styles_module_default()).between_page}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `page_section ${(styles_module_default()).between_page_section}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `page_section_container ${(styles_module_default()).between_page_section_container}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkBreadcumb/* default */.Z, {
                            crumbs: crumbs
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (styles_module_default()).title,
                            children: "Heathrow Between Terminals"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TransferCard/* default */.Z, {
                            items: betwenItems
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TextContent["default"], {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const heathrow_between_terminals = (HeathrowBetweenTerminals);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5925:
/***/ ((module) => {

module.exports = require("next/router.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5789,8348,5367,3570,7358,2377], () => (__webpack_exec__(1834)));
module.exports = __webpack_exports__;

})();