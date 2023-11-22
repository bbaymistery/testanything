exports.id = 5367;
exports.ids = [5367];
exports.modules = {

/***/ 7847:
/***/ ((module) => {

// Exports
module.exports = {
	"container_layout": "styles_container_layout__8VT7S"
};


/***/ }),

/***/ 2047:
/***/ ((module) => {

// Exports
module.exports = {
	"element_section_inside": "styles_element_section_inside__Xa224",
	"section_inside": "styles_section_inside__e9gah",
	"section_container_inside": "styles_section_container_inside__zA00k",
	"boxes": "styles_boxes__qjTVE",
	"box": "styles_box__zznOi",
	"text_color": "styles_text_color__9vn_d",
	"text_white": "styles_text_white__r9c3U",
	"box_one": "styles_box_one__Poiov",
	"box_desc": "styles_box_desc__qsfnO",
	"box_logo": "styles_box_logo__VTuFS"
};


/***/ }),

/***/ 6994:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_container": "styles_nav_container__uGozd",
	"nav": "styles_nav__CEuKe",
	"logoDiv": "styles_logoDiv__5pdp_",
	"ulDiv": "styles_ulDiv__i9pz4",
	"ul": "styles_ul__wXaNV",
	"fa_icon": "styles_fa_icon__0FSEY",
	"rotatedIcon": "styles_rotatedIcon__9dPRe",
	"li_item": "styles_li_item__l9X9a",
	"item": "styles_item__LBLXT",
	"active": "styles_active__BScSE",
	"hoverlayItem": "styles_hoverlayItem__cZCAr",
	"fa_icon_for_desktop": "styles_fa_icon_for_desktop__rz6o5",
	"firstItem": "styles_firstItem__FrVoo",
	"forMobileHover": "styles_forMobileHover__Us5Ry",
	"hoverUl": "styles_hoverUl__IU1zg",
	"ulActive": "styles_ulActive__vIRzO",
	"menu": "styles_menu__tljGU",
	"line": "styles_line__UTqDa",
	"menuActive": "styles_menuActive__EQXpd"
};


/***/ }),

/***/ 26:
/***/ ((module) => {

// Exports
module.exports = {
	"top_header": "styles_top_header__qWxnZ",
	"container": "styles_container__vgRSp",
	"content": "styles_content__QpTpU",
	"content_title_a": "styles_content_title_a__gShOA",
	"top_header_title": "styles_top_header_title___CHpj",
	"top_header_left": "styles_top_header_left__G4QCW",
	"shop_cart": "styles_shop_cart__uwYVu",
	"phoneNumber": "styles_phoneNumber__RDQ2q",
	"phone_tag": "styles_phone_tag__H5Spt"
};


/***/ }),

