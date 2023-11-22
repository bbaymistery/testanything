(() => {
var exports = {};
exports.id = 9998;
exports.ids = [9998,3543,9738,6557,4678,3396,2858,150,4201,1344,31,6103];
exports.modules = {

/***/ 4928:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "styles_item__yt3MZ",
	"booking_item_active": "styles_booking_item_active__koOkQ",
	"second_column": "styles_second_column__DjaOr",
	"vehicle_icon_list": "styles_vehicle_icon_list__xwJB_",
	"vehicle_icon_item": "styles_vehicle_icon_item__fngYn",
	"mobile": "styles_mobile__u2WyJ",
	"top": "styles_top__fJ1q_",
	"top_left_price_div": "styles_top_left_price_div__kt6Qh",
	"top_left_price_div_per": "styles_top_left_price_div_per__8vhCm",
	"top_left_price_div_price": "styles_top_left_price_div_price__PTb5I",
	"top_left_price_div_per_vehicle": "styles_top_left_price_div_per_vehicle__MIEKT",
	"top_right_icons_details": "styles_top_right_icons_details__cIh8m",
	"first_column": "styles_first_column__S2I8T",
	"info_modal_desktop": "styles_info_modal_desktop__Pui07",
	"info_modal_mobile": "styles_info_modal_mobile__8E12R",
	"booking_item": "styles_booking_item__4299J",
	"car_title": "styles_car_title__AsdzG",
	"third_column": "styles_third_column__gMCS_",
	"third_column_first": "styles_third_column_first__HQvXy",
	"third_column_second": "styles_third_column_second__Mm04C",
	"icon_explain": "styles_icon_explain__bppxp",
	"fourth_column": "styles_fourth_column__FqwB5",
	"price_div": "styles_price_div__K4Q7T",
	"book_price": "styles_book_price__u_vAH",
	"per_vehicle": "styles_per_vehicle__dnsC7",
	"select_btn_div": "styles_select_btn_div__AVVZS",
	"top_left_car_name": "styles_top_left_car_name__UMJBm",
	"top_left_car_type": "styles_top_left_car_type__m6I9c",
	"top_left_enjoy_travel": "styles_top_left_enjoy_travel__9vhzS",
	"bottom": "styles_bottom__ebXYx",
	"line": "styles_line__wQQnp"
};


/***/ }),

/***/ 1469:
/***/ ((module) => {

// Exports
module.exports = {
	"quotation_page": "styles_quotation_page__OldQL",
	"quotation_page_section": "styles_quotation_page_section__lCXsB",
	"quotation_page_container_return": "styles_quotation_page_container_return__2sZ_Z",
	"quotation_page_container": "styles_quotation_page_container__Z7lB5"
};


/***/ }),

/***/ 5691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ quotation),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(6266);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
// EXTERNAL MODULE: ./src/store/showFieldReducer/showFieldTypes.js
var showFieldTypes = __webpack_require__(9601);
// EXTERNAL MODULE: ./src/components/elements/CardItem/styles.module.scss
var styles_module = __webpack_require__(4928);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/elements/CardItem/index.js









