(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521,3543,9738,6557,4678,3396,2858,150,4201,1344,31,6103];
exports.modules = {

/***/ 4163:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumb_area": "styles_breadcrumb_area__Q_6Sv",
	"breadcrumb_container": "styles_breadcrumb_container__8b0WD",
	"breadcrumb_container_title": "styles_breadcrumb_container_title__vqhtU"
};


/***/ }),

/***/ 362:
/***/ ((module) => {

// Exports
module.exports = {
	"about_page": "styles_about_page__ag_Rr",
	"about_page_section": "styles_about_page_section__tEj4C",
	"about_page_section_container": "styles_about_page_section_container__uCJNR",
	"title": "styles_title__pptor",
	"part_one": "styles_part_one__NQsPr",
	"part_two": "styles_part_two___RZLN",
	"ul_one": "styles_ul_one__hSLr0",
	"some": "styles_some__XJvO_",
	"p_list": "styles_p_list__HlxY2",
	"long_ul": "styles_long_ul__bveil"
};


/***/ }),

/***/ 5352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4163);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const BreadCrumb = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumb_area),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumb_container),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumb_container_title),
                children: title
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumb);


/***/ }),

/***/ 4400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5367);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8348);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(362);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_elements_breadCrubm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5352);
/* harmony import */ var _components_widgets_HappyCustomer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3016);








const About = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch({
            type: _store_pickUpDropOffReducer_pickUpDropTypes__WEBPACK_IMPORTED_MODULE_6__/* .SET_SELECT_ACTIVE_LINK */ .A3,
            payload: "about"
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "London About London Heathrow Taxi",
        keywords: "Heathrow taxi info",
        description: "Information about London Heathrow taxi service.. ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `page ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().about_page)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_breadCrubm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `page_section ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().about_page_section)}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `page_section_container ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().about_page_section_container)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                                children: "About Us"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().part_one),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: "London Heathrow Taxi\xa0"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: "is a dedicated provider of\xa0"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: "Heathrow-Central London transfer\xa0services"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: ". In addition, we offer\xa0"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: "cheap Heathrow hotel minicabs\xa0"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: "and\xa0"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: "transfers services between terminals at London Heathrow"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: "."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().part_two),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                        children: "Searching for\xa0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                        children: "Heathrow transfer quotes"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                        children: "\xa0on the internet can be overwhelming and exhausting.\xa0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                        children: "Heathrow Car Service\xa0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                        children: "is located right beside the airport and boasts one of the largest fleets of minicabs\xa0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                        children: "at Heathrow"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                        children: "."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "We offer straightforward, all-inclusive,\xa0cheap transfer services from Heathrow Airport. Heathrow Car Service is fully licensed, with comfortable, modern cars. We provide a very high standard of service and reliability."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "The benefits of booking your Heathrow Airport transfer through us include:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: `ml_3 ul_disc ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().ul_one)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Fully inclusive, flat rate fares with no hidden extras to pay. One-way fares starting from:"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().some),
                                children: [
                                    "\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "SOME OF\xa0OUR PRICES"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().p_list),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                        children: [
                                            "-\xa0\xa0\xa0Heathrow Airport \u2013 Central London transfer from \xa337.00.",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "-\xa0\xa0\xa0Central London \u2013 Heathrow Airport\xa0transfer\xa0from \xa330."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "-\xa0\xa0\xa0Transfer between terminals at Heathrow, \xa319."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "-\xa0\xa0\xa0Heathrow Airport \u2013 Heathrow hotel\xa0transfer\xa0, \xa312."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "-\xa0\xa0\xa0Heathrow hotel to Heathrow Airport\xa0transfer\xa0, \xa39."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().long_ul)} ul_disc ml_3`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "High service standards \u2013\xa0Heathrow Car Service is punctual, reliable, fully licensed, English-speaking drivers and boasts a large fleet of modern cars.\xa0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Prices include: airport meet and greet, 30 minutes\u2019 free waiting time, parking and tolls. Once we\u2019ve provided you with your no-obligation\xa0Heathrow Airport transfer quote, there will be nothing more to pay.\xa0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "We are based right beside Heathrow and we know the airport, the local area and Central London inside-out, ensuring a speedy and fuss-free\xa0Heathrow transfer service.\xa0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "A host of specialist services for your convenience, including a Business Class\xa0Heathrow transfer service, using Mercedes S and E class cars. In addition, we provide complimentary baby and child seats for all our\xa0Heathrow private car transfers\xa0should you request this at the time of booking. We will also need to know the age(s) of your child(ren).\xa0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Our offices are open 24 hours a day, 365 days of the year. You can be sure of a friendly and helpful voice at the end of the line should you wish to obtain a\xa0Heathrow transfer quote\xa0or ask us a question about an existing booking.\xa0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "A high proportion of\xa0Heathrow Car Service's customers go on to become regular users of our\xa0Heathrow Airport transfer service. That\u2019s because we take away all the stress and uncertainty of booking an airport private car.\xa0"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            "Convinced? Call us today to book your\xa0cheap Heathrow transfer . We\u2019re available on 020 3887 3844\xa0(+44 (0)20 3887 3844\xa0if calling from outside the UK). In addition to flat rate fares for our most popular services, we can accommodate pretty much any\xa0Heathrow Airport transfer need.\xa0",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " Heathrow Car Service is based at: Aero House, 611 Sipson Road, West Drayton, UB7 0JD, United Kingdom.\xa0 ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "Heathrow Car Service\xa0"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "is a\xa0"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: "true Heathrow Airport transfer specialist"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                                    children: ", offering straightforward fares and a reliable service."
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "\xa0"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_widgets_HappyCustomer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    aboutPage: true
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [699,5789,8348,5367,3016], () => (__webpack_exec__(4400)));
module.exports = __webpack_exports__;

})();