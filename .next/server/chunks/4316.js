exports.id = 4316;
exports.ids = [4316];
exports.modules = {

/***/ 308:
/***/ ((module) => {

// Exports
module.exports = {
	"form_control": "styles_form_control__ZMIZZ",
	"form_control_header": "styles_form_control_header__9hjBF",
	"form_control_header_label": "styles_form_control_header_label__nM_Fu",
	"form_control_header_error_message": "styles_form_control_header_error_message__XBByh",
	"textarea_div": "styles_textarea_div__qChjL",
	"textarea": "styles_textarea__TezVI",
	"error_textarea_border": "styles_error_textarea_border__7sNWk",
	"textarea_icon": "styles_textarea_icon__ceae9",
	"form_group_textarea": "styles_form_group_textarea__KAC3P"
};


/***/ }),

/***/ 7691:
/***/ ((module) => {

// Exports
module.exports = {
	"fade_left": "elgun_fade_left__Szu9f",
	"fade_bottom_to_top": "elgun_fade_bottom_to_top__7j4eZ",
	"bottom_to_top": "elgun_bottom_to_top__uclmO",
	"zoom_in": "elgun_zoom_in__Z4_TY",
	"zoom_out": "elgun_zoom_out__RvW4x",
	"form_control": "elgun_form_control__cQNK3",
	"form_control_header": "elgun_form_control_header__gTfje",
	"form_control_header_label": "elgun_form_control_header_label__sUn1j",
	"form_control_header_error_message": "elgun_form_control_header_error_message__Z_PO9",
	"input_div": "elgun_input_div__sg3B9",
	"error_input_border": "elgun_error_input_border__eWNOB",
	"input_icon": "elgun_input_icon__T1FVB",
	"input_icon_animation": "elgun_input_icon_animation__lm0WF",
	"input_close_icon": "elgun_input_close_icon__UEXU7",
	"form_group": "elgun_form_group__1y_Tl",
	"contact_us_label": "elgun_contact_us_label__A4LHC"
};


/***/ }),

/***/ 9434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @TextInput { //? value:string, onChange:function,onFocus:function,onBlur:function, name, title:string, icon:string, className:string,placeholder:string,errorMessage:string}
 **/ const TextArea = (props)=>{
    let { value ="" , onChange =(e)=>{} , name , icon , placeholder , errorMessage ="" , title ="" , noErrorMessage , animationTextarea =false , contactUs =false ,  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !animationTextarea ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_control)} `,
            children: [
                !noErrorMessage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_control_header)} `,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_control_header_label),
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_control_header_error_message),
                            children: errorMessage && errorMessage
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textarea_div),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textarea_icon)} fa-solid fa-${icon}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            placeholder: placeholder,
                            onChange: onChange,
                            name: name,
                            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textarea)} ${errorMessage && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().error_textarea_border)}`,
                            id: "",
                            value: value
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `
        form_group_textarea
        ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_group_textarea)}
        `,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    style: {
                        resize: "none"
                    },
                    className: `textarea_animation  ${errorMessage && "border_required"}`,
                    name: name,
                    autoComplete: "off",
                    onChange: onChange,
                    value: value
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "highlight"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "bar_textarea"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: `textarea_animation_label
            ${contactUs ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contactUs_label) : ""}`,
                    htmlFor: name,
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "textarea_error_message",
                    children: errorMessage && errorMessage
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ }),

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7691);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function TextInput(props) {
    let { value ="" , onChange =(e)=>{} , onFocus =(e)=>{} , onBlur =(e)=>{} , clickClearFieldIcon =(e)=>{} , name ="" , title ="" , icon ="" , placeholder ="" , type ="" , errorMessage ="" , noErrorMessage ="" , readOnly =false , focused =false , animationInput =false , contactUs =false ,  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !animationInput ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_control)}`,
            children: [
                !noErrorMessage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_control_header)} `,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_control_header_label),
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_control_header_error_message),
                            children: errorMessage && errorMessage
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input_div)} `,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input_icon)} fa-solid fa-${icon} ${focused ? (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input_icon_animation) : ""}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            autoComplete: "off",
                            placeholder: focused ? "" : placeholder,
                            name: name,
                            className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input)} ${errorMessage ? (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().error_input_border) : ""}`,
                            onChange: onChange,
                            onFocus: onFocus,
                            onBlur: onBlur,
                            type: type,
                            value: value,
                            readOnly: readOnly
                        }),
                        focused && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            onClick: clickClearFieldIcon,
                            className: `fa-solid fa-circle-xmark ${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input_close_icon)}`
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form_group)} form_group `,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    value: value,
                    type: type,
                    className: `input_animation ${errorMessage && "border_required"}`,
                    name: name,
                    onChange: onChange,
                    autoComplete: "off"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "highlight"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "bar_input"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: `
            input_animation_label
            ${contactUs ? (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contact_us_label) : ""}`,
                    htmlFor: name,
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "animation_input_error_message",
                    children: errorMessage && errorMessage
                })
            ]
        })
    });
}
// example
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);


/***/ })

};
;