(() => {
var exports = {};
exports.id = 7283;
exports.ids = [7283,3543,9738,6557,4678,3396,2858,150,4201,1344,31,6103];
exports.modules = {

/***/ 5600:
/***/ ((module) => {

// Exports
module.exports = {
	"form_control": "styles_form_control__aGwor",
	"form_control_header": "styles_form_control_header__P9y_a",
	"form_control_header_label": "styles_form_control_header_label__WRHHB",
	"form_control_header_error_message": "styles_form_control_header_error_message__1E9pa",
	"select_div": "styles_select_div__S3rig",
	"select": "styles_select__9ftlU",
	"error_select_border": "styles_error_select_border__JFsEx",
	"select_div_left_icon": "styles_select_div_left_icon__z06sj",
	"select_div_right_icon": "styles_select_div_right_icon__kTrwJ"
};


/***/ }),

/***/ 8588:
/***/ ((module) => {

// Exports
module.exports = {
	"selected_list": "styles_selected_list__V8_aJ",
	"list_container": "styles_list_container__FdzlB",
	"list": "styles_list__hkdPp",
	"list_title_div_icons": "styles_list_title_div_icons__O6qMM",
	"list_title_div_icons_icon": "styles_list_title_div_icons_icon__ltMqO",
	"list_title_div_icons_text": "styles_list_title_div_icons_text__C6BH5",
	"list_title_div_title": "styles_list_title_div_title__uHeFq",
	"details_div": "styles_details_div__Jy4Av",
	"select_description": "styles_select_description__S77sy",
	"flight_hover_text": "styles_flight_hover_text__u9TWA",
	"flight_hover_text_content": "styles_flight_hover_text_content__HMSAh"
};


/***/ }),

/***/ 4230:
/***/ ((module) => {

// Exports
module.exports = {
	"journey_details": "styles_journey_details__RUeYw",
	"journey_details_title": "styles_journey_details_title__tPwYk",
	"selecteditems": "styles_selecteditems__lpNrn",
	"points_header": "styles_points_header__82MRm",
	"points": "styles_points__acE2C"
};


/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ transfer_details),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/elements/LinkBreadcumb/index.js
var LinkBreadcumb = __webpack_require__(1680);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 4 modules
var Layout = __webpack_require__(5367);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: ./src/pages/transfer-details/styles.module.scss
var styles_module = __webpack_require__(7457);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/store/showFieldReducer/showFieldTypes.js
var showFieldTypes = __webpack_require__(9601);
// EXTERNAL MODULE: ./src/components/elements/Select/styles.module.scss
var Select_styles_module = __webpack_require__(5600);
var Select_styles_module_default = /*#__PURE__*/__webpack_require__.n(Select_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/Select/index.js





/**
 * @TextInput { //? value:string , onChange:function,onFocus:function,onBlur:function,name:string,title:string,icon:string,  placeholder:string,errorMessage:string,isLoading:boolean,default:boolean,readOnly:boolean,}
 **/ const Select = (props)=>{
    let { value , onChange =(e)=>{} , name ="" , title ="" , icon , placeholder ="" , errorMessage ="" , data , readOnly =false , defaultValue , noErrorMessage , animationSelect =false , showModalInfo =false , forFlight =false  } = props;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const handleModal = (e)=>{
        dispatch({
            type: showFieldTypes/* SET_WAITING_MODAL_INFO */.Nh,
            payload: true
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !animationSelect ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(Select_styles_module_default()).form_control}`,
            children: [
                !noErrorMessage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(Select_styles_module_default()).form_control_header} `,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Select_styles_module_default()).form_control_header_label,
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Select_styles_module_default()).form_control_header_error_message,
                            children: errorMessage && errorMessage
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Select_styles_module_default()).select_div,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `${(Select_styles_module_default()).select_div_left_icon} fa-solid fa-${icon}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `${(Select_styles_module_default()).select_div_right_icon} fa-solid fa-angle-down`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            name: name,
                            onChange: onChange,
                            className: `${(Select_styles_module_default()).select} ${errorMessage ? (Select_styles_module_default()).error_select_border : ""}
          `,
                            defaultValue: value,
                            disabled: readOnly,
                            children: [
                                defaultValue && /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "",
                                    id: 0,
                                    children: placeholder
                                }),
                                Number(data) ? Array(data).fill().map((x, i)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: i + 1,
                                        children: `${i + 1}`
                                    }, i + 100000);
                                }) : data?.map((d, i)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: d.value,
                                        id: d?.id && d?.id,
                                        children: d.value
                                    }, i + 1000);
                                })
                            ]
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "select",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    className: `select-text ${errorMessage ? "error-border-select" : ""}`,
                    name: name,
                    onChange: onChange,
                    //  defaultValue={value?.trim() ? value?.trim() : ""}
                    defaultValue: forFlight ? value?.trim() : value,
                    children: [
                        defaultValue && /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            id: 0,
                            children: placeholder
                        }),
                        Number(data) ? Array(data).fill().map((x, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: i + 1,
                                children: `${i + 1}`
                            }, i + 100);
                        }) : data?.map((d, i)=>{
                            // console.log(Number(defaultValue) === Number(d.value.split(" ")[0]) ? Number(d.value.split(" ")[0]) : "");
                            // console.log(d.value.split(" ")[0]);
                            // selected={Number(defaultValue) === Number(d.value.split(" ")[0])}
                            //selected={forFlight ? Number(defaultValue) === Number(d?.value?.split(" ")[0]) :value === +d?.id}
                            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: d.value,
                                id: d?.id && d?.id,
                                selected: forFlight ? Number(defaultValue) === Number(d?.value?.split(" ")[0]) : value === +d?.id,
                                children: d.value
                            }, i);
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "select-highlight"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "select-bar"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    className: "select-label",
                    children: [
                        title,
                        showModalInfo && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `fa-solid fa-circle-info waiting-icon`,
                            onClick: handleModal
                        })
                    ]
                }),
                errorMessage ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "error-waiting-pickup-time",
                    children: errorMessage
                }) : ""
            ]
        })
    });
};
/* harmony default export */ const elements_Select = (Select);

// EXTERNAL MODULE: ./src/components/elements/TextInput/index.js
var TextInput = __webpack_require__(740);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
;// CONCATENATED MODULE: ./src/components/elements/TDP_PassengerDetails/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








const PassengerDetails = (props)=>{
    const { handleInputs , setHandleInputs , quot , passNumber , title , journeyType , animation =false ,  } = props;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    //bunu sadece imgni getirmek ucun yazdg Secilen cardn img si
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    const onchangeHandler = (e)=>{
        let name = e.target.name;
        let value = e.target.name === "passengersNumber" ? Number(e.target.value) : e.target.value;
        if (e.target.value.includes('"') || e.target.value.includes(`'`) || e.target.value.includes("/") || e.target.value.includes("\\")) {
            return;
        }
        //eliminate the text required after occuring the required text
        if (handleInputs.firstnameError.length > 0 && name === "firstname") {
            setHandleInputs((values)=>({
                    ...values,
                    firstnameError: ""
                }));
        }
        if (handleInputs.emailError.length > 0 && name === "email") {
            setHandleInputs((values)=>({
                    ...values,
                    emailError: ""
                }));
        }
        if (handleInputs.phoneError.length > 0 && name === "phone") {
            setHandleInputs((values)=>({
                    ...values,
                    phoneError: ""
                }));
        }
        setHandleInputs((values)=>({
                ...values,
                [e.target.name]: name === "passengersNumber" ? Number(e.target.value) : e.target.value
            }));
        dispatch({
            type: pickUpDropTypes/* UPDATE_PASSNEGER_DETAILS */.kE,
            payload: {
                value,
                nameOfInput: e.target.name,
                journeyType
            }
        });
    };
    const onFocus = (e)=>{
        if (e.target.name === "firstname") {
            setHandleInputs((values)=>({
                    ...values,
                    firstNameFocused: true
                }));
        }
        if (e.target.name === "phone") {
            setHandleInputs((values)=>({
                    ...values,
                    phoneFocused: true
                }));
        }
        if (e.target.name === "email") {
            setHandleInputs((values)=>({
                    ...values,
                    emailFocused: true
                }));
        }
    };
    const onBlur = (e)=>{
        if (e.target.name === "firstname" && e.target.value.length === 0) {
            setHandleInputs((values)=>({
                    ...values,
                    firstname: "",
                    firstNameFocused: false
                }));
        }
        if (e.target.name === "email" && e.target.value.length === 0) {
            setHandleInputs((values)=>({
                    ...values,
                    email: "",
                    emailFocused: false
                }));
        }
        if (e.target.name === "phone" && e.target.value.length === 0) {
            setHandleInputs((values)=>({
                    ...values,
                    phone: "",
                    phoneFocused: false
                }));
        }
    };
    const clickClearFieldIcon = (e)=>{
        let atttRibuteName = e.target.parentElement.children[1].getAttribute("name");
        if (handleInputs.firstname.length >= 0 && atttRibuteName === "firstname") {
            setHandleInputs((values)=>({
                    ...values,
                    firstname: "",
                    firstNameFocused: false,
                    firstnameError: ""
                }));
        }
        if (handleInputs.phone.length >= 0 && atttRibuteName === "phone") {
            setHandleInputs((values)=>({
                    ...values,
                    phone: "",
                    phoneFocused: false,
                    phoneError: ""
                }));
        }
        if (handleInputs.email.length >= 0 && atttRibuteName === "email") {
            setHandleInputs((values)=>({
                    ...values,
                    email: "",
                    emailFocused: false,
                    emailError: ""
                }));
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} ${animation && "zoom_out"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                    title: "Full Name",
                                    icon: "user",
                                    placeholder: "Full Name * ",
                                    type: "text",
                                    name: "firstname",
                                    onChange: onchangeHandler,
                                    value: handleInputs.firstname,
                                    focused: handleInputs.firstNameFocused,
                                    onFocus: onFocus,
                                    onBlur: onBlur,
                                    clickClearFieldIcon: clickClearFieldIcon,
                                    errorMessage: handleInputs.firstnameError?.length > 0 && handleInputs.firstnameError
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                    title: "Email",
                                    icon: "at",
                                    placeholder: "Email * ",
                                    type: "text",
                                    name: "email",
                                    onChange: onchangeHandler,
                                    value: handleInputs.email,
                                    focused: handleInputs.emailFocused,
                                    onFocus: onFocus,
                                    onBlur: onBlur,
                                    clickClearFieldIcon: clickClearFieldIcon,
                                    errorMessage: handleInputs.emailError?.length > 0 && handleInputs.emailError
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                        children: [
                            carObject && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(elements_Select, {
                                    title: "Number of passengers",
                                    icon: "users",
                                    placeholder: "Select Pax",
                                    data: quot ? carObject[quot?.carId]?.pax : "",
                                    onChange: onchangeHandler,
                                    value: passNumber,
                                    name: "passengersNumber"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                        title: "Phone Number",
                                        icon: "phone",
                                        placeholder: "Phone Number * ",
                                        type: "number",
                                        name: "phone",
                                        onChange: onchangeHandler,
                                        value: handleInputs.phone,
                                        focused: handleInputs.phoneFocused,
                                        onFocus: onFocus,
                                        onBlur: onBlur,
                                        clickClearFieldIcon: clickClearFieldIcon,
                                        errorMessage: handleInputs.phoneError?.length > 0 && handleInputs.phoneError
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles.module.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                        children: "* with international dialling code"
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
/* harmony default export */ const TDP_PassengerDetails = (PassengerDetails);

// EXTERNAL MODULE: ./src/components/elements/TDP_JourneySummary/index.js + 3 modules
var TDP_JourneySummary = __webpack_require__(5068);
// EXTERNAL MODULE: ./src/components/elements/TDP_JorneyDetails/styles.module.scss
var TDP_JorneyDetails_styles_module = __webpack_require__(4230);
var TDP_JorneyDetails_styles_module_default = /*#__PURE__*/__webpack_require__.n(TDP_JorneyDetails_styles_module);
// EXTERNAL MODULE: ./src/components/elements/SelectedList/styles.module.scss
var SelectedList_styles_module = __webpack_require__(8588);
var SelectedList_styles_module_default = /*#__PURE__*/__webpack_require__.n(SelectedList_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/SelectedList/CheckForCruises.js






//bura propslar selected listeden geir
const CheckForCruises = (props)=>{
    const { item , index , journeyType , onchangeHandler , handleInputValue , whichSelectedItem ,  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    return(/**
     @propsOrderOnchangeHandler value,pickOrDrop,journeyType,,pcatId whichSelectedItem
     */ /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            item.pcatId === 2 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[2]?.cruiseNumber.pickup === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Cruise Name",
                        type: "text",
                        name: "cruiseNumber",
                        value: handleInputValue.cruiseNumber,
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 0, 2, whichSelectedItem),
                        errorMessage: handleInputValue.errorMessage.length > 0 ? handleInputValue.errorMessage : ""
                    })
                })
            }),
            item.pcatId === 2 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[2]?.cruiseNumber.dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Cruise Name",
                        type: "text",
                        name: "cruiseNumber",
                        value: handleInputValue.cruiseNumber,
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0, 2, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 2 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[2]?.cruiseNumber.pickup === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Cruise Name",
                        type: "text",
                        name: "cruiseNumber",
                        value: handleInputValue.cruiseNumber,
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1, 2, whichSelectedItem),
                        errorMessage: handleInputValue.errorMessage.length > 0 ? handleInputValue.errorMessage : ""
                    })
                })
            }),
            item.pcatId === 2 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[2]?.cruiseNumber.dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Cruise Name",
                        type: "text",
                        name: "cruiseNumber",
                        value: handleInputValue.cruiseNumber,
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1, 2, whichSelectedItem)
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const SelectedList_CheckForCruises = (CheckForCruises);

