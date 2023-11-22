(() => {
var exports = {};
exports.id = 4133;
exports.ids = [4133,3543,9738,6557,4678,3396,2858,150,4201,1344,31,6103];
exports.modules = {

/***/ 900:
/***/ ((module) => {

// Exports
module.exports = {
	"central_page": "styles_central_page__4_KGH",
	"central_page_section": "styles_central_page_section__lzvHi",
	"central_page_section_container": "styles_central_page_section_container__y75WA",
	"title": "styles_title__MUQcU",
	"text_content": "styles_text_content__hsd95"
};


/***/ }),

/***/ 12:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ heathrow_central_london)
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
;// CONCATENATED MODULE: ./src/constants/heaythrowCentralLondon/index.js
const centralItems = [
    {
        id: 1,
        img: "/images/centralTr/lht1.jpg",
        title: "Heathrow to Central London",
        address: " Meet & Greet by the Arrival Gates Included",
        description: "Heathrow Car Service is a dedicated Heathrow Airport transfer specialist, offering cheap, flat-rate fares for minicabs from Heathrow Airport to Central London. Fares from Heathrow-London start from \xa337.50 and Central London-Heathrow minicabs from just \xa330, fully inclusive.",
        price: "75"
    },
    {
        id: 2,
        img: "/images/centralTr/lht2.jpg",
        title: "Central London to Heathrow",
        address: "Central London to Heathrows",
        description: "Central London to heathrow airport private car transfers prices start from \xa330.00",
        price: "70"
    }, 
];

// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
// EXTERNAL MODULE: ./src/pages/heathrow-central-london/styles.module.scss
var styles_module = __webpack_require__(900);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/pages/heathrow-central-london/TextContent.js
var TextContent = __webpack_require__(6974);
;// CONCATENATED MODULE: ./src/pages/heathrow-central-london/index.js










const HeathrowCentralLondon = ()=>{
    const { 0: crumbs , 1: setCrumbs  } = (0,external_react_.useState)([
        {
            linkName: "/",
            name: "home"
        },
        {
            linkName: "/heathrow-central-london",
            name: "heathrow central london"
        }, 
    ]);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: pickUpDropTypes/* SET_SELECT_ACTIVE_LINK */.A3,
            payload: "heathrow central london"
        });
    }, []);
    //selectActiveLinkName
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "Heathrow taxi to Central London \u2013 London to Heathrow taxi",
        keywords: "Heathrow taxi,Heathrow shuttle,Heathrow transport",
        description: "Reliable taxi service from to Heathrow airport",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `page ${(styles_module_default()).central_page}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `page_section ${(styles_module_default()).central_page_section}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `page_section_container ${(styles_module_default()).central_page_section_container}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkBreadcumb/* default */.Z, {
                            crumbs: crumbs
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (styles_module_default()).title,
                            children: "Heathrow to Central London Transfer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TransferCard/* default */.Z, {
                            items: centralItems
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TextContent["default"], {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const heathrow_central_london = (HeathrowCentralLondon);


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 5925:
/***/ ((module) => {

"use strict";
module.exports = require("next/router.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5789,8348,5367,3570,7358,6974], () => (__webpack_exec__(12)));
module.exports = __webpack_exports__;

})();