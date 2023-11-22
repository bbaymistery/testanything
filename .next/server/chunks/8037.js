exports.id = 8037;
exports.ids = [8037];
exports.modules = {

/***/ 7457:
/***/ ((module) => {

// Exports
module.exports = {
	"tr_page": "styles_tr_page__97BFt",
	"tr_page_section_container": "styles_tr_page_section_container__WHl_D",
	"content": "styles_content__eHtqd",
	"content_left": "styles_content_left__fxgxr",
	"right": "styles_right__7Hmi0",
	"special_request_div": "styles_special_request_div__OPAk0",
	"special_div": "styles_special_div__gG5jr",
	"textMiddle": "styles_textMiddle__7nL9I",
	"form_checkbox": "styles_form_checkbox__vEm2Y",
	"checkbox": "styles_checkbox__eOhJ7"
};


/***/ }),

/***/ 8037:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5789);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8348);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7457);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const CheckBox = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const checkedInput = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_3__/* .selectCHheckedInput */ .On);
    const handleChangeCheckInput = (e)=>{
        dispatch({
            type: _store_pickUpDropOffReducer_pickUpDropTypes__WEBPACK_IMPORTED_MODULE_4__/* .CHECKED_INPUT_FOR_RETURN */ .rt,
            payload: e.currentTarget.previousSibling.checked
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form_checkbox),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkbox),
                type: "checkbox",
                id: "checkbox2",
                defaultChecked: checkedInput
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: "checkbox2",
                onClick: handleChangeCheckInput,
                children: [
                    "the passenger details",
                    checkedInput ? " are a same" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().textMiddle),
                        children: [
                            "are not same",
                            "  "
                        ]
                    }),
                    " ",
                    "for both journey"
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox); // <div className={styles.checkBtn}>
 //   <input
 //     onChange={handleChangeCheckInput}
 //     type="checkbox"
 //     className={styles.checkBtn__input}
 //     id="check3"
 //     name="check3"
 //     defaultChecked={checkedInput}
 //   />
 //   <label
 //     htmlFor="check3"
 //     className={`
 //     ${styles.checkBtn_label}
 //     ${checkedInput ? styles.pChecked : styles.checkedText}
 //   `}
 //   >
 // the passenger details
 // {checkedInput ? (
 //   " are a same"
 // ) : (
 //   <span className={styles.textMiddle}>
 //     are not same{"  "}
 //   </span>
 // )}{" "}
 // for both journey
 //   </label>
 // </div>


/***/ })

};
;