;// CONCATENATED MODULE: ./src/constants/waitingMinutes/index.js
const waitingMinutes = [
    0,
    15,
    30,
    45,
    50,
    60,
    70,
    80,
    90,
    100,
    120,
    150
].map((min, i)=>({
        id: i + 1,
        value: `${min} minute${min === 0 ? "" : "s"} after flight has landed`
    }));

;// CONCATENATED MODULE: ./src/components/elements/SelectedList/CheckForFlight.js








//bura propslar selected listeden geir
const CheckForFlight = (props)=>{
    const { item , index , journeyType , onchangeHandler , handleInputValue , whichSelectedItem ,  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    // console.log(handleInputValue,);
    // console.log(handleInputValue?.flightDetails?.waitingPickupTime);
    return(/**
     @propsOrderOnchangeHandler value,pickOrDrop,journeyType,,pcatId whichSelectedItem
     */ /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            item.pcatId === 1 && index === 0 && journeyType === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    objectDetailStatuses[1]?.flightDetails.flightNumber.pickup === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (SelectedList_styles_module_default()).details_div,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                            name: "flightNumber",
                            type: "text",
                            animationInput: true,
                            title: "Flight No",
                            value: handleInputValue?.flightDetails.flightNumber,
                            onChange: (e)=>onchangeHandler(e, 0, 0, 1, whichSelectedItem),
                            errorMessage: handleInputValue.errorMessage.length > 0 ? handleInputValue.errorMessage : ""
                        })
                    }),
                    objectDetailStatuses[1]?.flightDetails?.waitingPickupTime.pickup === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(elements_Select, {
                                animationSelect: true,
                                name: "waitingPickupTime",
                                // value={handleInputValue?.flightDetails.waitingPickupTime}
                                data: waitingMinutes,
                                title: "When should the driver pick you up?",
                                onChange: (e)=>onchangeHandler(e, 0, 0, 1, whichSelectedItem),
                                showModalInfo: true,
                                defaultValue: `${handleInputValue?.flightDetails.waitingPickupTime ? handleInputValue?.flightDetails?.waitingPickupTime : "--select--"}`,
                                // defaultValue={true}
                                placeholder: "--select--",
                                value: `
                      ${handleInputValue?.flightDetails.waitingPickupTime ? `${handleInputValue?.flightDetails.waitingPickupTime} minute${handleInputValue?.flightDetails.waitingPickupTime === 0 ? "" : "s"} after flight has landed`.trim() : "--select--"}
                      `,
                                forFlight: true,
                                errorMessage: handleInputValue.waitingError.length > 0 ? "required" : ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (SelectedList_styles_module_default()).select_description,
                                children: [
                                    "after flight has landed",
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-circle-question"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (SelectedList_styles_module_default()).flight_hover_text,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (SelectedList_styles_module_default()).flight_hover_text_content,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "Please allow enough time to clear immigration and baggage reclaim,",
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            style: {
                                                                color: "#007ACC",
                                                                fontWeight: "500"
                                                            },
                                                            children: [
                                                                " ",
                                                                "after the requested pickup time, there will be a 30 minutes FREE waiting time at the airport"
                                                            ]
                                                        }),
                                                        ". Our driver will be waiting for you in the arrivals hall, with an \u201CAirport Pickups\u201D name board with your name on it. They will then accompany you to the vehicle."
                                                    ]
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "If you realise that you will not be able to meet the driver within the 30 minutes, then if you contact us, we will hold the driver in the terminal for an extra 30 mins at a charge of \xa35.00. If you are still not out within this time then the driver will be pulled off and the job will be registered as a no show."
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "For example, if your flight lands at 10:00 am, and you have requested your pickup time to be 60 mins after the flight landing time; our driver will be in the terminal at 11 am. The driver will wait till 11:30 am FREE of charge. After this time, if requested, the driver will wait an additional 30 mins chargeable at \xa35.00."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            item.pcatId === 1 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[1]?.flightDetails.flightNumber.dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        name: "flightNumber",
                        type: "text",
                        animationInput: true,
                        value: handleInputValue?.flightDetails.flightNumber,
                        title: "Flight No",
                        onChange: (e)=>onchangeHandler(e, 1, 0, 1, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 1 && index === 0 && journeyType === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    objectDetailStatuses[1]?.flightDetails.flightNumber.pickup === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                            name: "flightNumber",
                            type: "text",
                            animationInput: true,
                            value: handleInputValue?.flightDetails.flightNumber,
                            title: "Flight No",
                            onChange: (e)=>onchangeHandler(e, 0, 1, 1, whichSelectedItem),
                            errorMessage: handleInputValue.errorMessage.length > 0 ? handleInputValue.errorMessage : ""
                        })
                    }),
                    objectDetailStatuses[1]?.flightDetails?.waitingPickupTime.pickup === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(elements_Select, {
                            animationSelect: true,
                            name: "waitingPickupTime",
                            data: waitingMinutes,
                            // value={handleInputValue?.flightDetails.waitingPickupTime}
                            title: "When should the driver pick you up?",
                            onChange: (e)=>onchangeHandler(e, 0, 1, 1, whichSelectedItem),
                            // defaultValue="--select--"
                            // placeholder="--select--"
                            defaultValue: `${handleInputValue?.flightDetails.waitingPickupTime ? handleInputValue?.flightDetails?.waitingPickupTime : "--select--"}`,
                            // defaultValue={true}
                            placeholder: "--select--",
                            value: `
                      ${handleInputValue?.flightDetails.waitingPickupTime ? `${handleInputValue?.flightDetails.waitingPickupTime} minute${handleInputValue?.flightDetails.waitingPickupTime === 0 ? "" : "s"} after flight has landed` : "--select--"}
                      `,
                            forFlight: true,
                            errorMessage: handleInputValue.waitingError.length > 0 ? "required" : ""
                        })
                    })
                ]
            }),
            item.pcatId === 1 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[1]?.flightDetails.flightNumber.dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(SelectedList_styles_module_default()).details_div}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        name: "flightNumber",
                        type: "text",
                        animationInput: true,
                        title: "Flight No",
                        value: handleInputValue?.flightDetails?.flightNumber,
                        onChange: (e)=>onchangeHandler(e, 1, 1, 1, whichSelectedItem)
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const SelectedList_CheckForFlight = (CheckForFlight);

