"use strict";
(() => {
var exports = {};
exports.id = 822;
exports.ids = [822,3543,9738,6557,4678,3396,2858,150,4201,1344,31,6103];
exports.modules = {

/***/ 3703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ heathrow_transfer_deals)
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
// EXTERNAL MODULE: ./src/components/widgets/TransferCard/index.js
var TransferCard = __webpack_require__(3822);
;// CONCATENATED MODULE: ./src/constants/heathrowTransferDeals/index.js
const dealsItems = [
    {
        id: 2,
        img: "/images/dealsTr/hgt2.jpg",
        title: "Heathrow to Gatwick transfer",
        address: "Heathrow Gatwick Transfers",
        description: "Transfers between Heathrow airport and Gatwick Airport",
        price: "95",
        pickUp: true
    },
    {
        id: 1,
        img: "/images/dealsTr/hgt1.jpg",
        title: "Heathrow Transfer Prices",
        address: "Heathrow Transfer",
        description: "London Heathrow car service, Heathrow specialist offering 24/7 Heathrow Airport transfers",
        price: "35"
    },
    {
        id: 3,
        img: "/images/dealsTr/londonCity3.jpg",
        title: "London City Airport Transfer Prices",
        address: "London City Airport Transfers",
        description: "You can book your airport transfer from London City Airport to any address in London or for other UK destinnations like Cambridge, Oxford, Southampton..etc.",
        price: "55"
    },
    {
        id: 4,
        img: "/images/dealsTr/luton4.jpg",
        title: "Luton Transfer Prices",
        address: "Luton Transfers",
        description: "For Luton Airport minicab transfer booking please use our online booking form or please call us on 020 3887 3844  for quotation. We cover all London postcode areas, and major UK cities like Cambridge, Oxford,Southampton... etc.",
        price: "95"
    },
    {
        id: 5,
        img: "/images/dealsTr/stansted5.jpg",
        title: "Stansted Transfer Prices",
        address: "Stansted Transfers",
        description: "For Stansted Airport minicab transfer booking please use our online booking form, or alternatively please call us on 020 3887 3844 for quotation. We cover all London postcode area, and major UK cities.",
        price: "99"
    }, 
];

// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
// EXTERNAL MODULE: ./src/pages/heathrow-transfer-deals/styles.module.scss
var styles_module = __webpack_require__(3724);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/pages/heathrow-transfer-deals/TextContent.js
var TextContent = __webpack_require__(6044);
;// CONCATENATED MODULE: ./src/pages/heathrow-transfer-deals/index.js










const HeathrowTaxiDeals = ()=>{
    const { 0: crumbs , 1: setCrumbs  } = (0,external_react_.useState)([
        {
            linkName: "/",
            name: "home"
        },
        {
            linkName: "/heathrow-transfer-deals",
            name: "heathrow transfer deals"
        }, 
    ]);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: pickUpDropTypes/* SET_SELECT_ACTIVE_LINK */.A3,
            payload: "heathrow transfer deals"
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "APL",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `page ${(styles_module_default()).deals_page}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `page_section ${(styles_module_default()).deals_page_section}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `page_section_container ${(styles_module_default()).deals_page_section_container}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkBreadcumb/* default */.Z, {
                            crumbs: crumbs
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (styles_module_default()).title,
                            children: "Heathrow Transfer Deals"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TransferCard/* default */.Z, {
                            items: dealsItems
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TextContent["default"], {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const heathrow_transfer_deals = (HeathrowTaxiDeals);


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
var __webpack_exports__ = __webpack_require__.X(0, [5789,8348,5367,3570,7358,6044], () => (__webpack_exec__(3703)));
module.exports = __webpack_exports__;

})();