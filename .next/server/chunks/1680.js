exports.id = 1680;
exports.ids = [1680];
exports.modules = {

/***/ 6751:
/***/ ((module) => {

// Exports
module.exports = {
	"link_breadcumb": "styles_link_breadcumb__LJVTs",
	"home": "styles_home__1v8wO"
};


/***/ }),

/***/ 1680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6751);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const LinkBreadCumb = ({ crumbs  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().link_breadcumb),
        children: crumbs.map((cr, index)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `${index === 0 ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().home) : " "}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: cr.linkName,
                    children: cr.name
                })
            }, index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkBreadCumb);


/***/ })

};
;