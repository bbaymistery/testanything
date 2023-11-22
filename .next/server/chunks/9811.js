"use strict";
exports.id = 9811;
exports.ids = [9811];
exports.modules = {

/***/ 9811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5789);
/* harmony import */ var _DropOffPoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8333);
/* harmony import */ var _PickUpPoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5736);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7165);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);







const DetailsHeader = ({ date , quot , pickUps , drops , fullName , email , passengers , phone , specialRequest ,  })=>{
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_5__/* .selectPickUpDropOffReducer */ .X7);
    //bunu sadece imgni getirmek ucun yazdg Secilen cardn img si
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_header),
        children: carObject && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_card),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().passenger_details),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_info),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-user",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                children: "Full Name"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                        children: [
                                                            ":",
                                                            fullName
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-users",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                children: "Passengers"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                        children: [
                                                            ":",
                                                            passengers
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-phone",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                children: "Phone Number"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                        children: [
                                                            ":+",
                                                            phone
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-at",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                children: "Email Address"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                        children: [
                                                            ":",
                                                            email
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    specialRequest.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li_info),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa-solid fa-comment"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().property),
                                                                children: "Notes"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().value),
                                                        children: [
                                                            ":",
                                                            specialRequest
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }) : null
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_right),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().info),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().border_line)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PickUpPoints__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            pickUps: pickUps
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropOffPoints__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            drops: drops
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_flex)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-calendar-alt",
                                                            "aria-hidden": "true"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Landing Date :"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_bottom_container),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_bottom),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desc),
                                                            children: `${date.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")} `
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_flex)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_headerr_li),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-clock",
                                                            "aria-hidden": "true"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Landing Time :"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_bottom_container),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details_bottom),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desc),
                                                            children: date.split(" ")[1]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsHeader);


/***/ })

};
;