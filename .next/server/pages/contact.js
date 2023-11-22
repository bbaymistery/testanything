(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335,3543,9738,6557,4678,3396,2858,150,4201,1344,31,6103];
exports.modules = {

/***/ 4279:
/***/ ((module) => {

// Exports
module.exports = {
	"alert_container": "styles_alert_container__5igvk",
	"alert_div": "styles_alert_div__MtBek",
	"check": "styles_check__I06nF",
	"close": "styles_close__slZVm",
	"container": "styles_container__GjH0R",
	"progress2": "styles_progress2__IoQBU",
	"progress_bar2": "styles_progress_bar2__P_R5I",
	"progress_moved": "styles_progress_moved__VBcyJ",
	"progress": "styles_progress__xNe_2",
	"alert_div_warning": "styles_alert_div_warning__nRx0K",
	"alert_div_error": "styles_alert_div_error__WS6Q1",
	"showAlert": "styles_showAlert__F8J4t",
	"alertt": "styles_alertt___QUpe"
};


/***/ }),

/***/ 874:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "styles_loading__reFtW",
	"spin": "styles_spin__aXREl",
	"pulse": "styles_pulse__4zeor"
};


/***/ }),

/***/ 4163:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumb_area": "styles_breadcrumb_area__Q_6Sv",
	"breadcrumb_container": "styles_breadcrumb_container__8b0WD",
	"breadcrumb_container_title": "styles_breadcrumb_container_title__vqhtU"
};


/***/ }),

/***/ 3754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(874);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const LoadingInput = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loading)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingInput);


/***/ }),

/***/ 5352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4163);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const BreadCrumb = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumb_area),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumb_container),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().breadcrumb_container_title),
                children: title
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumb);


/***/ }),