;// CONCATENATED MODULE: ./src/components/elements/SelectedList/CheckForTrain.js






//bura propslar selected listeden geir
const CheckForTrain = (props)=>{
    const { item , index , journeyType , onchangeHandler , handleInputValue , whichSelectedItem ,  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    return(/**
     @propsOrderOnchangeHandler value,pickOrDrop,journeyType,,pcatId whichSelectedItem
     */ /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            item.pcatId === 3 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[3]?.trainNumber.pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Train Number",
                        type: "text",
                        name: "trainNumber",
                        value: handleInputValue.trainNumber,
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 0, 3, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 3 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[3]?.trainNumber.dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Train Number",
                        type: "text",
                        name: "trainNumber",
                        value: handleInputValue.trainNumber,
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0, 3, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 3 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[3]?.trainNumber.pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Train Number",
                        type: "text",
                        name: "trainNumber",
                        value: handleInputValue.trainNumber,
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1, 3, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 3 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[3]?.trainNumber.dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Train Number",
                        type: "text",
                        name: "trainNumber",
                        value: handleInputValue.trainNumber,
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1, 3, whichSelectedItem)
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const SelectedList_CheckForTrain = (CheckForTrain);

;// CONCATENATED MODULE: ./src/components/elements/SelectedList/CheckForRoomNumber.js






//bura propslar selected listeden geir
const CheckForRoomNumber = (props)=>{
    const { inTransferComp , item , index , journeyType , onchangeHandler , handleInputValue , whichSelectedItem ,  } = props;
    const { appData  } = useSelector(selectPickUpDropOffReducer);
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    return(/**
     @propsOrderOnchangeHandler value,pickOrDrop,journeyType,,pcatId whichSelectedItem
     */ /*#__PURE__*/ _jsx(_Fragment, {}));
};
/* harmony default export */ const SelectedList_CheckForRoomNumber = ((/* unused pure expression or super */ null && (CheckForRoomNumber)));

// EXTERNAL MODULE: ./src/components/elements/TextArea/index.js
var TextArea = __webpack_require__(9434);
;// CONCATENATED MODULE: ./src/components/elements/SelectedList/CheckingForPostcodes.js







const CheckingForPostcodes = (props)=>{
    const { appData , postCodeAdresses  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const { item , index , journeyType , handleInputValue , onchangeHandler , whichSelectedItem ,  } = props;
    const { 0: postCodes , 1: setPostCodes  } = (0,external_react_.useState)([]);
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    (0,external_react_.useEffect)(()=>{
        let postcodes = postCodeAdresses.filter((codes)=>item.postcode === codes.postcode && codes.addresses);
        setPostCodes(postcodes[0]?.addresses);
    }, [
        item,
        objectDetailStatuses
    ]);
    return(/**
     @propsOrderOnchangeHandler value,pickOrDrop,journeyType,,pcatId whichSelectedItem
     */ /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            item.pcatId === 5 && index === 0 && journeyType === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    objectDetailStatuses[5]?.postCodeDetails?.id.pickup === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(elements_Select, {
                            animationSelect: true,
                            placeholder: "add a new adress if not listed ",
                            defaultValue: true,
                            title: "Postcode Address",
                            data: postCodes?.length > 0 ? postCodes : postCodes,
                            value: handleInputValue.postCodeDetails.id,
                            name: "id",
                            onChange: (e)=>onchangeHandler(e, 0, 0, 5, whichSelectedItem)
                        })
                    }),
                    handleInputValue.postCodeDetails.id === 0 ? objectDetailStatuses[5]?.postCodeDetails?.postCodeAddress.pickup === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                            animationTextarea: true,
                            placeholder: "add a new adress if not listed ",
                            defaultValue: true,
                            title: "Adress Description *",
                            name: "postCodeAddress",
                            onChange: (e)=>onchangeHandler(e, 0, 0, 5, whichSelectedItem),
                            value: handleInputValue.postCodeDetails.postCodeAddress,
                            errorMessage: handleInputValue.errorMessage.length > 0 ? handleInputValue.errorMessage : ""
                        })
                    }) : null
                ]
            }),
            item.pcatId === 5 && index === 1 && journeyType === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    objectDetailStatuses[5]?.postCodeDetails?.id.dropoff === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(elements_Select, {
                            animationSelect: true,
                            placeholder: "add a new adress if not listed ",
                            defaultValue: true,
                            title: "Postcode Address",
                            data: postCodes?.length > 0 ? postCodes : postCodes,
                            name: "id",
                            onChange: (e)=>onchangeHandler(e, 1, 0, 5, whichSelectedItem),
                            value: handleInputValue.postCodeDetails.id
                        })
                    }),
                    handleInputValue.postCodeDetails.id === 0 ? objectDetailStatuses[5]?.postCodeDetails?.postCodeAddress.dropoff === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                            animationTextarea: true,
                            title: "Adress Description *",
                            name: "postCodeAddress",
                            onChange: (e)=>onchangeHandler(e, 1, 0, 5, whichSelectedItem),
                            value: handleInputValue.postCodeDetails.postCodeAddress,
                            errorMessage: handleInputValue.errorMessage.length > 0 ? handleInputValue.errorMessage : ""
                        })
                    }) : null
                ]
            }),
            item.pcatId === 5 && index === 0 && journeyType === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    objectDetailStatuses[5]?.postCodeDetails?.id.pickup === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(elements_Select, {
                            animationSelect: true,
                            placeholder: "add a new adress if not listed ",
                            defaultValue: true,
                            title: "Postcode Address",
                            data: postCodes?.length > 0 ? postCodes : postCodes,
                            name: "id",
                            onChange: (e)=>onchangeHandler(e, 0, 1, 5, whichSelectedItem),
                            value: handleInputValue.postCodeDetails.id
                        })
                    }),
                    handleInputValue.postCodeDetails.id === 0 ? objectDetailStatuses[5]?.postCodeDetails?.postCodeAddress.pickup === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                            animationTextarea: true,
                            title: "Adress Description *",
                            name: "postCodeAddress",
                            onChange: (e)=>onchangeHandler(e, 0, 1, 5, whichSelectedItem),
                            value: handleInputValue.postCodeDetails.postCodeAddress,
                            errorMessage: handleInputValue.errorMessage.length > 0 ? handleInputValue.errorMessage : ""
                        })
                    }) : null
                ]
            }),
            item.pcatId === 5 && index === 1 && journeyType === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    objectDetailStatuses[5]?.postCodeDetails?.id.dropoff === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(elements_Select, {
                            animationSelect: true,
                            placeholder: "add a new adress if not listed ",
                            defaultValue: true,
                            title: "Postcode Address",
                            data: postCodes?.length > 0 ? postCodes : postCodes,
                            name: "id",
                            onChange: (e)=>onchangeHandler(e, 1, 1, 5, whichSelectedItem),
                            value: handleInputValue.postCodeDetails.id
                        })
                    }),
                    handleInputValue.postCodeDetails.id === 0 ? objectDetailStatuses[5]?.postCodeDetails?.postCodeAddress.dropoff === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(SelectedList_styles_module_default()).details_div}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                            animationTextarea: true,
                            title: "Adress Description *",
                            name: "postCodeAddress",
                            onChange: (e)=>onchangeHandler(e, 1, 1, 5, whichSelectedItem),
                            value: handleInputValue.postCodeDetails.postCodeAddress,
                            errorMessage: handleInputValue.errorMessage.length > 0 ? handleInputValue.errorMessage : ""
                        })
                    }) : null
                ]
            })
        ]
    }));
};
/* harmony default export */ const SelectedList_CheckingForPostcodes = (CheckingForPostcodes);

