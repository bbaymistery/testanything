(() => {
var exports = {};
exports.id = 7648;
exports.ids = [7648,3543,9738,6557,4678,3396,2858,150,4201,1344,1094,31,6103];
exports.modules = {

/***/ 1792:
/***/ ((module) => {

// Exports
module.exports = {
	"load_bar": "styles_load_bar__e2B_u",
	"bar": "styles_bar__HNX1d",
	"loading": "styles_loading__ftj4O"
};


/***/ }),

/***/ 546:
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5295);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const TextInvoice = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text_invoice),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().first_three),
                children: "INV"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().second_three),
                children: "OICE"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInvoice);


/***/ }),

/***/ 8851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ reservations_document),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/pages/reservations-document/Informations/Informations.js + 2 modules
var Informations = __webpack_require__(6824);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 4 modules
var Layout = __webpack_require__(5367);
// EXTERNAL MODULE: ./src/pages/reservations-document/styles.module.scss
var styles_module = __webpack_require__(5295);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "jspdf"
const external_jspdf_namespaceObject = require("jspdf");
;// CONCATENATED MODULE: external "html2canvas"
const external_html2canvas_namespaceObject = require("html2canvas");
// EXTERNAL MODULE: ./src/components/elements/Progressbar/styles.module.scss
var Progressbar_styles_module = __webpack_require__(1792);
var Progressbar_styles_module_default = /*#__PURE__*/__webpack_require__.n(Progressbar_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/Progressbar/index.js



const Progressbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Progressbar_styles_module_default()).load_bar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Progressbar_styles_module_default()).bar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Progressbar_styles_module_default()).bar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Progressbar_styles_module_default()).bar
            })
        ]
    });
};
/* harmony default export */ const elements_Progressbar = (Progressbar);

// EXTERNAL MODULE: ./src/pages/reservations-document/LogoDiv.js
var LogoDiv = __webpack_require__(3818);
// EXTERNAL MODULE: ./src/pages/reservations-document/TextInvoice.js
var TextInvoice = __webpack_require__(546);
// EXTERNAL MODULE: ./src/pages/reservations-document/ContentLeft.js
var ContentLeft = __webpack_require__(6898);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(6266);
// EXTERNAL MODULE: ./src/hooks/useConfirm.js
var useConfirm = __webpack_require__(628);
;// CONCATENATED MODULE: ./src/pages/reservations-document/index.js
