/***/ 5367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/widgets/Footer/styles.module.scss
var styles_module = __webpack_require__(2047);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/widgets/Footer/Footer.js



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `element_section ${(styles_module_default()).element_section_inside}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `section ${(styles_module_default()).section_inside}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `section_container ${(styles_module_default()).section_container_inside}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).boxes,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(styles_module_default()).box_one} ${(styles_module_default()).box}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: (styles_module_default()).box_logo,
                                    href: "/",
                                    children: "london-heathrow.taxi"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (styles_module_default()).box_desc,
                                    children: "Copyright \xa9 2017 London Heathrow Car Service"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(styles_module_default()).box} ${(styles_module_default()).box_two}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: (styles_module_default()).text_white,
                                    children: "Have Questions"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: (styles_module_default()).text_color,
                                    children: "+44 (0) 20 3887 3844"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (styles_module_default()).text_white,
                                    children: "24/7 Dedicated Customer Support"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(styles_module_default()).box} ${(styles_module_default()).box_three}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: (styles_module_default()).text_white,
                                    children: "E-Mail"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:info@london-heathrow.taxi",
                                        className: (styles_module_default()).text_color,
                                        children: "info@london-heathrow.taxi"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/constants/headerLinkNames/index.js
const headerLinkNames = [
    {
        linkName: "home",
        id: 1,
        linkUrl: "/"
    },
    {
        id: 2,
        linkName: "heathrow transfer deals",
        linkUrl: "/heathrow-transfer-deals"
    },
    {
        id: 6,
        linkName: "Manage Booking",
        linkUrl: "/manage-booking.html"
    },
    {
        id: 3,
        linkName: "terms",
        linkUrl: "/terms"
    },
    {
        id: 4,
        linkName: "contact",
        linkUrl: "/contact"
    },
    {
        id: 5,
        linkName: "about",
        linkUrl: "/about"
    }, 
];
const heathrowTransferDealsLinkNames = [
    {
        linkName: "heathrow central london",
        id: 1,
        linkUrl: "/heathrow-central-london"
    },
    {
        id: 2,
        linkName: "heathrow between terminals",
        linkUrl: "/heathrow-between-terminals"
    },
    {
        id: 3,
        linkName: "heathrow hotels taxi",
        linkUrl: "/heathrow-hotels-taxi"
    }, 
];

// EXTERNAL MODULE: ./src/components/widgets/Header/styles.module.scss
var Header_styles_module = __webpack_require__(6994);
var Header_styles_module_default = /*#__PURE__*/__webpack_require__.n(Header_styles_module);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router.js"
var router_js_ = __webpack_require__(5925);
;// CONCATENATED MODULE: ./src/components/widgets/Header/index.js







const Header = ()=>{
    const navRef = (0,external_react_.useRef)(null);
    const activeLinkSelected = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectActiveLink */.bH);
    const router = (0,router_js_.useRouter)();
    const menuRef = (0,external_react_.useRef)(null);
    const { 0: activeClass , 1: setActiveClass  } = (0,external_react_.useState)(false);
    const { 0: animationDrop , 1: setAnimationDrop  } = (0,external_react_.useState)(false);
    //
    const toggleMenu = ()=>{
        setActiveClass(!activeClass);
        setAnimationDrop(false);
        navRef.current.style.setProperty("--childenNumber", `${animationDrop ? navRef.current.children.length + 2 : navRef.current.children.length}`);
        menuRef.current.classList.toggle(`${(Header_styles_module_default()).menuActive}`);
    };
    const openOrCloseDropDown = (e)=>{
        setAnimationDrop((prev)=>!prev);
    };
    (0,external_react_.useEffect)(()=>{
        navRef.current.style.setProperty("--childenNumber", `${animationDrop ? navRef.current.children.length + 3.6 : navRef.current.children.length}`);
    }, [
        animationDrop
    ]);
    // console.log(activeLinkSelected);
    // console.log(router.pathname);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Header_styles_module_default()).nav_container,
        id: "navbar_container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (Header_styles_module_default()).nav,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_styles_module_default()).logoDiv,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Header_styles_module_default()).logo,
                            children: "Menu"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_styles_module_default()).ulDiv,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        id: "nav",
                        className: `${(Header_styles_module_default()).ul} ${activeClass ? (Header_styles_module_default()).ulActive : "false"}`,
                        style: {
                            borderBottom: `${activeClass ? "2px solid #ed8323" : "none"}`
                        },
                        ref: navRef,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                onClick: openOrCloseDropDown,
                                className: `fa-solid fa-angle-down ${(Header_styles_module_default()).fa_icon} ${animationDrop && (Header_styles_module_default()).rotatedIcon} `
                            }),
                            headerLinkNames.map((item, i)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: `
                  ${(Header_styles_module_default()).li_item}
                  ${item.linkUrl === router.pathname && (Header_styles_module_default()).active}
                  ${i === 1 ? (Header_styles_module_default()).hoverlayItem : ""}
                   `,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: item.linkUrl,
                                            id: "linkUrl",
                                            className: `${(Header_styles_module_default()).firstItem} ${(Header_styles_module_default()).item} ${item.id === 6 ? "manage-booking-a" : ""}`,
                                            children: item.linkName
                                        }),
                                        i === 1 && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            onClick: openOrCloseDropDown,
                                            className: `
                      fa-solid fa-angle-down
                      ${(Header_styles_module_default()).fa_icon_for_desktop}
                      ${animationDrop && (Header_styles_module_default()).rotatedIcon}
                      ${activeLinkSelected === "heathrow transfer deals" ? "text_white" : ""}
                         `
                                        }),
                                        i === 1 && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: (Header_styles_module_default()).hoverUl,
                                            children: heathrowTransferDealsLinkNames.map((item)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `
                            ${item.linkName === activeLinkSelected && (Header_styles_module_default()).active}`,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: item.linkUrl,
                                                        children: [
                                                            `
                              ${item.linkName.split(" ")[0]}
                              ${item.linkName.split(" ")[1]}
                              `,
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            `${item.linkName.split(" ")[2]}`
                                                        ]
                                                    })
                                                }, item.id);
                                            })
                                        }),
                                        i === 1 && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            id: "",
                                            style: {
                                                height: `${animationDrop ? "140px" : "0px"}`,
                                                visibility: `${animationDrop ? "visible" : "hidden"}`,
                                                opacity: `${animationDrop ? 1 : 0}`,
                                                display: `${!animationDrop ? "none" : "block"}`
                                            },
                                            className: ` ${(Header_styles_module_default()).forMobileHover}`,
                                            children: heathrowTransferDealsLinkNames.map((item)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `
                            ${item.linkName === activeLinkSelected && (Header_styles_module_default()).active}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: item.linkUrl,
                                                        children: item.linkName
                                                    })
                                                }, item.id);
                                            })
                                        })
                                    ]
                                }, item.id);
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: toggleMenu,
                    ref: menuRef,
                    className: (Header_styles_module_default()).menu,
                    id: "menu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Header_styles_module_default()).line
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Header_styles_module_default()).line
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Header_styles_module_default()).line
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const widgets_Header = (Header); //                  ${item.linkName === activeLinkSelected && styles.active}
 //

