"use strict";
exports.id = 6824;
exports.ids = [6824];
exports.modules = {

/***/ 6824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Informations_Informations)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
;// CONCATENATED MODULE: ./src/components/elements/PickUpPointsInvoices/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const PickUpPointsInvoices = ({ pickUps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-map-marker-alt",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Pick-up Location :"
                    })
                ]
            }),
            pickUps?.map((point, i)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-check"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: point.address
                                })
                            ]
                        }),
                        point?.flightDetails?.flightNumber && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Fligth Number:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.flightDetails?.flightNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.flightDetails?.waitingPickupTime > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Waiting Pickup Time:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.flightDetails?.waitingPickupTime
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.postCodeDetails?.postCodeAddress && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Postcode Address:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.postCodeDetails?.postCodeAddress
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.cruiseNumber && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Cruise Name:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.cruiseNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.trainNumber && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Train Number:"
                                        }),
                                        " \xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.trainNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.roomNumber && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Address Description:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.roomNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 8 && point?.["address-description"] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Cities:"
                                        }),
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 9 && point?.["address-description"] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Universities And Colleges:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 10 && point?.["address-description"] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Description:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
/* harmony default export */ const elements_PickUpPointsInvoices = (PickUpPointsInvoices);

;// CONCATENATED MODULE: ./src/components/elements/DroppPointsInvoices/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const DropOffPointsInvoices = ({ drops  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-map-marker-alt",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Drop off Location :"
                    })
                ]
            }),
            drops?.map((point, i)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-check"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: point.address
                                })
                            ]
                        }),
                        point?.flightDetails?.flightNumber && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Fligth Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.flightDetails?.flightNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.postCodeDetails?.postCodeAddress && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Postcode Address:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.postCodeDetails?.postCodeAddress
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.cruiseNumber && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Cruise Name:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.cruiseNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.trainNumber && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Train Number:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.trainNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.roomNumber && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Address Description:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.roomNumber
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 7 && point?.["address-description"] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Places of Interest:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 8 && point?.["address-description"] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Cities:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 9 && point?.["address-description"] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Universities And Colleges:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: point?.["address-description"]
                                        })
                                    ]
                                })
                            ]
                        }),
                        point?.pcatId === 10 && point?.["address-description"] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-circle-dot"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../PickUpPointsInvoices/styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Description:"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
/* harmony default export */ const DroppPointsInvoices = (DropOffPointsInvoices);

;// CONCATENATED MODULE: ./src/pages/reservations-document/Informations/Informations.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







const Informations = ({ date , quot , pickUps , drops , fullName , email , passengers , phone , note , paymentType , hidePassengers , title ,  })=>{
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    //bunu sadece imgni getirmek ucun yazdg Secilen cardn img si
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${hidePassengers && Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
        children: carObject && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                children: [
                    !hidePassengers && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-user",
                                                            "aria-hidden": "true"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                    children: "Full Name:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                    children: fullName
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-phone",
                                                            "aria-hidden": "true"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                    children: "Phone Number:"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                    children: [
                                                                        "+",
                                                                        phone
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-at",
                                                            "aria-hidden": "true"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                    children: "Email Adress:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                    children: email
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-users",
                                                            "aria-hidden": "true"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                    children: "Passengers:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                    children: passengers
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                children: "TransferDetails"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(elements_PickUpPointsInvoices, {
                                                pickUps: pickUps
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(DroppPointsInvoices, {
                                                drops: drops
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-calendar-alt",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Landing Date :"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                children: `${date.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-clock",
                                                                "aria-hidden": "true"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Landing Time"
                                                            }),
                                                            ":"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                children: date.split(" ")[1]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        note && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-comment"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Note "
                                                            }),
                                                            ":"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                children: note
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        quot && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-car"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Vehicle Type :"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                children: quot && carObject[quot?.carId]?.name
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        quot && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-hurricane"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Transfer Type :"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                children: carObject[quot?.carId]?.transferType
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        quot && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-money-check"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Price :"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                children: [
                                                                    "\xa3 ",
                                                                    quot.price
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        quot && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-hand-holding-dollar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Payment Method:"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                                                children: [
                                                                    paymentType === 1 && "Pay With Cash To Driver",
                                                                    paymentType === 2 && "Pay With Credit Card",
                                                                    paymentType === 6 && "Pay With American Express",
                                                                    paymentType === 7 && "Pay With Stripe"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Informations_Informations = (Informations);


/***/ })

};
;