;// CONCATENATED MODULE: ./src/components/elements/SelectedList/CheckPlaceOfInterest.js






//bura propslar selected listeden geir
const CheckPlaceOfInterest = (props)=>{
    const { item , index , journeyType , handleInputValue , onchangeHandler , whichSelectedItem ,  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    return(/**
     @propsOrderOnchangeHandler value,pickOrDrop,journeyType,,pcatId whichSelectedItem
     */ /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            item.pcatId === 7 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[7]?.["address-description"].pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Places of Interest",
                        type: "text",
                        name: "address-description",
                        onChange: (e)=>onchangeHandler(e, 0, 0, 7, whichSelectedItem),
                        value: handleInputValue["address-description"],
                        animationInput: true
                    })
                })
            }),
            item.pcatId === 7 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[7]?.["address-description"].dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Places of Interest",
                        type: "text",
                        onChange: (e)=>onchangeHandler(e, 1, 0, 7, whichSelectedItem),
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true
                    })
                })
            }),
            item.pcatId === 7 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[7]?.["address-description"].pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Places of Interest",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1, 7, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 7 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[7]?.["address-description"].dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Train Number",
                        type: "text",
                        name: "trainNumber",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1, 7, whichSelectedItem)
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const SelectedList_CheckPlaceOfInterest = (CheckPlaceOfInterest);