const CardItem = (props)=>{
    //props
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const { datas , selectedQuotation , journeyType , duration  } = props;
    const { 0: durationState , 1: setDurationState  } = (0,external_react_.useState)(null);
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const selectJourneyType = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedJourneyType */.D0);
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    const handleClick = (e, item)=>{
        if (e.target.classList.contains("fa-circle-info")) {
            dispatch({
                type: showFieldTypes/* SET_MODAL_INFO */.lk,
                payload: true
            });
            return;
        }
        if (Number(selectJourneyType) === 0) {
            router.push("/transfer-details");
        }
        dispatch({
            type: pickUpDropTypes/* SET_QUOTATION */.bz,
            payload: {
                quotation: item,
                journeyType
            }
        });
    };
    const openModalCar = (e)=>{
        dispatch({
            type: showFieldTypes/* SET_MODAL_INFO */.lk,
            payload: true
        });
    // document.body.style.overflow = "hidden";
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: datas?.quotationOptions && datas?.quotationOptions?.map((item, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).item,
                onClick: (e)=>handleClick(e, item),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(styles_module_default()).booking_item}
                ${Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id) ? (styles_module_default()).booking_item_active : ""}
              `,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(styles_module_default()).first_column} ${(styles_module_default()).column}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${env/* default.apiDomain */.Z.apiDomain}${carObject[item?.carId]?.image}`,
                                    alt: "car"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (styles_module_default()).car_title,
                                    children: carObject[item?.carId]?.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (styles_module_default()).info_modal_desktop,
                                    onClick: openModalCar,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-circle-info"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(styles_module_default()).third_column} ${(styles_module_default()).column}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).third_column_first,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: (styles_module_default()).third_column_first_ul,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-male"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: (styles_module_default()).third_column_span,
                                                            children: [
                                                                "Max ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: carObject[item?.carId]?.pax
                                                                }),
                                                                " passengers"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).third_column_second,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: (styles_module_default()).third_column_second_ul,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-briefcase"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: (styles_module_default()).third_column_second_span,
                                                            children: [
                                                                "Max ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                                                    children: [
                                                                        " ",
                                                                        carObject[item?.carId]?.suitcases
                                                                    ]
                                                                }),
                                                                "medium suitcases"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${(styles_module_default()).second_column} ${(styles_module_default()).column}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).vehicle_icon_list,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (styles_module_default()).vehicle_icon_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-handshake-simple"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).icon_explain,
                                                children: "Free Meet & Greet"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (styles_module_default()).vehicle_icon_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `fa-solid fa-plane ${(styles_module_default()).flight_icon}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).icon_explain,
                                                children: "Flight Tracking"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (styles_module_default()).vehicle_icon_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-clock"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).icon_explain,
                                                children: "Free Waiting Time"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (styles_module_default()).vehicle_icon_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-clock-rotate-left"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).icon_explain,
                                                children: "No charge for flight delays"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(styles_module_default()).third_column} ${(styles_module_default()).column}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).third_column_first,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (styles_module_default()).third_column_first_ul,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-male"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: (styles_module_default()).third_column_span,
                                                    children: [
                                                        "Max ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                                            children: [
                                                                " ",
                                                                carObject[item?.carId]?.pax
                                                            ]
                                                        }),
                                                        " passengers"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).third_column_second,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (styles_module_default()).third_column_second_ul,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-briefcase"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: (styles_module_default()).third_column_second_span,
                                                    children: [
                                                        "Max ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                                            children: [
                                                                " ",
                                                                carObject[item?.carId]?.suitcases
                                                            ]
                                                        }),
                                                        " medium suitcases"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(styles_module_default()).fourth_column} ${(styles_module_default()).column}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(styles_module_default()).third_column} ${(styles_module_default()).column}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).third_column_first,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: (styles_module_default()).third_column_first_ul,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-male"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: (styles_module_default()).third_column_span,
                                                            children: [
                                                                "Max ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: carObject[item?.carId]?.pax
                                                                }),
                                                                " passengers"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).third_column_second,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: (styles_module_default()).third_column_second_ul,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-briefcase"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: (styles_module_default()).third_column_second_span,
                                                            children: [
                                                                "Max ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                                                    children: [
                                                                        " ",
                                                                        carObject[item?.carId]?.suitcases
                                                                    ]
                                                                }),
                                                                "medium suitcases"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).price_div,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (styles_module_default()).book_price,
                                            children: [
                                                "\xa3",
                                                item?.price
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (styles_module_default()).per_vehicle,
                                            children: "/per vehicle"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(styles_module_default()).select_btn_div} `,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: `btn btn_primary ${(styles_module_default()).button} ${Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id) ? `btn_success` : ""}   `,
                                                children: Number(selectedQuotation?.carId) === Number(carObject[item?.carId].id) ? "Selected" : "Select"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).mobile,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (styles_module_default()).info_modal_mobile,
                                    onClick: openModalCar,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-circle-info"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).top,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).top_left,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (styles_module_default()).top_left_car_name,
                                                    children: carObject[item?.carId]?.transferType
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: (styles_module_default()).top_left_car_type,
                                                    children: [
                                                        carObject[item?.carId]?.name,
                                                        " or",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Similar"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (styles_module_default()).top_left_enjoy_travel,
                                                    children: "Enjoy travel"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (styles_module_default()).top_left_price_div,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: (styles_module_default()).top_left_price_div_per,
                                                            children: "per"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: (styles_module_default()).top_left_price_div_price,
                                                            children: [
                                                                "\xa3",
                                                                item?.price
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: (styles_module_default()).top_left_price_div_per_vehicle,
                                                            children: "/vehicle"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).top_right,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: (styles_module_default()).top_right_icons_details,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: (styles_module_default()).suitcase_icon,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-suitcase "
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    " ",
                                                                    carObject[item?.carId]?.suitcases,
                                                                    " Bags"
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
                                                                    carObject[item?.carId]?.pax,
                                                                    " Seats"
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
                                    className: (styles_module_default()).bottom,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${env/* default.apiDomain */.Z.apiDomain}${carObject[item?.carId]?.image}`,
                                        alt: "car"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }, i);
        })
    });
};
/* harmony default export */ const elements_CardItem = (CardItem);

// EXTERNAL MODULE: ./src/components/elements/InfoModal/InfoModal.js
var InfoModal = __webpack_require__(7489);
// EXTERNAL MODULE: ./src/components/elements/LeftRightButtons/index.js
var LeftRightButtons = __webpack_require__(350);
// EXTERNAL MODULE: ./src/components/elements/LinkBreadcumb/index.js
var LinkBreadcumb = __webpack_require__(1680);
;// CONCATENATED MODULE: ./src/components/elements/PickDropPointNames/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const PickDropPointNames = (props)=>{
    const { pickUpPoints , dropPoints , title , date  } = props;
    const { 0: finalDate , 1: setFinalDate  } = (0,external_react_.useState)("");
    const replaceDateTime = (e)=>{
        let datee = date.split(" ")[0].replace(/-/g, "/");
        let time = date.split(" ")[1];
        let day = datee.split("/")[2];
        let month = datee.split("/")[1];
        let year = datee.split("/")[0];
        setFinalDate(`${day}/${month}/${year} ${time}`);
    };
    (0,external_react_.useEffect)(()=>{
        replaceDateTime();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-location-dot"
                                    }),
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Pickup Point"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: pickUpPoints.map((item, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: item.address
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-location-dot"
                                    }),
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " Dropoff Point"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: dropPoints.map((item, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: item.address
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-calendar-days"
                                    }),
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " Pickup Date & Time"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                children: finalDate
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const elements_PickDropPointNames = (PickDropPointNames);

// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 4 modules
var Layout = __webpack_require__(5367);
// EXTERNAL MODULE: ./src/store/showFieldReducer/showFieldSelectors.js
var showFieldSelectors = __webpack_require__(6388);
// EXTERNAL MODULE: ./src/pages/quotation/styles.module.scss
var quotation_styles_module = __webpack_require__(1469);
var quotation_styles_module_default = /*#__PURE__*/__webpack_require__.n(quotation_styles_module);
// EXTERNAL MODULE: ./src/hooks/useConfirm.js
var useConfirm = __webpack_require__(628);
;// CONCATENATED MODULE: ./src/pages/quotation/index.js














const Quotation = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: crumbs , 1: setCrumbs  } = (0,external_react_.useState)([
        {
            linkName: "/",
            name: "home"
        },
        {
            linkName: "/quotation",
            name: "Airport Transfer Quotations"
        }, 
    ]);
    //general
    const selectModalInfo = (0,external_react_redux_.useSelector)(showFieldSelectors/* modalInfo */.n);
    //oneWay
    const pickUpOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayPickUpPointsOneWay */.Y6);
    const dropOffOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayDroopOffPointsOneWay */.LD);
    const dateOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayDateTimeString */.co);
    const quotOptionsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferQuotOptions */.Tu);
    const selectedQuotTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    //return
    const returnPickUp = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPickUpPointsReturn */.BP);
    const returnDropOf = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDropOffPointsReturn */.G0);
    const returnDate = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDateTimeString */.Cg);
    const rtQuotOptions = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnQuotOptions */.dF);
    const selectedQuotReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    //in order having confirmation message
    const confirmationAlert = (0,useConfirm/* useConfirm */.N)({
        previousUrl: "/",
        nextUrl: "/transfer-details",
        message: "If you refresh the page, all data will be deleted."
    });
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: pickUpDropTypes/* SET_SELECT_ACTIVE_LINK */.A3,
            payload: ""
        });
        const container = document?.querySelector("#content");
        if (451 >= document?.documentElement?.clientWidth) {
            window.scroll({
                top: 541,
                left: 0,
                behavior: "smooth"
            });
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            title: "Quotation Results London Taxi",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (quotation_styles_module_default()).quotation_page,
                children: [
                    selectModalInfo && /*#__PURE__*/ jsx_runtime_.jsx(InfoModal/* default */.Z, {
                        content: "This is meant to give an approcimation of car size and category. Actual mane and model may vary"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (quotation_styles_module_default()).quotation_page_section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "content",
                                className: `${(quotation_styles_module_default()).quotation_page_container} container`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkBreadcumb/* default */.Z, {
                                        crumbs: crumbs
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LeftRightButtons/* default */.Z, {
                                        title: "Airport Transfer Quotations",
                                        linkToBack: "/",
                                        linkToForward: "/transfer-details",
                                        leftBtnTitle: "Go Back",
                                        rightBtnTitle: "Book Now"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(elements_PickDropPointNames, {
                                        pickUpPoints: pickUpOneWay,
                                        dropPoints: dropOffOneWay,
                                        title: "Transfer Prices",
                                        date: dateOneWay
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(elements_CardItem, {
                                        datas: quotOptionsOneWay,
                                        selectedQuotation: selectedQuotTransfer,
                                        journeyType: 0,
                                        duration: quotOptionsOneWay.duration
                                    }),
                                    returnPickUp.length > 0 ? "" : /*#__PURE__*/ jsx_runtime_.jsx(LeftRightButtons/* default */.Z, {
                                        linkToBack: "/",
                                        linkToForward: "/transfer-details",
                                        leftBtnTitle: "Go Back",
                                        rightBtnTitle: "Book Now"
                                    })
                                ]
                            }),
                            returnPickUp.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${(quotation_styles_module_default()).quotation_page_container} ${(quotation_styles_module_default()).quotation_page_container_return}  container`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(elements_PickDropPointNames, {
                                        pickUpPoints: returnPickUp,
                                        dropPoints: returnDropOf,
                                        title: "Return Prices",
                                        date: returnDate
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(elements_CardItem, {
                                        datas: rtQuotOptions,
                                        selectedQuotation: selectedQuotReturn,
                                        journeyType: 1,
                                        duration: rtQuotOptions.duration
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LeftRightButtons/* default */.Z, {
                                        linkToBack: "/",
                                        linkToForward: "/transfer-details"
                                    })
                                ]
                            }) : ""
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const quotation = (Quotation);
async function getServerSideProps({ req , res  }) {
    if (req.url === "/quotation") {
        return {
            redirect: {
                destination: `/`,
                permanent: false
            }
        };
    }
    return {
        props: {
            data: ""
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9646:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [699,676,1664,5789,8348,5367,4032,1680,9918,452], () => (__webpack_exec__(5691)));
module.exports = __webpack_exports__;

})();