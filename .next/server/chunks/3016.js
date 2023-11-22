exports.id = 3016;
exports.ids = [3016];
exports.modules = {

/***/ 9430:
/***/ ((module) => {

// Exports
module.exports = {
	"bg_holder": "styles_bg_holder__a6VSg",
	"bg_parallax": "styles_bg_parallax__XJBjT",
	"bg_content": "styles_bg_content__Zz1Ax",
	"bg_container": "styles_bg_container__LHLWH",
	"bg_box_title": "styles_bg_box_title__Qs_Ps",
	"bg_box": "styles_bg_box__8OvTV",
	"badge": "styles_badge__xKdQF",
	"iframe": "styles_iframe__Xif7r",
	"about_title": "styles_about_title__r0Wks",
	"about_adresses": "styles_about_adresses__GvBff",
	"about_adress_bottom": "styles_about_adress_bottom__o2heK",
	"about_bg_box": "styles_about_bg_box__Si6Rt"
};


/***/ }),

/***/ 3016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9430);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const HappyCustomer = (props)=>{
    const { aboutPage  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bg_holder),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bg_parallax)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bg_content),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `container ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bg_container)}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `gap_big text_center ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bg_box)} ${aboutPage && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().about_bg_box)}`,
                        children: [
                            !aboutPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bg_box_title),
                                children: "Happy Customer"
                            }),
                            !aboutPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().badge),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    src: "https://widget.reviews.co.uk/badge/widget?elementId=badge-250&version=1&&store=london-heathrow-taxi&primaryClr=%2312d06c&neutralClr=%23f4f4f4&starsClr=%23fff&textClr=%23fff",
                                    frameBorder: "0",
                                    width: "100%",
                                    title: "Reviews Badge Widget",
                                    height: "203",
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().iframe)
                                })
                            }),
                            aboutPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().about_title),
                                        children: "Our offices are located as follows:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().about_adresses),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: "Heathrow\xa0Car Service"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "Aero House",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "611 Sipson Road",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "West Drayton",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "UB7\xa00JD",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "United Kingdom"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().about_adress_bottom),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Find out more about travelling with Heathrow Car Service, including Business Class fares and quotes for destinations outside Central London. Contact us on 020 3887 3844\xa0(+44 (0)"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "20 3887 3844"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "\xa0if calling from outside the UK)."
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HappyCustomer); /*

*/ 


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(699)


/***/ })

};
;