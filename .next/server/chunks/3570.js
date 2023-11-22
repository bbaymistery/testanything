"use strict";
exports.id = 3570;
exports.ids = [3570];
exports.modules = {

/***/ 6266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isDevelopment = false; // localohst -> true || live -> false
const env = {
    websiteDomain: isDevelopment ? "http://localhost:8000" : "https://london-heathrow.taxi",
    apiDomain: "https://api.london-tech.com",
    status: {
        success: 200,
        error: 403,
        success: 200,
        badRequest: 400,
        unauthorized: 401,
        forbidden: 403,
        methodNotAllowed: 405,
        notAcceptable: 406,
        internalServerError: 500
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (env);


/***/ }),

/***/ 3570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$s": () => (/* binding */ getAppData),
/* harmony export */   "Gt": () => (/* binding */ addItemToSelectedList),
/* harmony export */   "HZ": () => (/* binding */ gettingQuotations),
/* harmony export */   "K1": () => (/* binding */ collectPickUpPoints),
/* harmony export */   "K2": () => (/* binding */ deleteItemFromList),
/* harmony export */   "tl": () => (/* binding */ setPayment)
/* harmony export */ });
/* harmony import */ var _resources_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6266);
/* harmony import */ var _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8348);


const collectPickUpPoints = (inpValue, index, journeyType)=>(dispatch, getState)=>{
        const { pickUpDropOffReducer: { cookies: { sessionToken  } ,  } ,  } = getState();
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_LOCATIONS_REQUEST */ .Cz,
            payload: {
                journeyType,
                index
            }
        });
        const url = `${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/suggestions`;
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                value: inpValue,
                "session-token": `${sessionToken ? sessionToken : ""}`
            })
        };
        // console.log(inpValue, index, journeyType);
        fetch(url, config).then((res)=>res.json()).then((data)=>{
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_LOCATIONS_SUCCESS */ .pN,
                payload: {
                    data,
                    index,
                    inpValue,
                    journeyType
                }
            });
        // console.log(data);
        }).catch((error)=>{
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .FETCH_LOCATIONS_FAILURE */ .rZ,
                payload: {
                    errorMessage: error.message,
                    index
                }
            });
        });
    };
//Make Request for google places .This action was triggeren inside HanndleSearchResults
//we r also  cleaning input after selecting one item
const addItemToSelectedList = (requestBody, pickOrDrop, journeyType, objectDetails, indexOfInputField)=>(dispatch)=>{
        const url = `${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/google-places`;
        let index = pickOrDrop === "pickupPoints" ? 0 : 1;
        //request for google place and add item to the list
        if (requestBody.pcatId === 10) {
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    point: requestBody
                })
            };
            fetch(url, config).then((res)=>res.json()).then((data)=>{
                // console.log(data);
                dispatch({
                    type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .ADD_ITEM_TO_SELECTED_LIST */ .Z3,
                    payload: {
                        data: data?.point,
                        index,
                        journeyType,
                        objectDetails,
                        indexOfInputField
                    }
                });
            }).catch((error)=>{
                console.log(error);
            });
        } else if (requestBody.pcatId === 5) {
            //?transfer details icin post coda uygun adresleri getiririk
            const url1 = `${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/postcode-address`;
            const config1 = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postcodes: [
                        requestBody.postcode
                    ]
                })
            };
            fetch(url1, config1).then((res)=>res.json()).then((data)=>{
                dispatch({
                    type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .SET_POST_CODE_ADRESSES */ .II,
                    payload: data.results[0]
                });
            }).catch((error)=>{
                console.log(error);
            });
            // add item to the list directly
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .ADD_ITEM_TO_SELECTED_LIST */ .Z3,
                payload: {
                    data: requestBody,
                    index,
                    journeyType,
                    objectDetails,
                    indexOfInputField
                }
            });
        } else {
            // add item to the list directly
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .ADD_ITEM_TO_SELECTED_LIST */ .Z3,
                payload: {
                    data: requestBody,
                    index,
                    journeyType,
                    objectDetails,
                    indexOfInputField
                }
            });
        // console.log(
        //   requestBody,
        //   index,
        //   journeyType,
        //   objectDetails,
        //   indexOfInputField
        // );
        }
    };
const deleteItemFromList = (index, journeyType, indexOfCurrentItem)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .DELETE_ITEM_FROM_SELECTED_LIST */ .pB,
            payload: {
                index,
                journeyType,
                indexOfCurrentItem
            }
        });
    };
