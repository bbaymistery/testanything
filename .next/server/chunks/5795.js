"use strict";
exports.id = 5795;
exports.ids = [5795];
exports.modules = {

/***/ 5795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": () => (/* binding */ dateTimeStringFunc),
/* harmony export */   "J9": () => (/* binding */ dateFormatCheatReturn),
/* harmony export */   "o$": () => (/* binding */ dateTimeStringFuncForReturn),
/* harmony export */   "t": () => (/* binding */ dateFormatCheatTransfer)
/* harmony export */ });
/* unused harmony exports currentDate, convertDateToMilliSecond */
//!  'yyyy-mm-dd HH:MM'   FOR   transferDateTimeString
const dateTimeStringFunc = ()=>{
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * 6); //6
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    let minute = "00";
    let currentDate = `${year}-${month}-${date} ${hours}:${minute}`;
    return currentDate;
};
const dateTimeStringFuncForReturn = ()=>{
    //6+24 =>BIR GUN FARK
    // 6+24+24 >IIKI GUN FARK
    //6+24+24+24 =>3 GUN FARK
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * (6 + 24 + 24 + 24)); //9
    // console.log(tmpDt, "<<<tmpDttmpDttmpDt");
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    let minute = "00";
    let currentDate = `${year}-${month}-${date} ${hours}:${minute}`;
    return currentDate;
};
const dateFormatCheatTransfer = ()=>{
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * 6); //6
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    let minute = "00";
    let currentDate = `${date}/${month}/${year} ${hours}:${minute}`;
    return currentDate;
};
const dateFormatCheatReturn = ()=>{
    //6+24 =>BIR GUN FARK
    // 6+24+24 >IIKI GUN FARK
    //6+24+24+24 =>3 GUN FARK
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * (6 + 24 + 24 + 24)); //9
    // console.log(tmpDt, "<<<tmpDttmpDttmpDt");
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    let minute = "00";
    let currentDate = `${date}/${month}/${year} ${hours}:${minute}`;
    return currentDate;
};
const currentDate = (par)=>{
    let tmpDt = new Date(Date.now());
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let currentDate = `${year}-${month}-${date}`;
    return currentDate;
};
//if return date is behind transfer date it will show up error
//we used to compare date(with milliseconds)
const convertDateToMilliSecond = (data)=>{
    var myDate = data.split("-");
    var newDateWithMs = new Date(Number(myDate[0]), Number(myDate[1] - 1), Number(myDate[2]));
    return newDateWithMs.getTime();
};


/***/ })

};
;