const ReservationDocument = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: reservId , 1: setReservId  } = (0,external_react_.useState)("");
    const { appData , reservations , meetPoint , params: { journeyType  } ,  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    const selectedArchieveToken = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectArchieveToken */.jc);
    const selectJourneyType = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedJourneyType */.D0);
    const checked = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectCHheckedInput */.On);
    const selectedPickUpPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayPickUpPointsOneWay */.Y6);
    const selectedDropPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayDroopOffPointsOneWay */.LD);
    const selectedQuotTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    const trDateTime = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayDateTimeString */.co);
    // //*inputs 0
    const fullnameTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerFullName */.bp);
    const emailTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerEmail */.dC);
    const phoneTranfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerPhone */.wz);
    const passengersTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengersNumber */.pH);
    const selectTransferComment = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferComment */.Y_);
    const selectReturPickUs = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPickUpPointsReturn */.BP);
    const selectReturnDrop = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDropOffPointsReturn */.G0);
    const selectSelectedReturnQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    const selectDateReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDateTimeString */.Cg);
    // //*inputs 1
    const selectReturnComment = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnComment */.RY);
    const selectReturnPassangers = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerNumber */.Es);
    const selectReturnFullName = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerFullName */.Kt);
    const selectReturnEmail = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerEmail */.ZW);
    const selectReturnPhone = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerPhone */.o2);
    const confirmationAlert = (0,useConfirm/* useConfirm */.N)({
        previousUrl: "/",
        nextUrl: "/",
        message: "If you leave the page, all data will be deleted."
    });
    //when passenger gets reserv d we need archieve token
    const fetchArchieveToken = async (params = {})=>{
        let { id , stage  } = params;
        let reservationObj = parseInt(selectJourneyType) === 1 ? reservations : [
            reservations[0]
        ];
        if (reservationObj.length > 1) {
            reservationObj = [
                {
                    ...reservationObj[0],
                    reservationDetails: {
                        ...reservationObj[0].reservationDetails,
                        id: id[0][0]
                    }
                },
                {
                    ...reservationObj[1],
                    reservationDetails: {
                        ...reservationObj[1].reservationDetails,
                        id: id[0][1]
                    }
                }, 
            ];
        } else {
            reservationObj = [
                {
                    ...reservationObj[0],
                    reservationDetails: {
                        ...reservationObj[0].reservationDetails,
                        id: id[0][0]
                    }
                }, 
            ];
        }
        let url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/sessions/add`;
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                token: selectedArchieveToken,
                details: reservationObj,
                stage
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log(stage, data);
    };
    const generatePdf = (e)=>{
        if (false) {}
    };
    function isJSON(string) {
        try {
            let json = JSON.parse(string);
            return true;
        } catch (error) {
            return false;
        }
    }
    const submitDataToGetReservId = ()=>{
        let body = parseInt(journeyType) === 1 ? reservations : [
            reservations[0]
        ];
        var requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                reservation: body,
                configurations: {
                    sendConfirmationEmailToPassenger: true
                }
            })
        };
        fetch(`${env/* default.apiDomain */.Z.apiDomain}/api/v1/reservation/`, requestOptions).then((response)=>response.json()).then((response)=>{
            response = isJSON(isJSON) ? JSON.parse(response) : response;
            console.log(response, "response");
            if (typeof response === "object" && response.status === 200) {
                setReservId(response.data["reservations-ids"] ? response.data["reservations-ids"] : null);
                fetchArchieveToken({
                    id: response.data["reservations-ids"],
                    stage: "GET_RESERVATION_ID"
                });
            } else {
                fetchArchieveToken({
                    id: [
                        [
                            null
                        ],
                        [
                            null
                        ]
                    ],
                    stage: "GET_SERVER_RESPONED"
                });
                window.handelErrorLogs("else part fetch response  https://api.london-tech.com/api/v1/reservation", "LHT ReservationDocument Component lht - submitDataToGetReservId function fetch_response_ else part ", {
                    requestOptions,
                    response,
                    body
                });
            }
        }).catch((error)=>{
            window.handelErrorLogs(error, "LHT ReservationDocument Component lht - submitDataToGetReservId function fetch_ cathc blog", {
                requestOptions,
                body
            });
        });
    };
    (0,external_react_.useEffect)(()=>{
        submitDataToGetReservId();
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (reservId) {
            window.scroll({
                top: 150,
                left: 0,
                behavior: "smooth"
            });
            fetchArchieveToken({
                id: reservId,
                stage: "RENDER_RESERVATION_DETAILS"
            });
        }
    }, [
        reservId
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            title: "APL",
            noFooter: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `page ${(styles_module_default()).reserv_page}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `page_section ${(styles_module_default()).reserv_page_section}`,
                    children: reservId ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `page_section_container ${(styles_module_default()).reserv_page_section_container}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(styles_module_default()).downland_button} text_center mb_1`,
                                onClick: generatePdf,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn_primary",
                                    children: "Downland the Confirmation"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).reserv_content,
                                id: "pdf_file",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(LogoDiv["default"], {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TextInvoice["default"], {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentLeft["default"], {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (styles_module_default()).reserv_content_right,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (styles_module_default()).right_header,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).right_header_left,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).left_box,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (styles_module_default()).box_left,
                                                                        children: "Date"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: (styles_module_default()).box_right,
                                                                        children: [
                                                                            ":",
                                                                            `${trDateTime.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).left_box,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (styles_module_default()).box_left,
                                                                        children: "Reference Id:"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: (styles_module_default()).box_right,
                                                                        children: [
                                                                            ":",
                                                                            reservId[0][0]
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).right_box,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: (styles_module_default()).amount_text,
                                                                children: "Amount"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: (styles_module_default()).right_box__number,
                                                                children: [
                                                                    "\xa3",
                                                                    " ",
                                                                    selectedQuotTransfer?.price && selectSelectedReturnQuot?.price ? Number(selectedQuotTransfer?.price) + Number(selectSelectedReturnQuot?.price) : Number(selectedQuotTransfer?.price),
                                                                    ".00"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).right_passenger_details,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Informations["default"], {
                                                    date: trDateTime,
                                                    quot: selectedQuotTransfer,
                                                    pickUps: selectedPickUpPointsTr,
                                                    drops: selectedDropPointsTr,
                                                    fullName: fullnameTransfer,
                                                    email: emailTransfer,
                                                    phone: phoneTranfer,
                                                    passengers: passengersTransfer,
                                                    note: selectTransferComment,
                                                    paymentType: reservations[0]?.paymentDetails?.paymentType,
                                                    title: "Transfer Details"
                                                })
                                            }),
                                            selectReturPickUs.length > 0 && selectReturnDrop.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${(styles_module_default()).right_header} mt_5 mb_2`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).right_header_left,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).left_box,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (styles_module_default()).box_left,
                                                                        children: "Date"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: (styles_module_default()).box_right,
                                                                        children: [
                                                                            ":",
                                                                            `${selectDateReturn.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (styles_module_default()).left_box,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (styles_module_default()).box_left,
                                                                        children: "Reference Id:"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: (styles_module_default()).box_right,
                                                                        children: [
                                                                            ":",
                                                                            reservId[0][1]
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).right_box,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: (styles_module_default()).amount_text,
                                                                children: "Amount"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: (styles_module_default()).right_box__number,
                                                                children: [
                                                                    "\xa3 ",
                                                                    Number(selectSelectedReturnQuot?.price),
                                                                    ".00"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : "",
                                            selectReturPickUs.length > 0 && selectReturnDrop.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Informations["default"], {
                                                date: selectDateReturn,
                                                quot: selectSelectedReturnQuot,
                                                pickUps: selectReturPickUs,
                                                drops: selectReturnDrop,
                                                fullName: checked ? fullnameTransfer : selectReturnFullName,
                                                email: checked ? emailTransfer : selectReturnEmail,
                                                phone: checked ? phoneTranfer : selectReturnPhone,
                                                passengers: checked ? passengersTransfer : selectReturnPassangers,
                                                note: selectReturnComment,
                                                paymentType: reservations[1]?.paymentDetails?.paymentType,
                                                title: "Return Details"
                                            }) : "",
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).bottom_tot,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (styles_module_default()).thankyou,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-face-smile"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Thank you for booking with us."
                                                        })
                                                    ]
                                                })
                                            }),
                                            selectReturPickUs.length > 0 && selectReturnDrop.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${(styles_module_default()).bottom_tot_price} mb_1`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (styles_module_default()).bottom_tot_price_text,
                                                        children: "Total Price:"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: (styles_module_default()).bottom_tot_price_price,
                                                        children: [
                                                            "\xa3",
                                                            selectedQuotTransfer?.price && selectSelectedReturnQuot?.price ? Number(selectedQuotTransfer?.price) + Number(selectSelectedReturnQuot?.price) : Number(selectedQuotTransfer?.price)
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(styles_module_default()).progress_div}  page_section_container`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(elements_Progressbar, {})
                    })
                })
            })
        })
    });
};
/* harmony default export */ const reservations_document = (ReservationDocument);
async function getServerSideProps({ req , res  }) {
    if (req.url === "/reservations-document") {
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
var __webpack_exports__ = __webpack_require__.X(0, [5789,5367,5295,4032,6824,6898,3818], () => (__webpack_exec__(8851)));
module.exports = __webpack_exports__;

})();