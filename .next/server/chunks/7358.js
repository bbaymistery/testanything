exports.id = 7358;
exports.ids = [7358,1680];
exports.modules = {

/***/ 6751:
/***/ ((module) => {

// Exports
module.exports = {
	"link_breadcumb": "styles_link_breadcumb__LJVTs",
	"home": "styles_home__1v8wO"
};


/***/ }),

/***/ 5685:
/***/ ((module) => {

// Exports
module.exports = {
	"ul": "styles_ul__nxysU",
	"li": "styles_li__hSJnR",
	"book_item": "styles_book_item__XMXAq",
	"row": "styles_row__pgBDT",
	"col": "styles_col__OJpIk",
	"first_col": "styles_first_col__hwQ8G",
	"second_col": "styles_second_col__NAzVs",
	"booking_item_rating": "styles_booking_item_rating__S4nW5",
	"icon_group": "styles_icon_group__wZHWs",
	"booking_item_rating_number": "styles_booking_item_rating_number__iVhzM",
	"booking_item_title": "styles_booking_item_title__4GvvN",
	"booking_item_adress": "styles_booking_item_adress__TFk6v",
	"booking_item_description": "styles_booking_item_description__1BT6u",
	"third_col": "styles_third_col__9WY0j",
	"price_div": "styles_price_div__rWLpY",
	"price": "styles_price__IYi2x",
	"text": "styles_text__92CrI"
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


/***/ }),

/***/ 3822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3570);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5789);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5685);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);







const TransferCard = (props)=>{
    const { items  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_5__/* .selectPickUpDropOffReducer */ .X7);
    const objectDetailss = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.objectDetails)
        }), {});
    const handleClickToGetQuotaion = (e, title)=>{
        if (title === "Heathrow to Gatwick transfer") {
            let pickUp = {
                token: "9a619c5147a0cf4c5738fe72f5025fe16318f15b4c01af12d4dba1691d01c04ab56e2581be1b28b1d8f021dc7908988bc7d1d8f28c9982145576671571b9bada97aee5a6eb89d0ff3113cecfc8ed6db3227af533cee37d8cb44c87dfd23bf20abec72f86369a24391604a934fed7750c7db7dbfb655fb2b1d7946e25be6f594860841e5e5c4b7897d33172f3fb3a5402a5fdf18223e9de603a2fc69e0f8ee79d66a8028422ee465dc88c9239e9cbd8dc711bcd666c615cde26c44ba033ee0c2847e28c35f1a93178c940f8cab93cad21",
                pid: 4529,
                ptype: 2,
                address: "London Heathrow Airport, Terminal 2",
                postcode: "TW6 1EW",
                pcatId: 1
            };
            let drop = {
                token: "a2bd9ef5d2fc41dc88adeda30c32d607a58ac25ef28f4f0412384db816db330192caf5d7cb48804191bce3b6ff814902e22c53bf5316ea5ebf85eb4ec42d3add1870507636a6b336f2b7a130bbf627ac26ffe7eaf1e694d03648f051e0324b9ee0510403402b0f8cc989e7a047644fadcf288077cfb3d805608244d38c3c51e0ba8f6d08fe4ee54386a53d328e957aece94fb8c4082d6fa344c42caf1e15784b9999cf6c191c487af982074557fdbd6b21ee1bfb419891b572442395416f22932e219a108e2d16b50841908356160f38",
                pid: 6627,
                ptype: 2,
                address: "Gatwick Airport, North Terminal",
                postcode: "RH6 0NP",
                pcatId: 1
            };
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_4__/* .addItemToSelectedList */ .Gt)(pickUp, "pickupPoints", 0, objectDetailss[pickUp.pcatId], 0));
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_4__/* .addItemToSelectedList */ .Gt)(drop, "dropoffPoints", 0, objectDetailss[drop.pcatId], 0));
            router.push("/");
        } else {
            router.push("/");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ul),
        children: items.map((item)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                id: item.id,
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().li),
                onClick: (e)=>handleClickToGetQuotaion(e, item.title),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().book_item),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().row),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().first_col)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().col)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: item.img,
                                    alt: item.address
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().second_col)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().col)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().booking_item_rating),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon_group),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa-solid fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa-solid fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa-solid fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa-solid fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa-solid fa-star-half-stroke"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().booking_item_rating_number),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                        children: "4.8"
                                                    }),
                                                    " of 5"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                children: "(984 customer reviews)"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().booking_item_title),
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().booking_item_adress),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa-solid fa-plane"
                                            }),
                                            " ",
                                            item.address
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().booking_item_description),
                                        children: item.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().third_col)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().col)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().price_div),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().price),
                                                children: [
                                                    "\xa3",
                                                    item.price
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                                                children: "Starting from"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "btn btn_primary",
                                        children: "Get Quotation"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }, item.id);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferCard);


/***/ })

};
;