;// CONCATENATED MODULE: ./src/components/elements/SelectedList/CheckForCitites.js






//bura propslar selected listeden geir
const CheckForCitites = (props)=>{
    const { item , index , journeyType , handleInputValue , onchangeHandler , whichSelectedItem ,  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    return(/**
     @propsOrderOnchangeHandler value,pickOrDrop,journeyType,,pcatId whichSelectedItem
     */ /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            item.pcatId === 8 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[8]?.["address-description"].pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Cities",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 0, 8, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 8 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[8]?.["address-description"].dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Cities",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0, 8, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 8 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[8]?.["address-description"].pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Cities",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1, 8, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 8 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[8]?.["address-description"].dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Cities",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1, 8, whichSelectedItem)
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const SelectedList_CheckForCitites = (CheckForCitites);

;// CONCATENATED MODULE: ./src/components/elements/SelectedList/CheckForUniversity.js






//bura propslar selected listeden geir
const CheckForUniversity = (props)=>{
    const { item , index , journeyType , handleInputValue , onchangeHandler , whichSelectedItem ,  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            item.pcatId === 9 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[9]?.["address-description"].pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Universities And Colleges",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 0, 9, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 9 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[9]?.["address-description"].dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Universities And Colleges",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0, 9, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 9 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[9]?.["address-description"].pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Universities And Colleges",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1, 9, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 9 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[9]?.["address-description"].dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Universities And Colleges",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1, 9, whichSelectedItem)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SelectedList_CheckForUniversity = (CheckForUniversity);

;// CONCATENATED MODULE: ./src/components/elements/SelectedList/CheckForOther.js






//bura propslar selected listeden geir
const CheckForOther = (props)=>{
    const { item , index , journeyType , handleInputValue , onchangeHandler , whichSelectedItem ,  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            item.pcatId === 10 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[10]?.["address-description"].pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Description ",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 0, 10, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 10 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[10]?.["address-description"].dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Description ",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0, 10, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 10 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[10]?.["address-description"].pickup === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Description ",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1, 10, whichSelectedItem)
                    })
                })
            }),
            item.pcatId === 10 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: objectDetailStatuses[10]?.["address-description"].dropoff === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SelectedList_styles_module_default()).details_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Description ",
                        type: "text",
                        name: "address-description",
                        value: handleInputValue["address-description"],
                        animationInput: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1, 10, whichSelectedItem)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SelectedList_CheckForOther = (CheckForOther);

// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(6266);
;// CONCATENATED MODULE: ./src/components/elements/SelectedList/index.js
