/***/ 2785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/pages/contact/styles.module.scss
var styles_module = __webpack_require__(8071);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 4 modules
var Layout = __webpack_require__(5367);
// EXTERNAL MODULE: ./src/components/elements/TextInput/index.js
var TextInput = __webpack_require__(740);
// EXTERNAL MODULE: ./src/components/elements/TextArea/index.js
var TextArea = __webpack_require__(9434);
// EXTERNAL MODULE: ./src/pages/contact/ContentLeft.js
var ContentLeft = __webpack_require__(2221);
// EXTERNAL MODULE: ./src/components/elements/Alert/styles.module.scss
var Alert_styles_module = __webpack_require__(4279);
var Alert_styles_module_default = /*#__PURE__*/__webpack_require__.n(Alert_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/Alert/index.js



const Alert = (props)=>{
    const { close , message , setAlert , warning , error , alert  } = props;
    // console.log(message);
    (0,external_react_.useEffect)(()=>{
        if (alert) {
            setTimeout(()=>{
                setAlert({
                    alert: false,
                    message: "",
                    close: false
                });
            }, 5000);
        }
    }, [
        alert
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Alert_styles_module_default()).alert_container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(Alert_styles_module_default()).alert_div} ${message.length > 0 ? (Alert_styles_module_default()).showAlert : ""}
        ${warning && (Alert_styles_module_default()).alert_div_warning}
        ${error && (Alert_styles_module_default()).alert_div_error}

        `,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: `fa-solid fa-circle-check ${(Alert_styles_module_default()).check}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: message
                }),
                close && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    onClick: ()=>setAlert({
                            alert: false,
                            message: "",
                            close: false
                        }),
                    className: `fa-solid fa-xmark ${(Alert_styles_module_default()).close}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Alert_styles_module_default()).container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(Alert_styles_module_default()).progress2} ${(Alert_styles_module_default()).progress_moved}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Alert_styles_module_default()).progress_bar2
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const elements_Alert = (Alert);

// EXTERNAL MODULE: ./src/components/elements/LoadingInput/index.js
var LoadingInput = __webpack_require__(3754);
// EXTERNAL MODULE: ./src/components/elements/breadCrubm/index.js
var breadCrubm = __webpack_require__(5352);
;// CONCATENATED MODULE: ./src/pages/contact/index.js












const Contact = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: formValue , 1: setFormValue  } = (0,external_react_.useState)({
        email: "",
        phone: "",
        subject: "",
        message: "",
        fullname: ""
    });
    const { 0: error , 1: setError  } = (0,external_react_.useState)({
        email: "",
        phone: "",
        subject: "",
        message: "",
        fullname: ""
    });
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: alert , 1: setAlert  } = (0,external_react_.useState)({
        alert: false,
        message: "",
        close: false
    });
    const onchangeHandler = (e)=>{
        setFormValue((values)=>({
                ...values,
                [e.target.name]: e.target.value
            }));
    };
    const handleSend = ()=>{
        if (!formValue.email) {
            setError((error)=>({
                    ...error,
                    email: "Required"
                }));
        }
        if (!formValue.phone) {
            setError((error)=>({
                    ...error,
                    phone: "Required"
                }));
        }
        if (!formValue.message) {
            setError((error)=>({
                    ...error,
                    message: "Required"
                }));
        }
        if (!formValue.subject) {
            setError((error)=>({
                    ...error,
                    subject: "Required"
                }));
        }
        if (!formValue.fullname) {
            setError((error)=>({
                    ...error,
                    fullname: "Required"
                }));
        }
        if (formValue.email && formValue.phone && formValue.subject && formValue.phone && formValue.message) {
            setLoading(true);
            let reqOptions = {
                method: "POST",
                body: JSON.stringify({
                    formValue
                }),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            };
            fetch("/api/contact_us_email", reqOptions).then((res)=>{
                console.log(res);
                setLoading(false);
                if (res.statusText === "OK") {
                    setAlert({
                        alert: true,
                        close: true,
                        message: "Email successfully sended"
                    });
                } else {
                    setAlert({
                        alert: true,
                        close: true,
                        error: true,
                        message: "Something went wrong "
                    });
                }
                setError({
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    fullname: ""
                });
                setFormValue({
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    fullname: ""
                });
            }).catch((e)=>{
                console.log(e);
                setAlert({
                    alert: true,
                    close: true,
                    error: true,
                    message: e.message
                });
                setLoading(false);
                setAlert({
                    alert: true,
                    close: true,
                    error: true,
                    message: "Something went wrong "
                });
            });
            setTimeout(()=>{
                setLoading(false);
            }, 2000);
        }
    };
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: pickUpDropTypes/* SET_SELECT_ACTIVE_LINK */.A3,
            payload: "contact"
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "London Contact London Heathrow Taxi",
        keywords: "Heathrow taxi contact",
        description: "Contact London Heathrow taxi service. ",
        noFooter: false,
        noTopbar: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `page ${(styles_module_default()).contact_page}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(breadCrubm/* default */.Z, {
                    title: ""
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `page_section ${(styles_module_default()).contact_page_section}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: ` ${(styles_module_default()).contact_page_section_container}`,
                        children: [
                            alert.alert ? /*#__PURE__*/ jsx_runtime_.jsx(elements_Alert, {
                                setAlert: setAlert,
                                alert: alert,
                                message: alert.message,
                                close: alert.close,
                                error: alert.error,
                                warning: alert.warning
                            }) : "",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).form_content,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentLeft["default"], {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (styles_module_default()).form_content_right,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).form_content_right_title,
                                                children: "Send a Message"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                action: "",
                                                className: (styles_module_default()).form,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).form_left,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).inp_div,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                    name: "fullname",
                                                                    type: "text",
                                                                    animationInput: true,
                                                                    contactUs: true,
                                                                    title: "Full Name",
                                                                    value: formValue.fullname,
                                                                    onChange: (e)=>onchangeHandler(e),
                                                                    errorMessage: !formValue.fullname && error.fullname ? error.fullname : ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).inp_div,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                    name: "email",
                                                                    type: "text",
                                                                    contactUs: true,
                                                                    animationInput: true,
                                                                    title: "Email Address",
                                                                    value: formValue.email,
                                                                    onChange: (e)=>onchangeHandler(e),
                                                                    errorMessage: !formValue.email && error.email ? error.email : ""
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).form_right,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).inp_div,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                    name: "phone",
                                                                    type: "text",
                                                                    contactUs: true,
                                                                    animationInput: true,
                                                                    title: "Phone",
                                                                    onChange: (e)=>onchangeHandler(e),
                                                                    value: formValue.phone,
                                                                    errorMessage: !formValue.phone && error.phone ? error.phone : ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).inp_div,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                    name: "subject",
                                                                    type: "text",
                                                                    animationInput: true,
                                                                    contactUs: true,
                                                                    title: "Subject",
                                                                    onChange: (e)=>onchangeHandler(e),
                                                                    value: formValue.subject,
                                                                    errorMessage: !formValue.subject && error.subject ? error.subject : ""
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).special_div,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                                                    name: "message",
                                                    animationTextarea: true,
                                                    title: "Write Your Message Here",
                                                    onChange: (e)=>onchangeHandler(e),
                                                    value: formValue.message,
                                                    errorMessage: !formValue.message && error.message ? error.message : ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).btn_div,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: handleSend,
                                                    children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(LoadingInput/* default */.Z, {}) : "SEND"
                                                })
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
    });
};
/* harmony default export */ const contact = (Contact);


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [5789,8348,5367,4316,2221], () => (__webpack_exec__(2785)));
module.exports = __webpack_exports__;

})();