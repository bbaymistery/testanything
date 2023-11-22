"use strict";
exports.id = 8348;
exports.ids = [8348];
exports.modules = {

/***/ 8348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A3": () => (/* binding */ SET_SELECT_ACTIVE_LINK),
/* harmony export */   "Cz": () => (/* binding */ FETCH_LOCATIONS_REQUEST),
/* harmony export */   "DH": () => (/* binding */ GET_BOTH_TOGETHER_ERROR_QUOT),
/* harmony export */   "DR": () => (/* binding */ GET_MEET_POINT),
/* harmony export */   "EY": () => (/* binding */ UPDATE_SELECTED_ITEMS_INPUTS),
/* harmony export */   "II": () => (/* binding */ SET_POST_CODE_ADRESSES),
/* harmony export */   "Ke": () => (/* binding */ SET_ERROR_IN_RETURN_DETAILS_PAGE),
/* harmony export */   "NW": () => (/* binding */ GET_BOTH_TOGETHER_QUOT_REQUEST),
/* harmony export */   "OT": () => (/* binding */ CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE),
/* harmony export */   "OY": () => (/* binding */ UPDATE_SPECIAL_REQUEST),
/* harmony export */   "QI": () => (/* binding */ SWITCH_JOURNEY),
/* harmony export */   "RO": () => (/* binding */ GET_BOTH_TOGETHER_QUOTATIONS),
/* harmony export */   "Sr": () => (/* binding */ GET_PAYMENT_DATA),
/* harmony export */   "Su": () => (/* binding */ SET_HOUR_AND_MINUTE),
/* harmony export */   "UE": () => (/* binding */ SET_PAYMENT),
/* harmony export */   "Y4": () => (/* binding */ GET_APP_DATA),
/* harmony export */   "YM": () => (/* binding */ SET_DATE_TIME),
/* harmony export */   "Ys": () => (/* binding */ SET_ERROR_INSIDE_HEROR_CONTENT),
/* harmony export */   "Z": () => (/* binding */ RESET_INPUT_LOADINGS),
/* harmony export */   "Z3": () => (/* binding */ ADD_ITEM_TO_SELECTED_LIST),
/* harmony export */   "bz": () => (/* binding */ SET_QUOTATION),
/* harmony export */   "eS": () => (/* binding */ GET_TRANSFER_QUOT_REQUEST),
/* harmony export */   "kE": () => (/* binding */ UPDATE_PASSNEGER_DETAILS),
/* harmony export */   "pB": () => (/* binding */ DELETE_ITEM_FROM_SELECTED_LIST),
/* harmony export */   "pN": () => (/* binding */ FETCH_LOCATIONS_SUCCESS),
/* harmony export */   "p_": () => (/* binding */ GET_TRANSFER_QUOTATIONS),
/* harmony export */   "rZ": () => (/* binding */ FETCH_LOCATIONS_FAILURE),
/* harmony export */   "rt": () => (/* binding */ CHECKED_INPUT_FOR_RETURN),
/* harmony export */   "ti": () => (/* binding */ RESET_FORM),
/* harmony export */   "w7": () => (/* binding */ GET_QUOT_TRANSFER_ERROR),
/* harmony export */   "xx": () => (/* binding */ SET_ERROR_IN_TRANSFER_DETAILS_PAGE)
/* harmony export */ });
//
//? ******************* start update and giving error of passenger details
//passenger details
// export const UPDATE_PASSENGER_DETAILS_FOR_BOTH_JOURNEY =
//   "UPDATE_PASSENGER_DETAILS_FOR_BOTH_JOURNEY";//oteki projede check buton koydugumuzdan bunu kullandik
// export const SET_ERROR_FOR_PASSENGER_DETAILS =
//   "SET_ERROR_FOR_PASSENGER_DETAILS"; //yeni projede hepsini handle inputsla heel etdik
//! ******************* end of update and giving   error of passenger details
//*****************************************************************
//FETCHING REQUEST AND GETTING SUGGESTIONS
const FETCH_LOCATIONS_REQUEST = " FETCH_LOCATIONS_REQUEST";
const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
const FETCH_LOCATIONS_FAILURE = "FETCH_LOCATIONS_FAILURE";
const GET_TRANSFER_QUOT_REQUEST = "GET_TRANSFER_QUOT_REQUEST";
const GET_TRANSFER_QUOTATIONS = "GET_TRANSFER_QUOTATIONS";
const GET_QUOT_TRANSFER_ERROR = "GET_QUOT_TRANSFER_ERROR";
const GET_BOTH_TOGETHER_QUOTATIONS = "GET_BOTH_TOGETHER_QUOTATIONS";
const GET_BOTH_TOGETHER_QUOT_REQUEST = "GET_BOTH_TOGETHER_QUOT_REQUEST";
const GET_BOTH_TOGETHER_ERROR_QUOT = "GET_BOTH_TOGETHER_ERROR_QUOT";
//ading _DELETE  item to the list
const ADD_ITEM_TO_SELECTED_LIST = "ADD_ITEM_TO_SELECTED_LIST";
const DELETE_ITEM_FROM_SELECTED_LIST = "DELETE_ITEM_FROM_SELECTED_LIST";
const SET_POST_CODE_ADRESSES = "SET_POST_CODE_ADRESSES";
//getting all app datas which cars   =>    /app/en
const GET_APP_DATA = "GET_APP_DATA";
const GET_PAYMENT_DATA = "GET_PAYMENT_DATA";
//setting datetime hour minute
const SET_DATE_TIME = "SET_DATE_TIME";
const SET_HOUR_AND_MINUTE = "SET_HOUR_AND_MINUTE";
const SET_SELECT_ACTIVE_LINK = "SET_SELECT_ACTIVE_LINK";
const RESET_INPUT_LOADINGS = "RESET_INPUT_LOADINGS"; //BUNU INPUTDA 3 HERF olmuyanda loadingi false elemek ucun yazdik
const SET_ERROR_INSIDE_HEROR_CONTENT = "SET_ERROR_INSIDE_HEROR_CONTENT"; //bunuda egerr add text edende selectedPoint yoxise hero contentde  alert goresenecek
//swithing types of journey
const SWITCH_JOURNEY = "SWITCH_JOURNEY";
//get meeting point
const GET_MEET_POINT = "GET_MEET_POINT";
//reset form
const RESET_FORM = "RESET_FORM";
//UPDAT PASS DETAILS
const UPDATE_PASSNEGER_DETAILS = "UPDATE_PASSNEGER_DETAILS";
const UPDATE_SPECIAL_REQUEST = "UPDATE_SPECIAL_REQUEST";
//CHECK INPUT BOX
const CHECKED_INPUT_FOR_RETURN = "CHECKED_INPUT_FOR_RETURN";
//flightdetails faln onlari udpdate elyrk
const UPDATE_SELECTED_ITEMS_INPUTS = "UPDATE_SELECTED_ITEMS_INPUTS";
//FOR  TRANSFER DETAILS PAGE selected items(IT IS NEW one which i handled  objectDetailsForHandling   )
const SET_ERROR_IN_TRANSFER_DETAILS_PAGE = "SET_ERROR_IN_TRANSFER_DETAILS_PAGE";
const SET_ERROR_IN_RETURN_DETAILS_PAGE = "SET_ERROR_IN_RETURN_DETAILS_PAGE";
//! ******************* end of update and giving error of selected items on transfer page details
const CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE = "CHECK_JOURNEY_DETAILS_TO_GO_NEXT_PAGE";
//?payment start
const SET_PAYMENT = "SET_PAYMENT";
//!payment finish
//click to
const SET_QUOTATION = "SET_QUOTATION"; //CATEGORYiD AND PAYMENT pRICE arranging


/***/ })

};
;