//hnaldeinputs comes from transfer journey detils
const SelectedList = (props)=>{
    const { titleFromTo , selectedItems , index , journeyType , handleInputs  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const imageObjects = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item.image
        }), {});
    const onchangeHandler = (e, pickOrDrop, journeyType, pcatId, whichSelectedItem)=>{
        /**
     @propsOrder value,pickOrDrop,journeyType,name,,pcatId whichSelectedItem
     */ if (e.target.value.includes('"') || e.target.value.includes(`'`) || e.target.value.includes("/") || e.target.value.includes("\\")) {
            return;
        }
        if (pcatId === 1 || pcatId === 5) {
            if (pcatId === 1) {
                dispatch({
                    type: pickUpDropTypes/* UPDATE_SELECTED_ITEMS_INPUTS */.EY,
                    payload: {
                        value: e.target.name === "waitingPickupTime" ? Number(e.target.value.split(" ")[0]) : e.target.value,
                        pickOrDrop,
                        journeyType,
                        nameOfInput: e.target.name,
                        whichSelectedItem,
                        categoryOfTheType: pcatId,
                        selectedIndex: e.target.selectedIndex //bunu sadece waitingde kullanirix
                    }
                });
            }
            if (pcatId === 5) {
                dispatch({
                    type: pickUpDropTypes/* UPDATE_SELECTED_ITEMS_INPUTS */.EY,
                    payload: {
                        value: e?.target?.name === "id" ? Number(e?.target?.options[e?.target?.selectedIndex].getAttribute("id")) : 0,
                        pickOrDrop,
                        journeyType,
                        nameOfInput: e?.target?.name === "postCodeAddress" ? e?.target.value : e?.target?.options[e?.target?.selectedIndex]?.value,
                        whichSelectedItem,
                        categoryOfTheType: pcatId
                    }
                });
            }
        } else {
            dispatch({
                type: pickUpDropTypes/* UPDATE_SELECTED_ITEMS_INPUTS */.EY,
                payload: {
                    value: e.target.value,
                    pickOrDrop,
                    journeyType,
                    nameOfInput: e.target.name,
                    whichSelectedItem,
                    categoryOfTheType: pcatId
                }
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: ` ${(SelectedList_styles_module_default()).selected_list}`,
        children: selectedItems?.map((item, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (SelectedList_styles_module_default()).list_container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (SelectedList_styles_module_default()).list,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (SelectedList_styles_module_default()).list_title_div,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (SelectedList_styles_module_default()).list_title_div_icons,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (SelectedList_styles_module_default()).list_title_div_icons_icon,
                                            children: imageObjects && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: (SelectedList_styles_module_default()).list_image,
                                                src: `${env/* default.apiDomain */.Z.apiDomain}${imageObjects[item?.pcatId]}`,
                                                alt: item.address
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (SelectedList_styles_module_default()).list_title_div_icons_text,
                                            children: titleFromTo
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (SelectedList_styles_module_default()).list_title_div_title,
                                    children: item.address
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectedList_CheckForFlight, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            onchangeHandler: onchangeHandler,
                            handleInputValue: handleInputs[i],
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectedList_CheckForCruises, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            onchangeHandler: onchangeHandler,
                            handleInputValue: handleInputs[i],
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectedList_CheckForTrain, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            onchangeHandler: onchangeHandler,
                            handleInputValue: handleInputs[i],
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectedList_CheckingForPostcodes, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            onchangeHandler: onchangeHandler,
                            handleInputValue: handleInputs[i],
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectedList_CheckPlaceOfInterest, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            onchangeHandler: onchangeHandler,
                            handleInputValue: handleInputs[i],
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectedList_CheckForCitites, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            onchangeHandler: onchangeHandler,
                            handleInputValue: handleInputs[i],
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectedList_CheckForUniversity, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            onchangeHandler: onchangeHandler,
                            handleInputValue: handleInputs[i],
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectedList_CheckForOther, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            onchangeHandler: onchangeHandler,
                            handleInputValue: handleInputs[i],
                            whichSelectedItem: i
                        })
                    ]
                })
            }, i);
        })
    });
};
/* harmony default export */ const elements_SelectedList = (SelectedList);

;// CONCATENATED MODULE: ./src/components/elements/TDP_JorneyDetails/index.js




