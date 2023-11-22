(() => {
var exports = {};
exports.id = 8252;
exports.ids = [8252,3543,9738,6557,4678,3396,2858,150,4201,1344,31,6103];
exports.modules = {

/***/ 5136:
/***/ ((module) => {

// Exports
module.exports = {
	"payment_details": "styles_payment_details__GDSMJ",
	"header": "styles_header__F_hCB",
	"header_top_title": "styles_header_top_title__fxm3N",
	"header_top_subtitle": "styles_header_top_subtitle__RYrK9",
	"header_tot_price": "styles_header_tot_price__3kiYK",
	"header_tot_price_text": "styles_header_tot_price_text__yZZMW",
	"header_tot_price_price": "styles_header_tot_price_price__bX065",
	"payment_list": "styles_payment_list__8ZFal",
	"iframe": "styles_iframe__33ktR",
	"items_buttons": "styles_items_buttons__NMp_T",
	"item": "styles_item__CdBSz",
	"topleft_circle": "styles_topleft_circle__tjn6F",
	"bottomleft_circle": "styles_bottomleft_circle___xSaz",
	"topright_circle": "styles_topright_circle__HWwy0",
	"bottomright_circle": "styles_bottomright_circle___UW66",
	"item_1": "styles_item_1__LSx8i",
	"item_2": "styles_item_2__gVK2Z",
	"item_3": "styles_item_3__Gwhet",
	"item_4": "styles_item_4__4dddm",
	"modal": "styles_modal__y1JSK",
	"zoomout": "styles_zoomout__i2hZ_",
	"modal_container": "styles_modal_container__LIkng",
	"button_div": "styles_button_div__KMlwT"
};


/***/ }),

/***/ 9732:
/***/ ((module) => {

// Exports
module.exports = {
	"payment_page": "styles_payment_page__cmYTO",
	"payment_page_section": "styles_payment_page_section__Xi3eX",
	"payment_page_section_container": "styles_payment_page_section_container__X_IfN",
	"payment_details_content": "styles_payment_details_content__uHNBE",
	"title": "styles_title__DWD4y",
	"topleft_circle": "styles_topleft_circle__mGf9j",
	"bottomleft_circle": "styles_bottomleft_circle__98wAH",
	"topright_circle": "styles_topright_circle__AwC_F",
	"bottomright_circle": "styles_bottomright_circle__u845E",
	"car_image_div": "styles_car_image_div__r0vdk",
	"reserv_details": "styles_reserv_details__dNw_Y"
};


/***/ }),

/***/ 7319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ payment),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 4 modules
var Layout = __webpack_require__(5367);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/elements/LinkBreadcumb/index.js
var LinkBreadcumb = __webpack_require__(1680);
// EXTERNAL MODULE: ./src/pages/payment/styles.module.scss
var styles_module = __webpack_require__(9732);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
// EXTERNAL MODULE: ./src/components/elements/TDP_JourneySummary/index.js + 3 modules
var TDP_JourneySummary = __webpack_require__(5068);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: ./src/pages/payment/ReservDetail/ReservDetail.js
var ReservDetail = __webpack_require__(9811);
// EXTERNAL MODULE: ./src/components/elements/PaymentDetails/styles.module.scss
var PaymentDetails_styles_module = __webpack_require__(5136);
var PaymentDetails_styles_module_default = /*#__PURE__*/__webpack_require__.n(PaymentDetails_styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(6266);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropAction.js
var pickUpDropAction = __webpack_require__(3570);
;// CONCATENATED MODULE: ./src/components/elements/PaymentDetails/index.js









const PaymentDetail = ({ setConfirmation  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const { paymentTypes , reservations , cookies  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const trEmail = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerEmail */.dC);
    const trPhone = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerPhone */.wz);
    const journeyType = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedJourneyType */.D0);
    const selectedArchieveToken = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectArchieveToken */.jc);
    // console.log(cookies.sessionToken);
    const trQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    const returnQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    const { 0: openedIdPayment , 1: setOpenedIdOfPayment  } = (0,external_react_.useState)(""); //iframin acilmasinda bize komeklik edir
    const { 0: dataTokenForWebSocket , 1: setDataTokenForWebSocket  } = (0,external_react_.useState)("");
    const { 0: hrefForIframeAmex , 1: setHrefForIframeAmex  } = (0,external_react_.useState)("");
    const { 0: iframeStripe , 1: setIframeStripe  } = (0,external_react_.useState)("");
    const { 0: urlPaypal , 1: setUrlPaypal  } = (0,external_react_.useState)("");
    const { 0: statusToken , 1: setStatusToken  } = (0,external_react_.useState)("");
    const fetchArchieveToken = async (params = {})=>{
        let { token , paymentType , stage  } = params;
        let reservationObj = Number(journeyType) === 1 ? reservations : [
            reservations[0]
        ];
        console.log({
            length: reservationObj.length > 1
        });
        if (reservationObj.length > 1) {
            reservationObj = [
                {
                    ...reservationObj[0],
                    paymentDetails: {
                        ...reservationObj[0].paymentDetails,
                        token: token,
                        paymentType: paymentType
                    }
                },
                {
                    ...reservationObj[1],
                    paymentDetails: {
                        ...reservationObj[1].paymentDetails,
                        token: token,
                        paymentType: paymentType
                    }
                }
            ];
        } else {
            reservationObj = [
                {
                    ...reservationObj[0],
                    paymentDetails: {
                        ...reservationObj[0].paymentDetails,
                        token: token,
                        paymentType: paymentType
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
    };
    //sadece paypal icin bunu saxladim
    const openedWindow = (id, openOrClose, data)=>{
        if (id === 5) {
            let options = `menubar=no,location=yes,toolbar=no,left=${window.screen.width / 2 - 550 / 2},width=550,height=800`;
            let url = data?.href;
            var openedW = window.open(url, "_blank", options);
            if (id === 5) setUrlPaypal(openedW);
            if (!openOrClose) openedW.close();
        }
    };
    //*payment _1_(cash)
    const cashMethod = (id)=>{
        if (id === 1) {
            // 2 if it is cash payment you have set payment type first of all then send archive
            fetchArchieveToken({
                token: "",
                paymentType: "",
                stage: "CLICK_OVER_CASH_BUTTON"
            });
            dispatch((0,pickUpDropAction/* setPayment */.tl)(id, "", router));
            // if paypal is opened the close
            if (urlPaypal) urlPaypal?.close();
        }
    };
    const stripeMethod = (id, quotations, passengerEmail, url)=>{
        if (!iframeStripe) {
            try {
                if (id === 7) {
                    // if it is card payment you have set payment type first of all then send archive then
                    fetchArchieveToken({
                        token: "",
                        paymentType: 7,
                        stage: "CLICK_OVER_CARD_BUTTON"
                    });
                    let config = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            quotations,
                            type: id,
                            language: "en",
                            passengerEmail,
                            "session-id": cookies.sessionToken
                        })
                    };
                    fetch(url, config).then((res)=>res.json()).then((data)=>{
                        console.log(data);
                        // setConfirmation(false); //in order to open new window pop up
                        setDataTokenForWebSocket(data); //in order to a tag of pop up window
                        setStatusToken(data.webSocketToken); //it will trigger interval and will make request
                        setHrefForIframeAmex(""); //it is gonna close the iframe, if it is opened
                        setIframeStripe(data?.href);
                        //if we have opened window with paypal it will be closed
                        if (urlPaypal) urlPaypal?.close();
                    }).catch((error)=>{
                        window.handelErrorLogs(error, "LHT PaymentDetail Component lht- stripeMethod function fetching catch blog  ", {
                            config,
                            url
                        });
                    });
                }
            } catch (error) {
                window.handelErrorLogs(error, "LHT PaymentDetail Component lht - stripeMethod function catch blog ", {
                    id,
                    quotations,
                    passengerEmail,
                    url
                });
            }
        }
    };
    //*triggering payment methods And it  Will activate Cash or Stripe function => ((=>Step 1
    const startPayment = (id)=>{
        try {
            setOpenedIdOfPayment(id);
            cashMethod(id);
            //general settings
            const paymentPagePath = JSON.parse(paymentTypes.filter((payment)=>payment.id === id)[0].pagePath).path;
            const url = `${env/* default.apiDomain */.Z.apiDomain}/${paymentPagePath}`;
            let quotations = journeyType === 0 ? [
                trQuot
            ] : [
                trQuot,
                returnQuot
            ];
            let passengerEmail = trEmail;
            let passengerPhoneNumber = trPhone;
            //methods
            // paypalMethod(id, quotations, passengerEmail, url);
            // americanExpress(id, quotations,passengerEmail,passengerPhoneNumber,url);
            stripeMethod(id, quotations, passengerEmail, url);
        } catch (error) {
            window.handelErrorLogs(error, "LHT PaymentDetail Component lht -startPayment function catch blog", {
                id
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        const url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/payment/status`;
        let interVal;
        if (statusToken) {
            interVal = setInterval(async ()=>{
                console.log(statusToken + "" + "inside");
                let config = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        token: statusToken
                    })
                };
                try {
                    let requ = await fetch(url, config);
                    let resp = await requ.json();
                    if (resp?.status === 200) {
                        console.log(resp);
                        if (dataTokenForWebSocket?.href?.includes("paypal")) {
                            dispatch((0,pickUpDropAction/* setPayment */.tl)(5, resp.data.token, router));
                            openedWindow(5, false, dataTokenForWebSocket);
                            setStatusToken("");
                        }
                        if (dataTokenForWebSocket?.href?.includes("elavon")) {
                            dispatch((0,pickUpDropAction/* setPayment */.tl)(6, resp.data.token, router));
                            setStatusToken("");
                        }
                        if (dataTokenForWebSocket?.href?.includes("stripe")) {
                            //after you get a success payment status and after set a token into paymentDEtails object then send archive
                            fetchArchieveToken({
                                token: resp.data.token,
                                paymentType: 7,
                                stage: "GET_SUCCESS_CARD_PAYMENT"
                            });
                            dispatch((0,pickUpDropAction/* setPayment */.tl)(7, resp.data.token, router));
                            setHrefForIframeAmex("");
                            setIframeStripe("");
                            setStatusToken("");
                        } else {
                            window.handelErrorLogs("!dataTokenForWebSocket?.href?.includes(stripe)", "LHT PaymentDetail Component  lht- Useffect statustoken  if payment done successfully but it didnt includes (stipe)", {
                                config,
                                resp
                            });
                        }
                        clearInterval(interVal);
                    /// ....
                    }
                } catch (error) {
                    console.log(error);
                    window.handelErrorLogs(error, "LHT PaymentDetail Component - useEffect statusToken catch blog  ", {
                        config
                    });
                }
            }, 2000);
        }
        return ()=>clearInterval(interVal);
    }, [
        statusToken
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(PaymentDetails_styles_module_default()).payment_details}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (PaymentDetails_styles_module_default()).header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PaymentDetails_styles_module_default()).header_top,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (PaymentDetails_styles_module_default()).header_top_title,
                                    children: "How would you like to pay ?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/terms",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        target: "_blank",
                                        className: (PaymentDetails_styles_module_default()).header_top_subtitle,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-check"
                                            }),
                                            "By proceeding, you agree to our",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "terms and conditions"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PaymentDetails_styles_module_default()).header_tot_price,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (PaymentDetails_styles_module_default()).header_tot_price_text,
                                    children: "Total Price"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: (PaymentDetails_styles_module_default()).header_tot_price_price,
                                    children: [
                                        "\xa3",
                                        trQuot?.price && returnQuot?.price ? Number(trQuot?.price) + Number(returnQuot?.price) : Number(trQuot?.price)
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (PaymentDetails_styles_module_default()).payment_list,
                    children: [
                        hrefForIframeAmex && openedIdPayment === 6 && /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                            src: hrefForIframeAmex,
                            target: "_blank",
                            className: (PaymentDetails_styles_module_default()).iframe,
                            frameBorder: "0",
                            allow: "payment"
                        }),
                        iframeStripe && openedIdPayment === 7 && /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                            src: iframeStripe,
                            className: (PaymentDetails_styles_module_default()).iframe,
                            frameBorder: "0",
                            allow: "payment"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(PaymentDetails_styles_module_default()).items_buttons}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    title: "Pay with Cash to Driver",
                                    className: ` ${(PaymentDetails_styles_module_default()).item} ${(PaymentDetails_styles_module_default()).item_1}`,
                                    onClick: ()=>startPayment(1),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (PaymentDetails_styles_module_default()).topleft_circle,
                                            children: " "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (PaymentDetails_styles_module_default()).bottomleft_circle,
                                            children: " "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (PaymentDetails_styles_module_default()).topright_circle,
                                            children: " "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (PaymentDetails_styles_module_default()).bottomright_circle,
                                            children: " "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Pay Cash to Driver "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/cash.png",
                                            alt: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    title: "Pay with Stripe",
                                    className: `${(PaymentDetails_styles_module_default()).item} ${(PaymentDetails_styles_module_default()).item_4}`,
                                    onClick: ()=>startPayment(7),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (PaymentDetails_styles_module_default()).topleft_circle,
                                            children: " "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (PaymentDetails_styles_module_default()).bottomleft_circle,
                                            children: " "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (PaymentDetails_styles_module_default()).topright_circle,
                                            children: " "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (PaymentDetails_styles_module_default()).bottomright_circle,
                                            children: " "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Pay by Card "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/vsMaster.jpg",
                                            alt: ""
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const PaymentDetails = (PaymentDetail);

;// CONCATENATED MODULE: ./src/pages/payment/index.js













const Payment = ()=>{
    const { 0: crumbs , 1: setCrumbs  } = (0,external_react_.useState)([
        {
            linkName: "/",
            name: "home"
        },
        {
            linkName: "/quotation",
            name: "Airport Transfer Quotations"
        },
        {
            linkName: "/payment",
            name: "Airport Transfer Payment"
        }, 
    ]);
    const { 0: confirmation , 1: setConfirmation  } = (0,external_react_.useState)(true);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { reservations  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const selectedArchieveToken = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectArchieveToken */.jc);
    const selectJourneyType = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedJourneyType */.D0);
    const checked = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectCHheckedInput */.On);
    const selectedPickUpPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayPickUpPointsOneWay */.Y6);
    const selectedDropPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayDroopOffPointsOneWay */.LD);
    const selectedQuotTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    const selectedDateTimeOneway = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayDateTimeString */.co);
    // //*inputs 0
    const fullnameTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerFullName */.bp);
    const emailTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerEmail */.dC);
    const phoneTranfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerPhone */.wz);
    const passengersTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengersNumber */.pH);
    const selectTransferComment = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferComment */.Y_);
    const selectReturPickUs = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPickUpPointsReturn */.BP);
    const selectReturnDrop = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDropOffPointsReturn */.G0);
    const selectReturnQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    const selectDateReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDateTimeString */.Cg);
    // //*inputs 1
    const selectReturnComment = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnComment */.RY);
    const selectReturnPassangers = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerNumber */.Es);
    const selectReturnFullName = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerFullName */.Kt);
    const selectReturnEmail = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerEmail */.ZW);
    const selectReturnPhone = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerPhone */.o2);
    //passenger landing payment page We need archieveToken
    const fetchArchieveToken = async (params = {})=>{
        let { stage ,  } = params;
        let reservationObj = Number(selectJourneyType) === 1 ? reservations : [
            reservations[0]
        ];
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
        console.log({
            data,
            stage
        });
        console.log({
            reservationObj
        });
    };
    const getmettingPoint = (par)=>{
        const url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/drivers/meet-point`;
        let reqOptions = {
            method: "POST",
            body: JSON.stringify({
                point: reservations[0].selectedPickupPoints[0]
            }),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        };
        fetch(url, reqOptions).then((res)=>res.json()).then((data)=>{
            // console.log(data);
            dispatch({
                type: pickUpDropTypes/* GET_MEET_POINT */.DR,
                payload: data.data["meet-point"]
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
    //passenger landing payment page We need archieveToken
    (0,external_react_.useEffect)(()=>{
        getmettingPoint();
        dispatch({
            type: pickUpDropTypes/* SET_SELECT_ACTIVE_LINK */.A3,
            payload: ""
        });
        window.scroll({
            top: 170,
            left: 0,
            behavior: "smooth"
        });
        fetchArchieveToken({
            stage: "LANDED_INTO_PAYMENT_PAGE"
        });
    }, []);
    // prompt the user if they try and leave with unsaved changes
    (0,external_react_.useEffect)(()=>{
        let previousUrl = "/transfer-details";
        let nextUrl = "/reservations-document";
        const confirmationMessage = "If you leave the page, all data will be deleted.";
        const beforeUnloadHandler = async (e)=>{
            //when we click to close browser
            setTimeout(()=>{
                fetchArchieveToken({
                    stage: "PLAN_TO_CLOSE_PAYMENT_PAGE"
                });
            }, 10);
            // /in case if it is cancelled
            if (window.event.cancelable) {
                setTimeout(()=>{
                    fetchArchieveToken({
                        stage: "PAYMENT_PAGE_NOT_CLOSED"
                    });
                }, 450);
            }
            if (confirmation) {
                (e || window.event).returnValue = confirmationMessage;
                return confirmationMessage;
            }
        };
        // burasi bizim hangi sayfaya gecdigimizi soyler  (tiklayinca)
        const beforeRouteHandler = (url)=>{
            if (confirmation) {
                if (url === nextUrl || url === previousUrl) {
                    setConfirmation(false);
                    return;
                } else {
                    setConfirmation(true);
                }
                if ((router_default()).pathname !== url && !confirm(confirmationMessage)) {
                    router_default().events.emit("routeChangeError");
                    throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
                }
            }
        };
        const handleEndConcert = async ()=>{
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const method = "POST";
            const reservationObj = reservations;
            const url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/sessions/add`;
            const body = JSON.stringify({
                token: selectedArchieveToken,
                details: reservationObj,
                stage: "PAYMENT_PAGE_IS_CLOSED"
            });
            const response = await fetch(url, {
                method,
                body,
                headers,
                keepalive: true
            });
            const data = await response.json();
            console.log({
                data
            });
        };
        window.addEventListener("beforeunload", beforeUnloadHandler);
        window.addEventListener("unload", handleEndConcert);
        router_default().events.on("routeChangeStart", beforeRouteHandler);
        return ()=>{
            window.removeEventListener("beforeunload", beforeUnloadHandler);
            window.removeEventListener("unload", handleEndConcert);
            router_default().events.off("routeChangeStart", beforeRouteHandler);
        };
    }, [
        confirmation
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "Payment Details London Taxi",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `page ${(styles_module_default()).payment_page}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `page_section ${(styles_module_default()).payment_page_section}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `page_section_container ${(styles_module_default()).payment_page_section_container}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkBreadcumb/* default */.Z, {
                            crumbs: crumbs
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).payment_details_content,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).reserv_details,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: (styles_module_default()).title,
                                            children: "Go Jurney Details"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ReservDetail["default"], {
                                            date: selectedDateTimeOneway,
                                            quot: selectedQuotTransfer,
                                            pickUps: selectedPickUpPointsTr,
                                            drops: selectedDropPointsTr,
                                            fullName: fullnameTransfer,
                                            email: emailTransfer,
                                            phone: phoneTranfer,
                                            passengers: passengersTransfer,
                                            specialRequest: selectTransferComment
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).car_image_div,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TDP_JourneySummary/* default */.Z, {
                                        title: "Transfer Journey",
                                        journeyType: 0,
                                        showPrice: false,
                                        showPriceIncluded: true,
                                        mb_0: true,
                                        no_boxshadow: true,
                                        py_1: true,
                                        paymentPage: true
                                    })
                                })
                            ]
                        }),
                        selectReturPickUs.length > 0 && selectReturnDrop.length > 0 && selectReturnQuot && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).payment_details_content,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).reserv_details,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: `${(styles_module_default()).title} ${selectReturPickUs.length > 0 ? "mt_4" : ""}`,
                                            children: "Return Details"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ReservDetail["default"], {
                                            date: selectDateReturn,
                                            quot: selectReturnQuot,
                                            pickUps: selectReturPickUs,
                                            drops: selectReturnDrop,
                                            fullName: checked ? fullnameTransfer : selectReturnFullName,
                                            email: checked ? emailTransfer : selectReturnEmail,
                                            phone: checked ? phoneTranfer : selectReturnPhone,
                                            passengers: checked ? passengersTransfer : selectReturnPassangers,
                                            specialRequest: selectReturnComment
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).car_image_div,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TDP_JourneySummary/* default */.Z, {
                                        title: "Return Journey",
                                        journeyType: 1,
                                        showPrice: false,
                                        showPriceIncluded: true,
                                        mb_0: true,
                                        no_boxshadow: true,
                                        py_1: true,
                                        paymentPage: true
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PaymentDetails, {
                            setConfirmation: setConfirmation
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const payment = (Payment);
async function getServerSideProps({ req , res  }) {
    if (req.url === "/payment") {
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
var __webpack_exports__ = __webpack_require__.X(0, [699,676,1664,5789,8348,5367,3570,8333,5736,1680,5068,9811], () => (__webpack_exec__(7319)));
module.exports = __webpack_exports__;

})();