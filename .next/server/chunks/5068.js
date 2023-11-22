exports.id = 5068;
exports.ids = [5068];
exports.modules = {

/***/ 4386:
/***/ ((module) => {

// Exports
module.exports = {
	"small_car_content": "styles_small_car_content__skrHJ",
	"mobile": "styles_mobile__Aa9uO",
	"top": "styles_top__XRI87",
	"top_left_car_name": "styles_top_left_car_name__uTv2V",
	"top_left_car_type": "styles_top_left_car_type__j8q6V",
	"top_left_price_div": "styles_top_left_price_div___Y4al",
	"top_left_price_div_per": "styles_top_left_price_div_per__UnxBZ",
	"top_left_price_div_price": "styles_top_left_price_div_price__MoR0y",
	"top_left_price_div_per_vehicle": "styles_top_left_price_div_per_vehicle__McIWl",
	"top_right_icons_details": "styles_top_right_icons_details__oUt2n",
	"bottom": "styles_bottom___vhi3",
	"paymentPage": "styles_paymentPage__Pz_e3"
};


/***/ }),

/***/ 5516:
/***/ ((module) => {

// Exports
module.exports = {
	"whatis_included": "styles_whatis_included__Su1Be",
	"whatis_included_title": "styles_whatis_included_title__Pmmmk",
	"card_center": "styles_card_center__PfAIk",
	"card_center2": "styles_card_center2__lsWCC"
};


/***/ }),

/***/ 5068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TDP_JourneySummary)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: ./src/components/widgets/PaymentWhatIsFree/styles.module.scss
var styles_module = __webpack_require__(5516);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/widgets/PaymentWhatIsFree/index.js



const PaymentWhatIsFree = (props)=>{
    const { twoColumns , oneColumn , noTitle =false  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).whatis_included,
        children: [
            oneColumn && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).card_center,
                children: [
                    noTitle ? "" : /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "We give you the following for free"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-circle-check"
                                    }),
                                    "Flight Tracking"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-circle-check"
                                    }),
                                    "Free Waiting Time"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-circle-check"
                                    }),
                                    "Free meet and greet"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-circle-check"
                                    }),
                                    "No charge for flight delays"
                                ]
                            })
                        ]
                    })
                ]
            }),
            twoColumns && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).card_center2,
                children: [
                    noTitle ? "" : /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "We give you the following for free"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (styles_module_default()).twoColumn,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).first_column,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-circle-check"
                                            }),
                                            "Flight Tracking"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-circle-check"
                                            }),
                                            "Free Waiting Time"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).second_column,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-circle-check"
                                            }),
                                            "Free meet and greet"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-circle-check"
                                            }),
                                            "No charge for flight delays"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const widgets_PaymentWhatIsFree = (PaymentWhatIsFree);

// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(6266);
// EXTERNAL MODULE: ./src/components/elements/TranferCarCard/styles.module.scss
var TranferCarCard_styles_module = __webpack_require__(4386);
var TranferCarCard_styles_module_default = /*#__PURE__*/__webpack_require__.n(TranferCarCard_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/TranferCarCard/index.js




const TransferCarCard = (props)=>{
    const { carObject , quotation , flexBasis , paymentPage  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `
      ${(TranferCarCard_styles_module_default()).small_car_content}
      ${flexBasis ? (TranferCarCard_styles_module_default()).flex_basis : ""}
      ${paymentPage ? (TranferCarCard_styles_module_default()).paymentPage : ""}
      `,
        children: carObject && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (TranferCarCard_styles_module_default()).mobile,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (TranferCarCard_styles_module_default()).top,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (TranferCarCard_styles_module_default()).top_left,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (TranferCarCard_styles_module_default()).top_left_car_name,
                                    children: carObject[quotation?.carId]?.transferType
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (TranferCarCard_styles_module_default()).top_left_car_type,
                                    children: carObject[quotation?.carId]?.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (TranferCarCard_styles_module_default()).top_left_price_div,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (TranferCarCard_styles_module_default()).top_left_price_div_per,
                                            children: "per"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: (TranferCarCard_styles_module_default()).top_left_price_div_price,
                                            children: [
                                                "\xa3",
                                                quotation?.price
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (TranferCarCard_styles_module_default()).top_left_price_div_per_vehicle,
                                            children: "/vehicle"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (TranferCarCard_styles_module_default()).top_right,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: (TranferCarCard_styles_module_default()).top_right_icons_details,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (TranferCarCard_styles_module_default()).suitcase_icon,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-suitcase "
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    carObject[quotation?.carId]?.suitcases,
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: ` Bags`
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-users "
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    carObject[quotation?.carId]?.pax,
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: ` Seats`
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (TranferCarCard_styles_module_default()).bottom,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: `${env/* default.apiDomain */.Z.apiDomain}${carObject[quotation?.carId]?.image}`,
                        alt: "car"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const TranferCarCard = (TransferCarCard);

;// CONCATENATED MODULE: ./src/components/elements/TransferSummarizeCard/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const TransferSummarizeCard = (props)=>{
    const { showPrice , date , pickPoints , dropPoints , journeyType , totalPrice  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${journeyType === 0 ? "pb_0" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "from to",
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "FROM:"
                                }),
                                pickPoints.map((pickup, i)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: pickup.address
                                    }, pickup.address);
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: " "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "TO:"
                                }),
                                dropPoints.map((dropoff, i)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: dropoff.address
                                    }, dropoff.addres);
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: " "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "ON:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: `${date.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")} / ${date?.split(" ")[1]}`
                                })
                            ]
                        })
                    })
                })
            }),
            showPrice && journeyType === 1 ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: ` ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        children: [
                            "TOTAL JOURNEY PRICE: ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "\xa3",
                                    totalPrice
                                ]
                            })
                        ]
                    })
                })
            }) : "",
            !showPrice && journeyType === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: `pt_0  ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        children: [
                            "TOTAL PRICE: ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "\xa3",
                                    totalPrice
                                ]
                            })
                        ]
                    })
                })
            }) : ""
        ]
    });
};
/* harmony default export */ const elements_TransferSummarizeCard = (TransferSummarizeCard);

;// CONCATENATED MODULE: ./src/components/elements/TDP_JourneySummary/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








const JourneySummary = (props)=>{
    const { title , journeyType , showPrice , flexRow =false , showPriceIncluded =false , mb_0 =false , no_boxshadow =false , py_1 =false , paymentPage =false ,  } = props;
    const { appData , params  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    const selectedPickUpsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayPickUpPointsOneWay */.Y6);
    const selectedDropOffOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayDroopOffPointsOneWay */.LD);
    const selectTransferDate = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayDateTimeString */.co);
    const transferQuotation = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    /*
   */ const returnQiotation = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    const returnDate = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDateTimeString */.Cg);
    const returnPickPoints = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPickUpPointsReturn */.BP);
    const returnDropPoints = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDropOffPointsReturn */.G0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `
       ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}
       ${flexRow ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) : ""}
       ${mb_0 ? "mb_0" : ""}
       ${no_boxshadow ? "box_shadow_none" : ""}
       ${py_1 ? "py_1" : ""}
       ${paymentPage ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) : ""}
      `,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} `,
                children: [
                    carObject && /*#__PURE__*/ jsx_runtime_.jsx(TranferCarCard, {
                        carObject: carObject,
                        quotation: journeyType === 0 ? transferQuotation : returnQiotation,
                        paymentPage: paymentPage
                    }),
                    carObject && !showPriceIncluded && /*#__PURE__*/ jsx_runtime_.jsx(elements_TransferSummarizeCard, {
                        showPrice: showPrice,
                        date: journeyType === 0 ? selectTransferDate : returnDate,
                        pickPoints: journeyType === 0 ? selectedPickUpsOneWay : returnPickPoints,
                        dropPoints: journeyType === 0 ? selectedDropOffOneWay : returnDropPoints,
                        journeyType: params.journeyType,
                        totalPrice: params.journeyType === 1 ? Number(transferQuotation.price) + Number(returnQiotation.price) : Number(transferQuotation.price)
                    }),
                    showPriceIncluded && /*#__PURE__*/ jsx_runtime_.jsx(widgets_PaymentWhatIsFree, {
                        twoColumns: false,
                        oneColumn: true,
                        noTitle: true
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const TDP_JourneySummary = (JourneySummary);


/***/ })

};
;