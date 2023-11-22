"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,3543,9738,6557,4678,3396,2858,150,4201,1344,31,6103];
exports.modules = {

/***/ 4755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
// EXTERNAL MODULE: ./src/helpers/getDate.js
var getDate = __webpack_require__(5795);
;// CONCATENATED MODULE: ./src/store/pickUpDropOffReducer/index.js


const INITIAL_STATE = {
    cookies: {
        sessionToken: ""
    },
    showOnlyTransferCOmp: true,
    reservations: [
        {
            reservationDetails: {
                channelId: 7,
                accountId: 1402
            },
            selectedPickupPoints: [],
            selectedDropoffPoints: [],
            quotation: {},
            transferDetails: {
                transferDateTimeString: (0,getDate/* dateFormatCheatTransfer */.t)(),
                pickupCategoryId: "",
                passengersNumber: 1,
                passengerSuitcase: 1,
                specialRequests: ""
            },
            passengerDetails: {
                token: "",
                lastname: "",
                language: "en",
                firstname: "",
                email: "",
                phone: ""
            },
            paymentDetails: {
                token: "",
                paymentType: "",
                account: 1402
            }
        },
        {
            reservationDetails: {
                channelId: 7,
                accountId: 1402
            },
            selectedPickupPoints: [],
            selectedDropoffPoints: [],
            quotation: {},
            transferDetails: {
                transferDateTimeString: (0,getDate/* dateFormatCheatReturn */.J9)(),
                pickupCategoryId: "",
                passengersNumber: 1,
                passengerSuitcase: 1,
                specialRequests: ""
            },
            passengerDetails: {
                token: "",
                lastname: "",
                language: "en",
                firstname: "",
                email: "",
                phone: ""
            },
            paymentDetails: {
                token: "",
                paymentType: "",
                account: 1402
            }
        }, 
    ],
    activeLinkName: "",
    appData: {},
    postCodeAdresses: [],
    checked: true,
    loadingPickUpOneWay: false,
    loadingDropOffOneWay: false,
    loadingPickUpReturn: false,
    loadingDropOffReturn: false,
    tokenForArchieve: "",
    params: {
        journeyType: "0",
        searchLoading: false,
        quotations: {
            quotationLoading: false,
            quotTransferLoading: false,
            // quotReturnLoading: false,
            quotBothLoading: false,
            quotationError: "",
            transferQuotations: [],
            returnQuotations: []
        },
        searchErrors: [
            {
                setErrorToHeroContent: false
            }
        ],
        searchEngine: [
            {
                pickupPoints: {},
                dropoffPoints: {}
            },
            {
                pickupPoints: {},
                dropoffPoints: {}
            }, 
        ],
        trDateCheat: (0,getDate/* dateTimeStringFunc */.Hp)(),
        returnDateCheat: (0,getDate/* dateTimeStringFuncForReturn */.o$)()
    },
    paymentTypes: [],
    direction: "left",
    checkingGoToNextPage: false,
    // flightNumber waiting pick up time ve baskalari
    objectDetailsForHandling: [
        {
            pickupHandling: [],
            dropHandling: []
        },
        {
            returnPcikHandling: [],
            returndropHandling: []
        }, 
    ],
    meetPoint: ""
};
const pickUpDropOffReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case pickUpDropTypes/* SET_SELECT_ACTIVE_LINK */.A3:
            {
                return {
                    ...state,
                    activeLinkName: action.payload
                };
            }
        case pickUpDropTypes/* FETCH_LOCATIONS_REQUEST */.Cz:
            {
                let { journeyType , index  } = action.payload;
                return {
                    ...state,
                    loadingPickUpOneWay: journeyType === 0 && index === 0 ? true : false,
                    loadingDropOffOneWay: journeyType === 0 && index === 1 ? true : false,
                    loadingPickUpReturn: journeyType === 1 && index === 0 ? true : false,
                    loadingDropOffReturn: journeyType === 1 && index === 1 ? true : false
                };
            }
        case pickUpDropTypes/* FETCH_LOCATIONS_SUCCESS */.pN:
            {
                const { index: index1 , data , journeyType: journeyType1  } = action.payload;
                return {
                    ...state,
                    cookies: {
                        ...state.cookies,
                        sessionToken: `${data["session-token"]}`
                    },
                    reservations: [
                        {
                            ...state.reservations[0],
                            passengerDetails: {
                                ...state.reservations[0].passengerDetails,
                                token: data?.token
                            }
                        },
                        {
                            ...state.reservations[1],
                            passengerDetails: {
                                ...state.reservations[1].passengerDetails,
                                token: data?.token
                            }
                        }, 
                    ],
                    loadingPickUpOneWay: false,
                    loadingDropOffOneWay: false,
                    loadingPickUpReturn: false,
                    loadingDropOffReturn: false,
                    // session_token: data.session - token,
                    params: {
                        ...state.params,
                        journeyType: journeyType1,
                        searchEngine: [
                            //!here changing pickup or dropoff  *points*
                            journeyType1 === 0 ? {
                                ...state.params.searchEngine[0],
                                pickupPoints: index1 === 0 ? data.result : state.params.searchEngine[0].pickupPoints,
                                dropoffPoints: index1 === 1 ? data.result : state.params.searchEngine[0].dropoffPoints
                            } : {
                                ...state.params.searchEngine[0]
                            },
                            //!here changing pickup or dropoff  *points*
                            journeyType1 === 1 ? {
                                ...state.params.searchEngine[1],
                                pickupPoints: index1 === 0 ? data.result : state.params.searchEngine[1].pickupPoints,
                                dropoffPoints: index1 === 1 ? data.result : state.params.searchEngine[1].dropoffPoints
                            } : {
                                ...state.params.searchEngine[1]
                            }, 
                        ]
                    },
                    tokenForArchieve: data?.token
                };
            }
        case pickUpDropTypes/* FETCH_LOCATIONS_FAILURE */.rZ:
            {
                return {
                    ...state,
                    loadingPickUpOneWay: false,
                    loadingDropOffOneWay: false,
                    loadingPickUpReturn: false,
                    loadingDropOffReturn: false
                };
            }
        case pickUpDropTypes/* ADD_ITEM_TO_SELECTED_LIST */.Z3:
            {
                const { data: data1 , index: index2 , journeyType: journeyType2 , objectDetails , indexOfInputField  } = action.payload;
                //flightNumber gii olanlarin error kkismini ayarlamamiz icin
                let pickupHandling = state.objectDetailsForHandling[0].pickupHandling;
                let dropHandling = state.objectDetailsForHandling[0].dropHandling;
                let returnPcikHandling = state.objectDetailsForHandling[1].returnPcikHandling;
                let returndropHandling = state.objectDetailsForHandling[1].returndropHandling;
                let errorObject = {
                    pcatId: data1.pcatId,
                    errorMessage: "",
                    ...objectDetails,
                    //adding waitingTime to each field Because laith wanted to add --select-- to flight waiting time
                    waitingMinute: index2 === 0 && data1.pcatId === 1 ? "" : "1",
                    waitingError: ""
                };
                // console.log(errorObject);
                // console.log(data, index, journeyType, objectDetails, indexOfInputField);
                let newFinalObj = {
                    ...data1,
                    ...objectDetails
                };
                let pickUpsTr = state.reservations[0].selectedPickupPoints;
                let dropOffsTr = state.reservations[0].selectedDropoffPoints;
                let pickUpsReturn = state?.reservations[1]?.selectedPickupPoints;
                let dropOffsReturn = state?.reservations[1]?.selectedDropoffPoints;
                if (index2 === 0 && journeyType2 === 0) {
                    pickUpsTr = [
                        ...pickUpsTr
                    ];
                    pickupHandling = [
                        ...pickupHandling
                    ];
                    pickUpsTr.splice(indexOfInputField, 1, newFinalObj);
                    // pickupHandling.splice(indexOfInputField, 1, errorObject);
                    pickupHandling[indexOfInputField] = errorObject; //a noter way of adding item to the list by index
                }
                if (index2 === 1 && journeyType2 === 0) {
                    dropOffsTr = [
                        ...dropOffsTr
                    ];
                    dropOffsTr.splice(indexOfInputField, 1, newFinalObj);
                    dropHandling.splice(indexOfInputField, 1, errorObject);
                }
                if (index2 === 0 && journeyType2 === 1) {
                    pickUpsReturn = [
                        ...pickUpsReturn
                    ];
                    returnPcikHandling = [
                        ...returnPcikHandling
                    ];
                    pickUpsReturn.splice(indexOfInputField, 1, newFinalObj);
                    returnPcikHandling.splice(indexOfInputField, 1, errorObject);
                }
                if (index2 === 1 && journeyType2 === 1) {
                    dropOffsReturn = [
                        ...dropOffsReturn
                    ];
                    returndropHandling = [
                        ...returndropHandling
                    ];
                    dropOffsReturn.splice(indexOfInputField, 1, newFinalObj);
                    returndropHandling.splice(indexOfInputField, 1, errorObject);
                }
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            selectedPickupPoints: pickUpsTr,
                            selectedDropoffPoints: dropOffsTr
                        },
                        {
                            ...state.reservations[1],
                            selectedPickupPoints: pickUpsReturn,
                            selectedDropoffPoints: dropOffsReturn
                        }, 
                    ],
                    objectDetailsForHandling: [
                        {
                            pickupHandling,
                            dropHandling
                        },
                        {
                            returnPcikHandling,
                            returndropHandling
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* DELETE_ITEM_FROM_SELECTED_LIST */.pB:
            {
                const { index: index3 , journeyType: journeyType3 , indexOfCurrentItem  } = action.payload;
                let pickUpsOneWAY = state.reservations[0].selectedPickupPoints;
                let dropOffOneWay = state.reservations[0].selectedDropoffPoints;
                // console.log(index, journeyType, indexOfCurrentItem);
                let pickUpsReturn1 = state.reservations[1]?.selectedPickupPoints;
                let dropOffReturn = state.reservations[1]?.selectedDropoffPoints;
                //flightNumber gii olanlarin error kkismini ayarlamamiz icin
                let pickupHandling1 = state.objectDetailsForHandling[0].pickupHandling;
                let dropHandling1 = state.objectDetailsForHandling[0].dropHandling;
                let returnPcikHandling1 = state.objectDetailsForHandling[1].returnPcikHandling;
                let returndropHandling1 = state.objectDetailsForHandling[1].returndropHandling;
                //filter for  oneway
                if (index3 === 0 && journeyType3 === 0) {
                    pickUpsOneWAY?.splice(indexOfCurrentItem, 1);
                    pickupHandling1?.splice(indexOfCurrentItem, 1);
                }
                if (index3 === 1 && journeyType3 === 0) {
                    dropOffOneWay?.splice(indexOfCurrentItem, 1);
                    dropHandling1?.splice(indexOfCurrentItem, 1);
                }
                //filter for  return
                if (index3 === 0 && journeyType3 === 1) {
                    pickUpsReturn1?.splice(indexOfCurrentItem, 1);
                    returnPcikHandling1?.splice(indexOfCurrentItem, 1);
                }
                if (index3 === 1 && journeyType3 === 1) {
                    dropOffReturn?.splice(indexOfCurrentItem, 1);
                    returndropHandling1?.splice(indexOfCurrentItem, 1);
                }
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            selectedPickupPoints: pickUpsOneWAY,
                            selectedDropoffPoints: dropOffOneWay
                        },
                        {
                            ...state.reservations[1],
                            selectedPickupPoints: pickUpsReturn1,
                            selectedDropoffPoints: dropOffReturn
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_POST_CODE_ADRESSES */.II:
            {
                let newpostcodeAdress = state.postCodeAdresses;
                if (action.payload?.length > 0) {
                    newpostcodeAdress.push(...action.payload);
                } else {
                    newpostcodeAdress.push(action.payload);
                }
                return {
                    ...state,
                    postCodeAdresses: newpostcodeAdress
                };
            }
        case pickUpDropTypes/* RESET_INPUT_LOADINGS */.Z:
            {
                return {
                    ...state,
                    loadingPickUpOneWay: false,
                    loadingDropOffOneWay: false,
                    loadingPickUpReturn: false,
                    loadingDropOffReturn: false
                };
            }
        case pickUpDropTypes/* SET_DATE_TIME */.YM:
            {
                const { dateValue , journeyType: journeyType4 , pickupOrDropOrDate  } = action.payload;
                //these are for getting input date
                let trDateFormat;
                let tranferDatatime = state?.params.trDateCheat;
                let hourMinuteTransfer = tranferDatatime?.split(" ")[1];
                let yearTransfer = tranferDatatime?.split(" ")[0].split("-")[0];
                let monthTranfer = tranferDatatime?.split(" ")[0].split("-")[1];
                let dayTransfer = tranferDatatime?.split(" ")[0].split("-")[2];
                trDateFormat = `${dayTransfer}/${monthTranfer}/${yearTransfer} ${hourMinuteTransfer}`;
                //!return
                let returnDateFormat;
                let returnDatatime = state?.params.returnDateCheat;
                let hourMinuteReturn = returnDatatime?.split(" ")[1];
                let yearReturn = returnDatatime?.split(" ")[0].split("-")[0];
                let monthReturn = returnDatatime?.split(" ")[0].split("-")[1];
                let dayReturn = returnDatatime?.split(" ")[0].split("-")[2];
                returnDateFormat = `${dayReturn}/${monthReturn}/${yearReturn} ${hourMinuteReturn}`;
                //burasi teze gelen tarixi parcaliyirYuxardaki ise trDateFormatin undefined olmasinin garssin alr
                let year = dateValue.split("-")[0];
                let month = dateValue.split("-")[1];
                let day = dateValue.split("-")[2];
                //replacing frist index with new input date value
                if (pickupOrDropOrDate === "date") {
                    if (journeyType4 === 0) {
                        trDateFormat = `${day}/${month}/${year} ${hourMinuteTransfer}`;
                        tranferDatatime = `${dateValue} ${hourMinuteTransfer}`;
                    }
                    if (journeyType4 === 1) {
                        returnDateFormat = `${day}/${month}/${year} ${hourMinuteReturn}`;
                        returnDatatime = `${dateValue} ${hourMinuteReturn}`;
                    // console.log(returnDateFormat);
                    // console.log(returnDatatime);
                    // console.log(dateValue);
                    }
                }
                //these are for getting hour and minute for each return and transfer
                let direction = state.direction;
                if (journeyType4 === 0) {
                    direction = "left";
                }
                if (journeyType4 === 1) {
                    direction = "right";
                }
                // console.log(tranferDatatime);
                return {
                    ...state,
                    direction: direction,
                    reservations: [
                        {
                            ...state.reservations[0],
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                transferDateTimeString: trDateFormat
                            }
                        },
                        {
                            ...state.reservations[1],
                            transferDetails: {
                                ...state.reservations[1].transferDetails,
                                transferDateTimeString: returnDateFormat
                            }
                        }, 
                    ],
                    params: {
                        ...state.params,
                        trDateCheat: tranferDatatime,
                        returnDateCheat: returnDatatime
                    }
                };
            }
        case pickUpDropTypes/* SET_HOUR_AND_MINUTE */.Su:
            {
                const { valueOfHourOrMinute , transferOrReturn  } = action.payload;
                //these are for getting input date
                let tranferDatatime1 = state?.reservations[0].transferDetails?.transferDateTimeString;
                let trDate = tranferDatatime1.split(" ")[0]; //2022-04-18
                let trMinute = tranferDatatime1.split(" ")[1]?.split(":")[1]; //00   15 20 25
                let trHour = tranferDatatime1?.split(" ")[1]?.split(":")[0]; //1 2 3 4 5 6
                //cheat olanin saatini ayarlamak
                let tranferDatatimeCheat = state?.params.trDateCheat;
                let trCheatDate = tranferDatatimeCheat.split(" ")[0];
                //taking each hour 12   and minute 00
                let returnDatatime1;
                let returnDate;
                let returnMinute; //00   15 20 25
                let returnHour;
                let returnDatatimeChaet = state?.params?.returnDateCheat;
                let returnCheatDate = returnDatatimeChaet.split(" ")[0];
                if (state?.reservations[1]) {
                    returnDatatime1 = state?.reservations[1]?.transferDetails?.transferDateTimeString;
                    returnDate = returnDatatime1?.split(" ")[0];
                    returnMinute = returnDatatime1?.split(" ")[1]?.split(":")[1]; //00   15 20 25
                    returnHour = returnDatatime1?.split(" ")[1]?.split(":")[0];
                }
                //replacing frist index with new input date value
                if (transferOrReturn === "hourTr") {
                    tranferDatatime1 = `${trDate} ${valueOfHourOrMinute}:${trMinute}`;
                    tranferDatatimeCheat = `${trCheatDate} ${valueOfHourOrMinute}:${trMinute}`;
                }
                if (transferOrReturn === "minuteTr") {
                    tranferDatatime1 = `${trDate} ${trHour}:${valueOfHourOrMinute}`;
                    tranferDatatimeCheat = `${trCheatDate} ${trHour}:${valueOfHourOrMinute}`;
                }
                if (transferOrReturn === "hourReturn") {
                    returnDatatime1 = `${returnDate} ${valueOfHourOrMinute}:${returnMinute}`;
                    returnDatatimeChaet = `${returnCheatDate} ${valueOfHourOrMinute}:${returnMinute}`;
                }
                if (transferOrReturn === "minuteReturn") {
                    returnDatatime1 = `${returnDate} ${returnHour}:${valueOfHourOrMinute}`;
                    returnDatatimeChaet = `${returnCheatDate} ${returnHour}:${valueOfHourOrMinute}`;
                }
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                transferDateTimeString: tranferDatatime1
                            }
                        },
                        {
                            ...state.reservations[1],
                            transferDetails: {
                                ...state.reservations[1]?.transferDetails,
                                transferDateTimeString: returnDatatime1
                            }
                        }, 
                    ],
                    params: {
                        ...state.params,
                        trDateCheat: tranferDatatimeCheat,
                        returnDateCheat: returnDatatimeChaet
                    }
                };
            }
        case pickUpDropTypes/* GET_TRANSFER_QUOT_REQUEST */.eS:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotTransferLoading: true
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_TRANSFER_QUOTATIONS */.p_:
            {
                let tr = action.payload.data;
                let pickUpsTr1 = state?.reservations[0]?.selectedPickupPoints; //CATEGORYiD VE PRICIN ilk gelenlere gore ayarlanmasi
                let newQuotationTransfer = state?.reservations[0]?.quotation;
                return {
                    ...state,
                    // otomotik secilmesi icin direk quotation icine birinci geleni atrq quotation icine(ve bu olur ilk secilen quotation)
                    reservations: [
                        {
                            ...state?.reservations[0],
                            quotation: {
                                ...action.payload?.data?.quotationOptions[0]
                            },
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                pickupCategoryId: pickUpsTr1.length > 0 ? pickUpsTr1[0]?.pcatId : ""
                            },
                            paymentDetails: {
                                ...state.reservations[0].paymentDetails,
                                price: Number(action.payload?.data?.quotationOptions[0]?.price)
                            }
                        },
                        {
                            ...state?.reservations[1]
                        }, 
                    ],
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotTransferLoading: false,
                            transferQuotations: tr
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_QUOT_TRANSFER_ERROR */.w7:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotationError: action.payload,
                            quotTransferLoading: false
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_BOTH_TOGETHER_QUOT_REQUEST */.NW:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotBothLoading: true
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_BOTH_TOGETHER_QUOTATIONS */.RO:
            {
                let { trQuots , retrunQuots  } = action.payload;
                let pickUpsTr2 = state?.reservations[0]?.selectedPickupPoints;
                let pickUpsReturn2 = state?.reservations[1]?.selectedPickupPoints;
                let newQuotationReturn = state?.reservations[1]?.quotation;
                let newQuotationTransfer1 = state?.reservations[0]?.quotation;
                return {
                    ...state,
                    reservations: [
                        {
                            ...state?.reservations[0],
                            quotation: {
                                ...trQuots.quotationOptions[0]
                            },
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                pickupCategoryId: pickUpsTr2.length > 0 ? pickUpsTr2[0]?.pcatId : ""
                            },
                            paymentDetails: {
                                ...state.reservations[0].paymentDetails,
                                price: Number(trQuots.quotationOptions[0]?.price)
                            }
                        },
                        {
                            ...state?.reservations[1],
                            quotation: {
                                ...retrunQuots.quotationOptions[0]
                            },
                            transferDetails: {
                                ...state?.reservations[1]?.transferDetails,
                                pickupCategoryId: pickUpsReturn2?.length > 0 ? pickUpsReturn2[0]?.pcatId : ""
                            },
                            paymentDetails: {
                                ...state.reservations[1]?.paymentDetails,
                                price: Number(retrunQuots.quotationOptions[0]?.price)
                            }
                        }, 
                    ],
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotBothLoading: false,
                            transferQuotations: trQuots,
                            returnQuotations: retrunQuots
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_BOTH_TOGETHER_ERROR_QUOT */.DH:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotationError: action.payload,
                            quotBothLoading: false
                        }
                    }
                };
            }
        //we r using in alert div when eror is occured
        case pickUpDropTypes/* SET_ERROR_INSIDE_HEROR_CONTENT */.Ys:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        searchErrors: [
                            {
                                ...state.params.searchErrors[0],
                                setErrorToHeroContent: action.payload
                            }, 
                        ]
                    }
                };
            }
        case pickUpDropTypes/* SET_QUOTATION */.bz:
            {
                const { quotation , journeyType: journeyType5  } = action.payload;
                let pickUpsTr3 = state?.reservations[0]?.selectedPickupPoints;
                let pickUpsReturn3 = state?.reservations[1]?.selectedPickupPoints;
                let newQuotationReturn1 = state?.reservations[1]?.quotation;
                let newQuotationTransfer2 = state?.reservations[0]?.quotation;
                if (journeyType5 === 0) newQuotationTransfer2 = quotation;
                if (journeyType5 === 1) newQuotationReturn1 = quotation;
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            quotation: newQuotationTransfer2,
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                pickupCategoryId: pickUpsTr3.length > 0 ? pickUpsTr3[0]?.pcatId : ""
                            },
                            paymentDetails: {
                                ...state.reservations[0].paymentDetails,
                                price: Number(newQuotationTransfer2?.price)
                            }
                        },
                        {
                            ...state.reservations[1],
                            quotation: newQuotationReturn1,
                            transferDetails: {
                                ...state?.reservations[1]?.transferDetails,
                                pickupCategoryId: pickUpsReturn3?.length > 0 ? pickUpsReturn3[0]?.pcatId : ""
                            },
                            paymentDetails: {
                                ...state.reservations[1]?.paymentDetails,
                                price: Number(newQuotationReturn1?.price)
                            }
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* UPDATE_PASSNEGER_DETAILS */.kE:
            {
                const { value , nameOfInput , journeyType: journeyType6  } = action.payload;
                const passTrDetails = state.reservations[0]?.passengerDetails;
                const passReturnDetails = state.reservations[1]?.passengerDetails;
                const checked = state.checked;
                let newValue = null;
                let returnValue = null;
                if (journeyType6 === 0 && nameOfInput !== "passengersNumber") {
                    newValue = {
                        ...passTrDetails,
                        [nameOfInput]: value
                    };
                    if (checked) {
                        returnValue = {
                            ...passTrDetails,
                            [nameOfInput]: value
                        };
                    }
                }
                if (journeyType6 === 1 && nameOfInput !== "passengersNumber") {
                    returnValue = {
                        ...passReturnDetails,
                        [nameOfInput]: value
                    };
                }
                //*
                //*
                //burda pax ve requwest ucun degerleri stora yazrg
                const paxTr = state.reservations[0]?.transferDetails;
                const paxReturn = state.reservations[1]?.transferDetails;
                //PASSENGERNUMBERS
                let newPaxValueForTr = null;
                let newPaxReturnValue = null;
                if (journeyType6 === 0 && nameOfInput === "passengersNumber") {
                    newPaxValueForTr = {
                        ...paxTr,
                        passengersNumber: value
                    };
                    //burda ise transferde degisen passenger numberi return icine atyrq eger checked ise
                    if (checked) {
                        newPaxReturnValue = {
                            ...paxReturn,
                            passengersNumber: value
                        };
                    }
                }
                if (journeyType6 === 1 && nameOfInput === "passengersNumber" && !checked) {
                    newPaxReturnValue = {
                        ...paxReturn,
                        passengersNumber: value
                    };
                }
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            passengerDetails: newValue ? newValue : passTrDetails,
                            transferDetails: newPaxValueForTr ? newPaxValueForTr : paxTr
                        },
                        {
                            ...state.reservations[1],
                            passengerDetails: returnValue ? returnValue : passReturnDetails,
                            transferDetails: newPaxReturnValue ? newPaxReturnValue : paxReturn
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* UPDATE_SPECIAL_REQUEST */.OY:
            {
                const { journeyType: journeyType7 , value: value1  } = action.payload;
                const paxTr1 = state.reservations[0]?.transferDetails;
                const paxReturn1 = state.reservations[1]?.transferDetails;
                let newPaxValueForTr1 = null;
                let newPaxReturnValue1 = null;
                if (journeyType7 === 0) {
                    newPaxValueForTr1 = {
                        ...paxTr1,
                        specialRequests: value1
                    };
                }
                if (journeyType7 === 1) {
                    newPaxReturnValue1 = {
                        ...paxReturn1,
                        specialRequests: value1
                    };
                }
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            transferDetails: newPaxValueForTr1 ? newPaxValueForTr1 : paxTr1
                        },
                        {
                            ...state.reservations[1],
                            transferDetails: newPaxReturnValue1 ? newPaxReturnValue1 : paxReturn1
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx:
            {
                const { erMessage , jourrneyType , categoryOfError , whichSelectedItem  } = action.payload;
                let pickupHandling2 = state.objectDetailsForHandling[0]?.pickupHandling;
                let dropHandling2 = state.objectDetailsForHandling[0]?.dropHandling;
                //transferPickUp
                if (jourrneyType === "transfer" && categoryOfError === "flightCategory") {
                    pickupHandling2 = pickupHandling2?.map((item, i)=>{
                        return i === whichSelectedItem && item.pcatId === 1 ? {
                            ...item,
                            errorMessage: erMessage
                        } : item;
                    });
                }
                if (jourrneyType === "transfer" && categoryOfError === "flightCategory_Waiting") {
                    // console.log("reducer calisdir");
                    pickupHandling2 = pickupHandling2?.map((item, i)=>{
                        return i === whichSelectedItem && item.pcatId === 1 ? {
                            ...item,
                            waitingError: erMessage
                        } : item;
                    });
                }
                //*post statr
                if (jourrneyType === "transfer" && categoryOfError === "postCategory") {
                    pickupHandling2 = pickupHandling2?.map((item, i)=>{
                        return i === whichSelectedItem && item.pcatId === 5 ? {
                            ...item,
                            errorMessage: erMessage
                        } : item;
                    });
                }
                if (jourrneyType === "transfertwo" && categoryOfError === "postCategory") {
                    dropHandling2 = dropHandling2?.map((item, i)=>{
                        return i === whichSelectedItem && item.pcatId === 5 ? {
                            ...item,
                            errorMessage: erMessage
                        } : item;
                    });
                }
                //*post finish
                //!cruise start
                if (jourrneyType === "transfer" && categoryOfError === "cruise") {
                    pickupHandling2 = pickupHandling2?.map((item, i)=>{
                        return i === whichSelectedItem && item.pcatId === 2 ? {
                            ...item,
                            errorMessage: erMessage
                        } : item;
                    });
                }
                //!cruise finish
                let returnPcikHandling2 = state.objectDetailsForHandling[1].returnPcikHandling;
                let returndropHandling2 = state.objectDetailsForHandling[1].returndropHandling;
                return {
                    ...state,
                    objectDetailsForHandling: [
                        {
                            pickupHandling: pickupHandling2,
                            dropHandling: dropHandling2
                        },
                        {
                            returnPcikHandling: returnPcikHandling2,
                            returndropHandling: returndropHandling2
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke:
            {
                const { erMessage: erMessage1 , jourrneyType: jourrneyType1 , categoryOfError: categoryOfError1 , whichSelectedItem: whichSelectedItem1  } = action.payload;
                let returnPcikHandling3 = state.objectDetailsForHandling[1].returnPcikHandling;
                let returndropHandling3 = state.objectDetailsForHandling[1].returndropHandling;
                //return pickuppoints
                if (jourrneyType1 === "return" && categoryOfError1 === "flightCategory") {
                    returnPcikHandling3 = returnPcikHandling3?.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 1 ? {
                            ...item,
                            errorMessage: erMessage1
                        } : item;
                    });
                }
                if (jourrneyType1 === "return" && categoryOfError1 === "flightCategory_Waiting") {
                    returnPcikHandling3 = returnPcikHandling3?.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 1 ? {
                            ...item,
                            waitingError: erMessage1
                        } : item;
                    });
                }
                //!post start
                if (jourrneyType1 === "return" && categoryOfError1 === "postCategory") {
                    returnPcikHandling3 = returnPcikHandling3?.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 5 ? {
                            ...item,
                            errorMessage: erMessage1
                        } : item;
                    });
                }
                if (jourrneyType1 === "returntwo" && categoryOfError1 === "postCategory") {
                    returndropHandling3 = returndropHandling3?.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 5 ? {
                            ...item,
                            errorMessage: erMessage1
                        } : item;
                    });
                }
                //!post finish
                let pickupHandling3 = state.objectDetailsForHandling[0]?.pickupHandling;
                let dropHandling3 = state.objectDetailsForHandling[0]?.dropHandling;
                //!cruise start
                if (jourrneyType1 === "return" && categoryOfError1 === "cruise") {
                    returnPcikHandling3 = returnPcikHandling3?.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 2 ? {
                            ...item,
                            errorMessage: erMessage1
                        } : item;
                    });
                }
                //!cruise finish
                return {
                    ...state,
                    objectDetailsForHandling: [
                        {
                            pickupHandling: pickupHandling3,
                            dropHandling: dropHandling3
                        },
                        {
                            returnPcikHandling: returnPcikHandling3,
                            returndropHandling: returndropHandling3
                        }, 
                    ]
                };
            }
        //flightdetails faln onlari udpdate elyrk
        case pickUpDropTypes/* UPDATE_SELECTED_ITEMS_INPUTS */.EY:
            {
                const { value: value2 , pickOrDrop , journeyType: journeyType8 , nameOfInput: nameOfInput1 , whichSelectedItem: whichSelectedItem2 , categoryOfTheType , selectedIndex  } = action.payload;
                //flightCategory
                let pickUpTransferPoints = state?.reservations[0]?.selectedPickupPoints;
                let dropOfTransferPoints = state?.reservations[0]?.selectedDropoffPoints;
                let pickUpReturnPoints = state?.reservations[1]?.selectedPickupPoints;
                let dropOfReturnPoints = state?.reservations[1]?.selectedDropoffPoints;
                //flightNumber gii olanlarin error kkismini ayarlamamiz icin
                let pickupHandling4 = state.objectDetailsForHandling[0].pickupHandling;
                let dropHandling4 = state.objectDetailsForHandling[0].dropHandling;
                let returnPcikHandling4 = state.objectDetailsForHandling[1].returnPcikHandling;
                let returndropHandling4 = state.objectDetailsForHandling[1].returndropHandling;
                //*flight start
                //!transferin pickup ayarlamasi
                if (journeyType8 === 0 && pickOrDrop === 0 && categoryOfTheType === 1) {
                    pickUpTransferPoints = pickUpTransferPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            flightDetails: {
                                ...item?.flightDetails,
                                [nameOfInput1]: value2
                            }
                        } : item;
                    });
                    pickupHandling4 = pickupHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            errorMessage: nameOfInput1 === "flightNumber" && value2 ? "" : value2.length <= 0 ? "required" : item.errorMessage,
                            flightDetails: {
                                ...item.flightDetails,
                                [nameOfInput1]: value2
                            },
                            waitingMinute: nameOfInput1 === "waitingPickupTime" && selectedIndex === 0 ? "" : nameOfInput1 === "waitingPickupTime" ? value2.toString() : item.waitingMinute,
                            waitingError: nameOfInput1 === "waitingPickupTime" && selectedIndex === 0 ? "required" : ""
                        } : item;
                    });
                }
                //!transferin dropOff ayarlamasi
                //burda waiting numberi gizletdik cunki gelen jsonnan aldgmz deger 3 du
                if (journeyType8 === 0 && pickOrDrop === 1 && categoryOfTheType === 1) {
                    dropOfTransferPoints = dropOfTransferPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                ["flightNumber"]: value2
                            }
                        } : item;
                    });
                    dropHandling4 = dropHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                ["flightNumber"]: value2
                            }
                        } : item;
                    });
                }
                //!return pick up ayarlamasi
                if (journeyType8 === 1 && pickOrDrop === 0 && categoryOfTheType === 1) {
                    pickUpReturnPoints = pickUpReturnPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                [nameOfInput1]: value2
                            }
                        } : item;
                    });
                    returnPcikHandling4 = returnPcikHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            errorMessage: nameOfInput1 === "flightNumber" && value2 ? "" : value2.length <= 0 ? "required" : item.errorMessage,
                            flightDetails: {
                                ...item.flightDetails,
                                [nameOfInput1]: value2
                            },
                            waitingMinute: nameOfInput1 === "waitingPickupTime" && selectedIndex === 0 ? "" : nameOfInput1 === "waitingPickupTime" ? value2.toString() : item.waitingMinute,
                            waitingError: nameOfInput1 === "waitingPickupTime" && selectedIndex === 0 ? "required" : ""
                        } : item;
                    });
                }
                //!return drop off ayarlamasi
                if (journeyType8 === 1 && pickOrDrop === 1 && categoryOfTheType === 1) {
                    dropOfReturnPoints = dropOfReturnPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                ["flightNumber"]: value2
                            }
                        } : item;
                    });
                    returndropHandling4 = returndropHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                ["flightNumber"]: value2
                            }
                        } : item;
                    });
                }
                //?flight finish
                //?start cruices /train/ RoomNumber / Place of interest //cities //universities //otthers(10)
                if (journeyType8 === 0 && pickOrDrop === 0 && categoryOfTheType !== 1 && categoryOfTheType !== 5) {
                    pickUpTransferPoints = pickUpTransferPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            [nameOfInput1]: value2
                        } : item;
                    });
                    pickupHandling4 = pickupHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            errorMessage: nameOfInput1 === "cruiseNumber" ? "" : value2.length <= 0 ? "required" : item.errorMessage || nameOfInput1 === "roomNumber" ? "" : value2.length <= 0 ? "required" : item.errorMessage,
                            [nameOfInput1]: value2
                        } : item;
                    });
                }
                if (journeyType8 === 0 && pickOrDrop === 1 && categoryOfTheType !== 1 && categoryOfTheType !== 5) {
                    dropOfTransferPoints = dropOfTransferPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            [nameOfInput1]: value2
                        } : item;
                    });
                    dropHandling4 = dropHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            [nameOfInput1]: value2
                        } : item;
                    });
                }
                if (journeyType8 === 1 && pickOrDrop === 0 && categoryOfTheType !== 1 && categoryOfTheType !== 5) {
                    pickUpReturnPoints = pickUpReturnPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            [nameOfInput1]: value2
                        } : item;
                    });
                    returnPcikHandling4 = returnPcikHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            errorMessage: nameOfInput1 === "cruiseNumber" ? "" : value2.length <= 0 ? "required" : item.errorMessage || nameOfInput1 === "roomNumber" ? "" : value2.length <= 0 ? "required" : item.errorMessage,
                            [nameOfInput1]: value2
                        } : item;
                    });
                }
                if (journeyType8 === 1 && pickOrDrop === 1 && categoryOfTheType !== 1 && categoryOfTheType !== 5) {
                    dropOfReturnPoints = dropOfReturnPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            [nameOfInput1]: value2
                        } : item;
                    });
                    returndropHandling4 = returndropHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            [nameOfInput1]: value2
                        } : item;
                    });
                }
                //****
                //*postCodeStart
                //burda naeofInput value gibi islem gorur value ise id gibi
                //oyuzden nameofinput.length falan ile error handle olunur
                if (journeyType8 === 0 && pickOrDrop === 0 && categoryOfTheType === 5) {
                    pickUpTransferPoints = pickUpTransferPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value2,
                                postCodeAddress: nameOfInput1
                            }
                        } : item;
                    });
                    pickupHandling4 = pickupHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            errorMessage: nameOfInput1.length > 0 ? "" : nameOfInput1.length <= 0 ? "required" : item.errorMessage,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value2,
                                postCodeAddress: nameOfInput1
                            }
                        } : item;
                    });
                }
                if (journeyType8 === 0 && pickOrDrop === 1 && categoryOfTheType === 5) {
                    dropOfTransferPoints = dropOfTransferPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value2,
                                postCodeAddress: nameOfInput1
                            }
                        } : item;
                    });
                    dropHandling4 = dropHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            errorMessage: nameOfInput1.length > 0 ? "" : nameOfInput1.length <= 0 ? "required" : item.errorMessage,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value2,
                                postCodeAddress: nameOfInput1
                            }
                        } : item;
                    });
                }
                if (journeyType8 === 1 && pickOrDrop === 0 && categoryOfTheType === 5) {
                    pickUpReturnPoints = pickUpReturnPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value2,
                                postCodeAddress: nameOfInput1
                            }
                        } : item;
                    });
                    returnPcikHandling4 = returnPcikHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            errorMessage: nameOfInput1.length > 0 ? "" : nameOfInput1.length <= 0 ? "required" : item.errorMessage,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value2,
                                postCodeAddress: nameOfInput1
                            }
                        } : item;
                    });
                }
                if (journeyType8 === 1 && pickOrDrop === 1 && categoryOfTheType === 5) {
                    dropOfReturnPoints = dropOfReturnPoints?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value2,
                                postCodeAddress: nameOfInput1
                            }
                        } : item;
                    });
                    returndropHandling4 = returndropHandling4?.map((item, i)=>{
                        return i === whichSelectedItem2 ? {
                            ...item,
                            errorMessage: nameOfInput1.length > 0 ? "" : nameOfInput1.length <= 0 ? "required" : item.errorMessage,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value2,
                                postCodeAddress: nameOfInput1
                            }
                        } : item;
                    });
                }
                //?fpostCOde finish
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            selectedPickupPoints: pickUpTransferPoints,
                            selectedDropoffPoints: dropOfTransferPoints
                        },
                        {
                            ...state.reservations[1],
                            selectedPickupPoints: pickUpReturnPoints,
                            selectedDropoffPoints: dropOfReturnPoints
                        }, 
                    ],
                    objectDetailsForHandling: [
                        {
                            pickupHandling: pickupHandling4,
                            dropHandling: dropHandling4
                        },
                        {
                            returnPcikHandling: returnPcikHandling4,
                            returndropHandling: returndropHandling4
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SWITCH_JOURNEY */.QI:
            {
                let pickUpsTr4 = state.reservations[0].selectedPickupPoints;
                let dropOffsTr1 = state.reservations[0].selectedDropoffPoints;
                let trHnadlingPickUp = state.objectDetailsForHandling[0].pickupHandling;
                let trHandlingDrop = state.objectDetailsForHandling[0].dropHandling;
                //these are for getting input date
                let newFormatDate, returnFormatDate;
                let tr1 = state?.params.trDateCheat;
                let trDate1 = tr1.split(" ")[0]; //14:22
                let trMinuteHour = tr1.split(" ")[1];
                let year1 = trDate1.split("-")[0];
                let month1 = trDate1.split("-")[1];
                let day1 = trDate1.split("-")[2];
                newFormatDate = `${day1}/${month1}/${year1} ${trMinuteHour}`;
                let rt = state?.params.returnDateCheat;
                let rrtDt = rt.split(" ")[0];
                let rtHourMinute = rt.split(" ")[1];
                let yearRt = rrtDt.split("-")[0];
                let monthRt = rrtDt.split("-")[1];
                let dayRt = rrtDt.split("-")[2];
                returnFormatDate = `${dayRt}/${monthRt}/${yearRt} ${rtHourMinute}`;
                return {
                    ...state,
                    params: {
                        ...state.params,
                        journeyType: action.payload
                    },
                    reservations: [
                        {
                            ...state.reservations[0],
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                transferDateTimeString: newFormatDate
                            }
                        },
                        {
                            ...state.reservations[1],
                            transferDetails: {
                                ...state.reservations[1]?.transferDetails,
                                transferDateTimeString: returnFormatDate
                            },
                            passengerDetails: {
                                ...state.reservations[0].passengerDetails
                            },
                            selectedPickupPoints: [
                                ...dropOffsTr1
                            ],
                            selectedDropoffPoints: [
                                ...pickUpsTr4
                            ]
                        }, 
                    ],
                    objectDetailsForHandling: [
                        {
                            ...state.objectDetailsForHandling[0]
                        },
                        {
                            ...state.objectDetailsForHandling[1],
                            // returnPcikHandling: [...trHandlingDrop],
                            returnPcikHandling: trHandlingDrop.map((item)=>{
                                return item?.pcatId === 1 ? {
                                    ...item,
                                    waitingMinute: ""
                                } : {
                                    ...item
                                };
                            }),
                            // returndropHandling: [...trHnadlingPickUp]
                            returndropHandling: trHnadlingPickUp.map((item)=>{
                                return item?.pcatId === 1 ? {
                                    ...item,
                                    waitingMinute: "1"
                                } : {
                                    ...item
                                };
                            })
                        }
                    ]
                };
            }
        case "RESET_JOURNEY_TO_INITIAL":
            {
                let pickUpsTr5 = state.reservations[0].selectedPickupPoints;
                let dropOffsTr2 = state.reservations[0].selectedDropoffPoints;
                let trHnadlingPickUp1 = state.objectDetailsForHandling[0].pickupHandling;
                let trHandlingDrop1 = state.objectDetailsForHandling[0].dropHandling;
                //these are for getting input date
                let newFormatDate1, returnFormatDate1;
                let tr2 = state?.params.trDateCheat;
                let trDate2 = tr2.split(" ")[0]; //14:22
                let trMinuteHour1 = tr2.split(" ")[1];
                let year2 = trDate2.split("-")[0];
                let month2 = trDate2.split("-")[1];
                let day2 = trDate2.split("-")[2];
                newFormatDate1 = `${day2}/${month2}/${year2} ${trMinuteHour1}`;
                let rt1 = state?.params.returnDateCheat;
                let rrtDt1 = rt1.split(" ")[0];
                let rtHourMinute1 = rt1.split(" ")[1];
                let yearRt1 = rrtDt1.split("-")[0];
                let monthRt1 = rrtDt1.split("-")[1];
                let dayRt1 = rrtDt1.split("-")[2];
                returnFormatDate1 = `${dayRt1}/${monthRt1}/${yearRt1} ${rtHourMinute1}`;
                return {
                    ...state,
                    params: {
                        ...state.params,
                        journeyType: action.payload
                    },
                    reservations: [
                        {
                            ...state.reservations[0],
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                transferDateTimeString: newFormatDate1
                            }
                        },
                        {
                            reservationDetails: {
                                channelId: 7,
                                accountId: 1402
                            },
                            selectedPickupPoints: [],
                            selectedDropoffPoints: [],
                            quotation: {},
                            transferDetails: {
                                transferDateTimeString: (0,getDate/* dateFormatCheatReturn */.J9)(),
                                pickupCategoryId: "",
                                passengersNumber: 1,
                                passengerSuitcase: 1,
                                specialRequests: ""
                            },
                            passengerDetails: {
                                token: "",
                                lastname: "",
                                language: "en",
                                firstname: "",
                                email: "",
                                phone: ""
                            },
                            paymentDetails: {
                                token: "",
                                paymentType: "",
                                account: 1402
                            }
                        }, 
                    ],
                    objectDetailsForHandling: [
                        {
                            ...state.objectDetailsForHandling[0]
                        },
                        {
                            returnPcikHandling: [],
                            returndropHandling: []
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_PAYMENT */.UE:
            {
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            paymentDetails: {
                                ...state.reservations[0]?.paymentDetails,
                                token: action?.payload?.token,
                                paymentType: action?.payload?.paymentType
                            }
                        },
                        {
                            ...state?.reservations[1],
                            paymentDetails: {
                                ...state.reservations[1]?.paymentDetails,
                                token: action?.payload?.token,
                                paymentType: action?.payload?.paymentType
                            }
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* GET_APP_DATA */.Y4:
            {
                return {
                    ...state,
                    appData: action.payload
                };
            }
        case pickUpDropTypes/* GET_PAYMENT_DATA */.Sr:
            {
                const { data: data2  } = action.payload;
                return {
                    ...state,
                    paymentTypes: data2
                };
            }
        case pickUpDropTypes/* CHECKED_INPUT_FOR_RETURN */.rt:
            {
                let checked1 = state.checked;
                //PASSENGER DETAILS
                const passTrDetails1 = state.reservations[0].passengerDetails;
                const passReturnDetails1 = state.reservations[1].passengerDetails;
                let newValues = null;
                if (!checked1) {
                    newValues = {
                        ...passTrDetails1
                    };
                }
                if (checked1) {
                    newValues = {
                        ...passReturnDetails1
                    };
                }
                return {
                    ...state,
                    checked: !state.checked,
                    reservations: [
                        {
                            ...state.reservations[0],
                            passengerDetails: newValues ? newValues : passTrDetails1
                        },
                        {
                            ...state.reservations[1],
                            passengerDetails: newValues ? newValues : passReturnDetails1,
                            transferDetails: {
                                ...state.reservations[1].transferDetails,
                                passengersNumber: !checked1 ? state.reservations[0].transferDetails.passengersNumber : state.reservations[1].transferDetails.passengersNumber
                            }
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* RESET_FORM */.ti:
            {
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            selectedPickupPoints: [],
                            selectedDropoffPoints: [],
                            quotation: {},
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                transferDateTimeString: (0,getDate/* dateFormatCheatTransfer */.t)()
                            }
                        },
                        {
                            ...state.reservations[1],
                            selectedPickupPoints: [],
                            selectedDropoffPoints: [],
                            quotation: {},
                            transferDetails: {
                                ...state.reservations[1]?.transferDetails,
                                transferDateTimeString: (0,getDate/* dateFormatCheatReturn */.J9)()
                            }
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT:
            {
                return {
                    ...state,
                    checkingGoToNextPage: action.payload
                };
            }
        case pickUpDropTypes/* GET_MEET_POINT */.DR:
            {
                return {
                    ...state,
                    meetPoint: action.payload
                };
            }
        default:
            return state;
    }
};

// EXTERNAL MODULE: ./src/store/showFieldReducer/showFieldTypes.js
var showFieldTypes = __webpack_require__(9601);
;// CONCATENATED MODULE: ./src/store/showFieldReducer/index.js

const showFieldReducer_INITIAL_STATE = {
    initialShowResultBoxStates: [
        {
            showInputFieldPickUpOneWay: false,
            showInputFieldDroppOffOneWay: false
        },
        {
            showInputFieldPickUpReturn: false,
            showInputFieldDroppOffReturn: false
        }, 
    ],
    showTimePicker: false,
    returnShowTimePicker: false,
    modalInfo: false,
    waitingPickkModalInfo: false,
    crumbs: [
        {
            linkName: "/",
            name: "home"
        }
    ]
};
const showFieldReducer = (state = showFieldReducer_INITIAL_STATE, action)=>{
    switch(action.type){
        case showFieldTypes/* SET_SHOW_PICK_FIELD_ONEWAY */.g7:
            {
                return {
                    ...state,
                    initialShowResultBoxStates: [
                        {
                            ...state.initialShowResultBoxStates[0],
                            showInputFieldPickUpOneWay: action.payload
                        },
                        {
                            ...state.initialShowResultBoxStates[1]
                        }, 
                    ]
                };
            }
        case showFieldTypes/* SET_SHOW_DROP_FIELD_ONEWAY */.hU:
            {
                return {
                    ...state,
                    initialShowResultBoxStates: [
                        {
                            ...state.initialShowResultBoxStates[0],
                            showInputFieldDroppOffOneWay: action.payload
                        },
                        {
                            ...state.initialShowResultBoxStates[1]
                        }, 
                    ]
                };
            }
        case showFieldTypes/* SET_SHOW_PICK_FIELD_RETURN */.IS:
            {
                return {
                    ...state,
                    initialShowResultBoxStates: [
                        {
                            ...state.initialShowResultBoxStates[0]
                        },
                        {
                            ...state.initialShowResultBoxStates[1],
                            showInputFieldPickUpReturn: action.payload
                        }, 
                    ]
                };
            }
        case showFieldTypes/* SET_SHOW_DROP_FIELD_RETURN */.q1:
            {
                return {
                    ...state,
                    initialShowResultBoxStates: [
                        {
                            ...state.initialShowResultBoxStates[0]
                        },
                        {
                            ...state.initialShowResultBoxStates[1],
                            showInputFieldDroppOffReturn: action.payload
                        }, 
                    ]
                };
            }
        // case SET_SHOW_TIME_PICKER: {
        //   return {
        //     ...state,
        //     showTimePicker: action.payload,
        //   };
        // }
        // case SET_RETURN_SHOW_TIME_PICKER: {
        //   return {
        //     ...state,
        //     returnShowTimePicker: action.payload,
        //   };
        // }
        case showFieldTypes/* RESET_FIELDS */.Sb:
            {
                return {
                    ...state,
                    initialShowResultBoxStates: [
                        {
                            showInputFieldPickUpOneWay: false,
                            showInputFieldDroppOffOneWay: false
                        },
                        {
                            showInputFieldPickUpReturn: false,
                            showInputFieldDroppOffReturn: false
                        }, 
                    ],
                    showTimePicker: false,
                    returnShowTimePicker: false
                };
            }
        case showFieldTypes/* SET_MODAL_INFO */.lk:
            {
                return {
                    ...state,
                    modalInfo: action.payload
                };
            }
        case showFieldTypes/* SET_CRUMBS */.L7:
            {
                return {
                    ...state,
                    crumbs: [
                        ...state.crumbs,
                        action.payload
                    ]
                };
            }
        case showFieldTypes/* SET_WAITING_MODAL_INFO */.Nh:
            {
                // console.log(action.payload);
                return {
                    ...state,
                    waitingPickkModalInfo: action.payload
                };
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/store.js





const reducer = (0,external_redux_namespaceObject.combineReducers)({
    pickUpDropOffReducer: pickUpDropOffReducer,
    showFieldReducer: showFieldReducer
});
const initialState = {};
const middleware = [
    (external_redux_thunk_default())
];
const store = (0,external_redux_namespaceObject.createStore)(// rootReducer,
reducer, initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
/* harmony default export */ const store_store = (store);

// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropAction.js
var pickUpDropAction = __webpack_require__(3570);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(6266);
;// CONCATENATED MODULE: ./src/pages/_app.js











function MyApp({ Component , pageProps  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    external_react_default().useEffect(()=>{
        if (false) {}
    }, []);
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: pickUpDropTypes/* SET_SELECT_ACTIVE_LINK */.A3,
            payload: "home"
        });
        dispatch((0,pickUpDropAction/* getAppData */.$s)());
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=UA-99673497-1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-99673497-1');
        `
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=AW-851637210"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-851637210');`
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: store_store,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
const makestore = ()=>store_store;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makestore);
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 9601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS": () => (/* binding */ SET_SHOW_PICK_FIELD_RETURN),
/* harmony export */   "L7": () => (/* binding */ SET_CRUMBS),
/* harmony export */   "Nh": () => (/* binding */ SET_WAITING_MODAL_INFO),
/* harmony export */   "Sb": () => (/* binding */ RESET_FIELDS),
/* harmony export */   "g7": () => (/* binding */ SET_SHOW_PICK_FIELD_ONEWAY),
/* harmony export */   "hU": () => (/* binding */ SET_SHOW_DROP_FIELD_ONEWAY),
/* harmony export */   "lk": () => (/* binding */ SET_MODAL_INFO),
/* harmony export */   "q1": () => (/* binding */ SET_SHOW_DROP_FIELD_RETURN)
/* harmony export */ });
const SET_SHOW_PICK_FIELD_ONEWAY = "SET_SHOW_PICK_FIELD_ONEWAY";
const SET_SHOW_DROP_FIELD_ONEWAY = "SET_SHOW_DROP_FIELD_ONEWAY";
const SET_SHOW_PICK_FIELD_RETURN = "SET_SHOW_PICK_FIELD_RETURN";
const SET_SHOW_DROP_FIELD_RETURN = "SET_SHOW_DROP_FIELD_RETURN";
const RESET_FIELDS = "RESET_FIELDS";
//?modal ifo
const SET_MODAL_INFO = "SET_MODAL_INFO";
const SET_WAITING_MODAL_INFO = "SET_WAITING_MODAL_INFO";
const SET_CRUMBS = "SET_CRUMBS";


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8348,3570,5795], () => (__webpack_exec__(4755)));
module.exports = __webpack_exports__;

})();