// EXTERNAL MODULE: ./src/components/widgets/Topheader/styles.module.scss
var Topheader_styles_module = __webpack_require__(26);
var Topheader_styles_module_default = /*#__PURE__*/__webpack_require__.n(Topheader_styles_module);
;// CONCATENATED MODULE: ./src/components/widgets/Topheader/index.js



const TopHeader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Topheader_styles_module_default()).top_header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Topheader_styles_module_default()).container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Topheader_styles_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        className: (Topheader_styles_module_default()).content_title_a,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: `${(Topheader_styles_module_default()).top_header_title} ${(Topheader_styles_module_default()).h1}`,
                            children: "LONDON - HEATHROW TAXI"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Topheader_styles_module_default()).top_header_left,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Topheader_styles_module_default()).shop_cart,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Topheader_styles_module_default()).phoneNumber,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "tel:+442038873844",
                                    className: (Topheader_styles_module_default()).phone_tag,
                                    children: "Click to call +442038873844"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Topheader = (TopHeader);

// EXTERNAL MODULE: ./src/components/layouts/Layout/styles.module.scss
var Layout_styles_module = __webpack_require__(7847);
var Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(Layout_styles_module);
;// CONCATENATED MODULE: ./src/components/layouts/Layout/index.js






const Layout = ({ children , title ="Heathrow Taxi Home.  London-Heathrow.taxi" , noFooter =false , noTopbar =false , description ="London Heathrow taxi and transport service,  Taxi and shuttle service  to and from Heathrow  Airport" , keywords ="Heathrow taxi, London Heathrow taxi, Heathrow Airport taxi, cheap Heathrow taxi, Heathrow taxi quote, Heathrow taxi price, Heathrow Airport cost, Heathrow taxi fare, Heathrow airport taxi quote, Heathrow Airport taxi cost, Heathrow airport taxi price, Heathrow Airport taxi fare." ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layout_styles_module_default()).container_layout,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: keywords
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "distribution",
                        content: "Global"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "copyright",
                        content: "Copyright London-heathrow.taxi 2022. All rights reserved."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "resource-type",
                        content: "document"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "London-Heathrow.Taxi"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "language",
                        content: "en"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, nofollow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
                        media: "all"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "9niN--Hxw6fLfS5Om0lK1dGEvoDbwo-ZTxjamC9oz64"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "Content-Type",
                        content: "text/html; charset=UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "chrome=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "rating",
                        content: "Safe For Kids"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=7"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=Edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "text/html;charset=utf-8",
                        httpEquiv: "Content-Type"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "apple-mobile-web-app-title",
                        content: "Airport Taxi"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://widget.reviews.co.uk/polaris/build.js"
                    })
                ]
            }),
            !noTopbar ? /*#__PURE__*/ jsx_runtime_.jsx(Topheader, {}) : "",
            /*#__PURE__*/ jsx_runtime_.jsx(widgets_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            !noFooter ? /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {}) : ""
        ]
    });
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ })

};
;