const gettingQuotations = (router, journeyType, updateInsideQuotation, seterrorDisabledMessageTransfer, seterrorDisabledMessageReturn)=>(dispatch, getState)=>{
        const { pickUpDropOffReducer: { reservations  } ,  } = getState();
        //transfer
        let trSelectedPickPoints = reservations[0]?.selectedPickupPoints;
        let trSelectedDroppPoints = reservations[0]?.selectedDropoffPoints;
        let transferDAteTimeString = reservations[0]?.transferDetails?.transferDateTimeString;
        //return
        let returnPickPoints = reservations[1]?.selectedPickupPoints;
        let returnDroppPoints = reservations[1]?.selectedDropoffPoints;
        let returnDAteTimeString = reservations[1]?.transferDetails?.transferDateTimeString;
        const url = `${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/quotation`;
        const configTransfer = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                selectedPickupPoints: trSelectedPickPoints,
                selectedDropoffPoints: trSelectedDroppPoints,
                transferDateTimeString: transferDAteTimeString
            })
        };
        const configReturn = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                selectedPickupPoints: returnPickPoints,
                selectedDropoffPoints: returnDroppPoints,
                transferDateTimeString: returnDAteTimeString
            })
        };
        //sadece disardan home pageden isteg gondererse calisir Transfer
        if (journeyType === 0 && !updateInsideQuotation.updateInsideQuotation) {
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_TRANSFER_QUOT_REQUEST */ .eS,
                payload: ""
            });
            fetch(url, configTransfer).then((res)=>res.json()).then((data)=>{
                if (data.status === 200) {
                    if (router) {
                        dispatch({
                            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_TRANSFER_QUOTATIONS */ .p_,
                            payload: {
                                data
                            }
                        });
                        router?.push("/quotation");
                    }
                } else {
                    if (data?.error?.global?.[0]) {
                        seterrorDisabledMessageTransfer(data?.error?.global?.[0]);
                        dispatch({
                            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                            payload: {
                                errorMessage: data?.error?.global[0]
                            }
                        });
                        setTimeout(()=>{
                            dispatch({
                                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                                payload: {
                                    errorMessage: ""
                                }
                            });
                            seterrorDisabledMessageTransfer("");
                        }, 2500);
                    }
                }
            }).catch((error)=>{
                dispatch({
                    type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                    payload: {
                        errorMessage: error.message
                    }
                });
            });
        }
        //sadece disardan return ile istek gondererse Ikisi icinde calisdiririq
        if (journeyType === 1 && !updateInsideQuotation.updateInsideQuotation) {
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_BOTH_TOGETHER_QUOT_REQUEST */ .NW,
                payload: ""
            });
            Promise.all([
                fetch(url, configTransfer),
                fetch(url, configReturn)
            ]).then(function(responses) {
                // Get a JSON object from each of the responses
                return Promise.all(responses.map(function(response) {
                    return response.json();
                }));
            }).then(function(data) {
                // Log the data to the console
                // You would do something with both sets of data here
                if (data[0].status === 200 && data[1].status === 200) {
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_BOTH_TOGETHER_QUOTATIONS */ .RO,
                        payload: {
                            trQuots: data[0],
                            retrunQuots: data[1]
                        }
                    });
                    if (router) {
                        router?.push("/quotation");
                    }
                    seterrorDisabledMessageTransfer("");
                    seterrorDisabledMessageReturn("");
                }
                if (data[0].status !== 200 && data[0]?.error?.global[0]) {
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_BOTH_TOGETHER_ERROR_QUOT */ .DH,
                        payload: {
                            errorMessage: data[0]?.error?.global[0]
                        }
                    });
                    seterrorDisabledMessageTransfer(data[0]?.error?.global[0]);
                    setTimeout(()=>{
                        seterrorDisabledMessageTransfer("");
                        dispatch({
                            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_BOTH_TOGETHER_ERROR_QUOT */ .DH,
                            payload: {
                                errorMessage: ""
                            }
                        });
                    }, 2500);
                }
                if (data[1].status !== 200 && data[1]?.error?.global[0]) {
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_BOTH_TOGETHER_ERROR_QUOT */ .DH,
                        payload: {
                            errorMessage: data[1]?.error?.global[0]
                        }
                    });
                    seterrorDisabledMessageReturn(data[1]?.error?.global[0]);
                    setTimeout(()=>{
                        seterrorDisabledMessageReturn("");
                        dispatch({
                            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_BOTH_TOGETHER_ERROR_QUOT */ .DH,
                            payload: {
                                errorMessage: ""
                            }
                        });
                    }, 4000);
                }
            }).catch(function(error) {
                dispatch({
                    type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_BOTH_TOGETHER_ERROR_QUOT */ .DH,
                    payload: error
                });
                console.log(error);
            });
        }
    };
const setPayment = (id, token, router)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .SET_PAYMENT */ .UE,
            payload: {
                token,
                paymentType: id
            }
        });
        if (id) router?.push(`/reservations-document`);
    };
//words cartypes categorytypes ...
const getAppData = ()=>(dispatch)=>{
        const url = `${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].apiDomain */ .Z.apiDomain}/app/en`;
        const config = {
            method: "GET"
        };
        fetch(url, config).then((res)=>res.json()).then((data)=>{
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_APP_DATA */ .Y4,
                payload: data
            });
        }).catch((error)=>{
            console.log(error);
        });
        //getting all payment types
        //
        const urlPaymentTypes = `${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/payment-types`;
        fetch(urlPaymentTypes, config).then((res)=>res.json()).then((data)=>{
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_1__/* .GET_PAYMENT_DATA */ .Sr,
                payload: data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };


/***/ })

};
;