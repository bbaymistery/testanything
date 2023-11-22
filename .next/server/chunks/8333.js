exports.id = 8333;
exports.ids = [8333];
exports.modules = {

/***/ 7165:
/***/ ((module) => {

// Exports
module.exports = {
	"details_header": "styles_details_header__LePrQ",
	"header_card": "styles_header_card__7X9f0",
	"passenger_details": "styles_passenger_details__pqXld",
	"card_info": "styles_card_info__cPoII",
	"info": "styles_info__FArCh",
	"details_headerr_li": "styles_details_headerr_li__PmrOX",
	"li_info": "styles_li_info__xo4_Z",
	"property": "styles_property__ST_xs",
	"value": "styles_value__nNK_Z",
	"card_right": "styles_card_right__HRedM",
	"details_flex": "styles_details_flex__uW1b6",
	"desc": "styles_desc__85N6R",
	"border_line": "styles_border_line__jSdUO",
	"details": "styles_details__IAlDu",
	"details_bottom_container": "styles_details_bottom_container__FyZE_",
	"details_bottom": "styles_details_bottom__Wutoz",
	"details_bottom_description": "styles_details_bottom_description__0CND7",
	"bottom_main_desc": "styles_bottom_main_desc__GjsTm"
};


/***/ }),

/***/ 8333:
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7165);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const DropOffPoints = ({ drops  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_headerr_li),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-map-marker-alt",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Drop off Location :"
                    })
                ]
            }),
            drops?.map((point, i)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-check"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().desc),
                                    children: point.address
                                })
                            ]
                        }),
                        point?.flightDetails?.flightNumber && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Fligth Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point?.flightDetails?.flightNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.postCodeDetails?.postCodeAddress && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Postcode Address:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point?.postCodeDetails?.postCodeAddress
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.cruiseNumber && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Cruise Name:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point?.cruiseNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.trainNumber && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Train Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point?.trainNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.roomNumber && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Room Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point?.roomNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 7 && point?.["address-description"] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Places of Interest:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point?.["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 8 && point?.["address-description"] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Cities:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point?.["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 9 && point?.["address-description"] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Universities And Colleges:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point?.["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 10 && point?.["address-description"] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().details_bottom_description),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom_main_desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Description:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: point?.["address-description"]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, i);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropOffPoints);


/***/ })

};
;