// dropHandlings,  pickupHandlings,  =>comes from transfer detals page
const TransferJourneyDetails = (props)=>{
    const { pickUps , drops , journeyTitle , journeyType , marginTop , pickupHandlings , dropHandlings ,  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(TDP_JorneyDetails_styles_module_default()).journey_details} ${marginTop ? "mt_2" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TDP_JorneyDetails_styles_module_default()).journey_details_title,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: journeyTitle
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TDP_JorneyDetails_styles_module_default()).selecteditems,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (TDP_JorneyDetails_styles_module_default()).points,
                        children: pickUps?.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(elements_SelectedList, {
                            selectedItems: pickUps,
                            index: 0,
                            journeyType: journeyType,
                            titleFromTo: "From",
                            handleInputs: pickupHandlings
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (TDP_JorneyDetails_styles_module_default()).points,
                        children: drops?.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(elements_SelectedList, {
                            selectedItems: drops,
                            index: 1,
                            journeyType: journeyType,
                            titleFromTo: "To",
                            handleInputs: dropHandlings
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const TDP_JorneyDetails = (TransferJourneyDetails);

// EXTERNAL MODULE: ./src/components/elements/InfoModal/InfoModal.js
var InfoModal = __webpack_require__(7489);
// EXTERNAL MODULE: ./src/store/showFieldReducer/showFieldSelectors.js
var showFieldSelectors = __webpack_require__(6388);
// EXTERNAL MODULE: ./src/components/elements/LeftRightButtons/index.js
var LeftRightButtons = __webpack_require__(350);
// EXTERNAL MODULE: ./src/pages/transfer-details/CheckBox.js
var CheckBox = __webpack_require__(8037);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/hooks/useConfirm.js
var useConfirm = __webpack_require__(628);
;// CONCATENATED MODULE: ./src/pages/transfer-details/index.js


















const TransferDetails = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const waitinggModalInfo = (0,external_react_redux_.useSelector)(showFieldSelectors/* waitingModalInfo */.VH);
    const selectcheckingGoToNextPage = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* checkingGoToNextPage */.vT);
    const checkedInput = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectCHheckedInput */.On);
    const selectedHandlingInputs = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectHandlingInputs */.Qc); //pickupime flightnumber handling
    //transfer pick drop items
    const TransferQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    const selectedPickUpsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayPickUpPointsOneWay */.Y6);
    const selectedDropOffOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* onewayDroopOffPointsOneWay */.LD);
    const trSpecialRequest = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferComment */.Y_);
    const selectPassengersNumber = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengersNumber */.pH);
    const fullName = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerFullName */.bp);
    const email = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerEmail */.dC);
    const phone = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerPhone */.wz);
    //return pick drop items
    const returnPickUpPoints = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPickUpPointsReturn */.BP);
    const returnDropOffPoints = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDropOffPointsReturn */.G0);
    const returnQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    const selectreturnPassengerNumber = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerNumber */.Es);
    const selectPickTransferHandling = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* pickUpHandlingsTransfer */.tf);
    const selectDroptransferHandling = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* dropHandlingsTransfer */.Vq);
    const selectreturnPcikHandling = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPickupHandling */.dO);
    const selectreturnDropHandling = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDropHandling */.N4);
    const returnFullName = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerFullName */.Kt);
    const returnEmail = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerEmail */.ZW);
    const returnPhone = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerPhone */.o2);
    const returnSpecialRequest = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferComment */.Y_);
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
            linkName: "/transfer-details",
            name: "Airport Transfer Details"
        }, 
    ]);
    const router = (0,router_.useRouter)();
    // console.log(
    //   selectedHandlingInputs[1].returndropHandling[0].flightDetails.flightNumber
    // );
    //handling passenher details
    const { 0: handleInputs , 1: setHandleInputs  } = (0,external_react_.useState)({
        firstname: fullName.length > 0 ? fullName : "",
        firstnameError: "",
        firstNameFocused: false,
        email: email.length > 0 ? email : "",
        emailError: "",
        emailFocused: false,
        phone: phone.length > 0 ? phone : "",
        phoneError: "",
        phoneFocused: false,
        passengersNumber: selectPassengersNumber
    });
    const { 0: handleTextArea , 1: setHandleTextArea  } = (0,external_react_.useState)({
        transfer: trSpecialRequest.length > 0 ? trSpecialRequest : "",
        return: returnSpecialRequest.length > 0 ? returnSpecialRequest : ""
    });
    //setHandling inpts for return passenger details
    //handling passenher details
    const { 0: handleInputsReturn , 1: setHandleInputsReturn  } = (0,external_react_.useState)({
        firstname: returnFullName.length > 0 ? returnFullName : "",
        firstnameError: "",
        firstNameFocused: false,
        email: returnEmail.length > 0 ? returnEmail : "",
        emailError: "",
        emailFocused: false,
        phone: returnPhone.length > 0 ? returnPhone : "",
        phoneError: "",
        phoneFocused: false,
        passengersNumber: selectreturnPassengerNumber
    });
    const confirmationAlert = (0,useConfirm/* useConfirm */.N)({
        previousUrl: "/quotation",
        nextUrl: "/payment",
        message: "If you leave the page, all data will be deleted."
    });
    const gotoNextPage = (e)=>{
        //'gfhgfh@hkjhkj.com'.split('@').length===2 && 'gfhgfh@hkjhkj.com'.split('@')[1].split('.').length === 2
        //yani eger asagidakilar true ise demeli error yoxdur
        let fL = handleInputs.firstname.length > 0;
        let eL = handleInputs.email.includes("@") && !handleInputs.email.includes(" ");
        let pL = handleInputs.phone.length > 0;
        //return passenger details
        let rfL = !checkedInput ? handleInputsReturn.firstname.length > 0 : true;
        let reL = !checkedInput ? handleInputsReturn.email.includes("@") && !handleInputsReturn.email.includes(" ") : true;
        let rpL = !checkedInput ? handleInputsReturn.phone.length > 0 : true;
        //handlingError of passenger details
        if (!fL || !pL || !eL || !rfL || !reL || !rpL) {
            setHandleInputs((values)=>({
                    ...values,
                    firstnameError: !fL ? "required" : "",
                    phoneError: !pL ? "required" : "",
                    emailError: !eL ? "required" : ""
                }));
            if (!checkedInput) {
                setHandleInputsReturn((values)=>({
                        ...values,
                        firstnameError: !rfL ? "required" : "",
                        phoneError: !rpL ? "required" : "",
                        emailError: !reL ? "required" : ""
                    }));
            }
        }
        if (pL && eL && fL && reL && rfL && rpL) {
            // console.log("inside");
            dispatch({
                type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                payload: true
            });
        } else {
            dispatch({
                type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                payload: false
            });
        }
        //bu error sadece flight ile ilgili inut boslugunda olusucak
        //*checking flights length start
        selectPickTransferHandling.map((each, i)=>{
            if (each?.flightDetails?.flightNumber?.length < 1) {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "transfer",
                        categoryOfError: "flightCategory",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "",
                        jourrneyType: "transfer",
                        categoryOfError: "flightCategory",
                        whichSelectedItem: i
                    }
                });
            }
        });
        selectPickTransferHandling.map((each, i)=>{
            // console.log(each?.waitingMinute,"each?.waitingMinute");
            if (each?.waitingMinute.length === 0) {
                // alert("wainting.is length", each?.waitingMinute.length)
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "transfer",
                        categoryOfError: "flightCategory_Waiting",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "",
                        jourrneyType: "transfer",
                        categoryOfError: "flightCategory_Waiting",
                        whichSelectedItem: i
                    }
                });
            }
        });
        //burda eger returndeki pick upoints varsa icindekilerin biri bos ise error verir
        selectreturnPcikHandling.map((each, i)=>{
            if (each?.flightDetails?.flightNumber?.length < 1) {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "return",
                        categoryOfError: "flightCategory",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "",
                        jourrneyType: "return",
                        categoryOfError: "flightCategory",
                        whichSelectedItem: i
                    }
                });
            }
        });
        selectreturnPcikHandling.map((each, i)=>{
            if (each?.waitingMinute.length === 0) {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "return",
                        categoryOfError: "flightCategory_Waiting",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "",
                        jourrneyType: "return",
                        categoryOfError: "flightCategory_Waiting",
                        whichSelectedItem: i
                    }
                });
            }
        });
        //
        //*postss start
        selectPickTransferHandling.map((each, i)=>{
            if (each?.postCodeDetails?.postCodeAddress?.length < 1) {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "transfer",
                        categoryOfError: "postCategory",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "",
                        jourrneyType: "transfer",
                        categoryOfError: "postCategory",
                        whichSelectedItem: i
                    }
                });
            }
        });
        selectDroptransferHandling.map((each, i)=>{
            if (each?.postCodeDetails?.postCodeAddress?.length < 1) {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "transfertwo",
                        categoryOfError: "postCategory",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "",
                        jourrneyType: "transfertwo",
                        categoryOfError: "postCategory",
                        whichSelectedItem: i
                    }
                });
            }
        });
        //burda eger returndeki pick upoints varsa icindekilerin biri bos ise error verir
        selectreturnPcikHandling.map((each, i)=>{
            if (each?.postCodeDetails?.postCodeAddress?.length < 1) {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "return",
                        categoryOfError: "postCategory",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "",
                        jourrneyType: "return",
                        categoryOfError: "postCategory",
                        whichSelectedItem: i
                    }
                });
            }
        });
        selectreturnDropHandling.map((each, i)=>{
            if (each?.postCodeDetails?.postCodeAddress?.length < 1) {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "returntwo",
                        categoryOfError: "postCategory",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "",
                        jourrneyType: "returntwo",
                        categoryOfError: "postCategory",
                        whichSelectedItem: i
                    }
                });
            }
        });
        //*post finisfh
        //*checking flights length finish
        //*cruise start
        selectPickTransferHandling.map((each, i)=>{
            if (each?.cruiseNumber?.length < 1) {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "transfer",
                        categoryOfError: "cruise",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx,
                    payload: {
                        erMessage: "",
                        jourrneyType: "transfer",
                        categoryOfError: "cruise",
                        whichSelectedItem: i
                    }
                });
            }
        });
        //burda eger returndeki pick upoints varsa icindekilerin biri bos ise error verir
        selectreturnPcikHandling.map((each, i)=>{
            if (each?.cruiseNumber?.length < 1) {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "required",
                        jourrneyType: "return",
                        categoryOfError: "cruise",
                        whichSelectedItem: i
                    }
                });
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            } else {
                dispatch({
                    type: pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke,
                    payload: {
                        erMessage: "",
                        jourrneyType: "return",
                        categoryOfError: "cruise",
                        whichSelectedItem: i
                    }
                });
            }
        });
    //*cruise finish
    };
    const handleChangeTextArea = (e, journeyType)=>{
        // console.log(e.target.value);
        // console.log(e.target.value.includes('"'));
        if (e.target.value.includes('"') || e.target.value.includes(`'`) || e.target.value.includes("/") || e.target.value.includes("\\")) {
            return;
        } else {
            console.log(e.target.value);
            setHandleTextArea((prev)=>({
                    ...prev,
                    [e.target.name]: e.target.value
                }));
            dispatch({
                type: pickUpDropTypes/* UPDATE_SPECIAL_REQUEST */.OY,
                payload: {
                    value: e.target.value,
                    journeyType
                }
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (selectcheckingGoToNextPage) {
            // alert("tm")
            let arrayForChecking = [
                ...selectPickTransferHandling,
                ...selectDroptransferHandling,
                ...selectreturnPcikHandling,
                ...selectreturnDropHandling, 
            ];
            let checkForInsideInputs = arrayForChecking.every((each)=>{
                return each?.errorMessage.length < 1;
            });
            let checkInsiDEinputsForWaiiting = arrayForChecking.every((each)=>{
                return each?.waitingMinute.length > 0;
            });
            let s = arrayForChecking.map((each)=>{
                return each?.waitingMinute.length > 0;
            });
            if (checkForInsideInputs && checkInsiDEinputsForWaiiting) {
                router?.push("/payment");
                dispatch({
                    type: pickUpDropTypes/* CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE */.OT,
                    payload: false
                });
            }
        }
    }, [
        selectcheckingGoToNextPage,
        pickUpDropSelectors/* selectHandlingInputs */.Qc
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!checkedInput) {
            window.scrollTo({
                top: 755,
                left: 0,
                behavior: "smooth"
            });
        } else {
            window.scrollTo({
                top: 156,
                left: 0,
                behavior: "smooth"
            });
        }
    }, [
        checkedInput
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            title: "Transfer Details London Taxi",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `page ${(styles_module_default()).tr_page}`,
                children: [
                    waitinggModalInfo && /*#__PURE__*/ jsx_runtime_.jsx(InfoModal/* default */.Z, {
                        content: "Please note that on international flights, for UK and EU Citizens the average clearing time is around 45 to 60 minutes except for first & business class travellers where it is 30-45 minutes. Other nationalities take around 60-70 minutes and foreign students may take up to 90 minutes. For domestic flight, the clearance time is around 15 minutes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `page_section ${(styles_module_default()).tr_page_section}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `page_section_container ${(styles_module_default()).tr_page_section_container}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(LinkBreadcumb/* default */.Z, {
                                    crumbs: crumbs
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).content,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).content_left,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TDP_JourneySummary/* default */.Z, {
                                                    title: "Transfer Journey",
                                                    journeyType: 0,
                                                    showPrice: false
                                                }),
                                                returnPickUpPoints.length > 0 && returnDropOffPoints.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(TDP_JourneySummary/* default */.Z, {
                                                    title: "Return Journey",
                                                    journeyType: 1,
                                                    showPrice: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).right,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TDP_PassengerDetails, {
                                                    handleInputs: handleInputs,
                                                    setHandleInputs: setHandleInputs,
                                                    quot: TransferQuot,
                                                    passNumber: selectPassengersNumber,
                                                    title: "Passenger Details",
                                                    journeyType: 0
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(TDP_JorneyDetails, {
                                                    pickUps: selectedPickUpsOneWay,
                                                    drops: selectedDropOffOneWay,
                                                    journeyTitle: returnPickUpPoints.length > 0 ? "Transfer Journey Details" : "Journey Details",
                                                    journeyType: 0,
                                                    pickupHandlings: selectPickTransferHandling,
                                                    dropHandlings: selectDroptransferHandling
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `${(styles_module_default()).special_request_div}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (styles_module_default()).special_div,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                                                            name: "transfer",
                                                            icon: "pen-to-square",
                                                            value: handleTextArea.transfer,
                                                            onChange: (e)=>handleChangeTextArea(e, 0),
                                                            title: "Special Request "
                                                        })
                                                    })
                                                }),
                                                !checkedInput && /*#__PURE__*/ jsx_runtime_.jsx(TDP_PassengerDetails, {
                                                    handleInputs: handleInputsReturn,
                                                    setHandleInputs: setHandleInputsReturn,
                                                    quot: returnQuot,
                                                    passNumber: selectreturnPassengerNumber,
                                                    title: "Passenger Details For Return Journey",
                                                    journeyType: 1,
                                                    animation: true
                                                }),
                                                returnPickUpPoints.length > 0 && returnDropOffPoints.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(TDP_JorneyDetails, {
                                                    pickUps: returnPickUpPoints,
                                                    drops: returnDropOffPoints,
                                                    journeyTitle: "Return Journey Details",
                                                    journeyType: 1,
                                                    marginTop: true,
                                                    pickupHandlings: selectedHandlingInputs[1].returnPcikHandling,
                                                    dropHandlings: selectedHandlingInputs[1].returndropHandling
                                                }),
                                                returnPickUpPoints.length > 0 && returnDropOffPoints.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `${(styles_module_default()).special_request_div}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (styles_module_default()).special_div,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                                                            name: "return",
                                                            icon: "pen-to-square",
                                                            value: handleTextArea.return,
                                                            onChange: (e)=>handleChangeTextArea(e, 1),
                                                            title: "Special Request "
                                                        })
                                                    })
                                                }),
                                                returnDropOffPoints.length > 0 && returnDropOffPoints.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(CheckBox["default"], {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(LeftRightButtons/* default */.Z, {
                                                    linkToBack: "/quotation",
                                                    styleForTransferDetails: true,
                                                    leftBtnTitle: "Previous",
                                                    rightBtnTitle: "Next",
                                                    gotoNextPage: gotoNextPage
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
// ..
//background-color: #efefef;
//https: //api.london-tech.com/media/i/angle-double-right/efefef
/* harmony default export */ const transfer_details = (TransferDetails);
async function getServerSideProps({ req , res  }) {
    if (req.url === "/transfer-details") {
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
var __webpack_exports__ = __webpack_require__.X(0, [699,676,1664,5789,8348,5367,4032,1680,9918,5068,4316,452,8037], () => (__webpack_exec__(114)));
module.exports = __webpack_exports__;

})();