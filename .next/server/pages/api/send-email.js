"use strict";
(() => {
var exports = {};
exports.id = 4957;
exports.ids = [4957];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 5415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _resources_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1986);

let nodemailer = __webpack_require__(5184);
const getmettingPoint = (point, callback = ()=>{})=>{
    const url = `${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/drivers/meet-point`;
    let reqOptions = {
        method: "POST",
        body: JSON.stringify({
            point: point
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    };
    fetch(url, reqOptions).then((res)=>res.json()).then((res)=>{
        callback(res);
    }).catch((error)=>{
        console.log(error);
    });
};
async function getmettingPointAsync(point) {
    return new Promise((resolve, reject)=>{
        getmettingPoint(point, (log)=>resolve(log));
    });
}
async function handler(req, res) {
    if (req.method === "POST") {
        let pickUpTr = req.body.reservations[0].selectedPickupPoints;
        let pickUpReturn = req.body?.reservations[1]?.selectedPickupPoints;
        let allPickUpss = req.body?.reservations[1]?.selectedPickupPoints ? [
            ...pickUpTr,
            ...pickUpReturn
        ] : [
            ...pickUpTr
        ];
        allPickUpss = allPickUpss.filter((e)=>e.pcatId === 1);
        let log = await getmettingPointAsync(req.body.reservations[0].selectedPickupPoints[0]);
        let meetPoint = log.status === 200 && typeof log.data === "object" ? log.data["meet-point"] : "";
        let template = `
       <div style="float: left;width: 650px;">
           <div style="float: left; width: 650px;">
                                 <p><b>Dear ${req.body.reservations[0]?.passengerDetails?.firstname}</b></p>
                                 <p>Thank you for booking with Heathrow Gatwick Transfers<br></p>
                                 <p style="font-weight:bold;">Things to remember:</p>
                                  <p>
                                      <span style="font-weight:bold;">
                                      Turn on your mobile phone:
                                      </span> Please ensure your mobile is  switched on and working when your journey is about to start - just in case your driver needs to contact you.
                                  </p>
                                  <p>
                                      <span style="font-weight:bold;">Your driver details:</span>
                                       Please
                                       <a href="${_resources_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].websiteDomain */ .Z.websiteDomain}/track-my-taxi" title="Track My Taxi" style="color:#2BA4DA;font-weight:bold;" target="_blank" rel=" noopener noreferrer">
                                           click here
                                       </a>
                                      to see your driver details and live track your taxi shortly before your journey starts.
                                  </p>
                                  ${meetPoint.length > 0 ? ` <p>
                                      <span style="font-weight:bold;">Meeting your driver:</span>

                                       <span>
                                     Our Meeting Point at ${req.body.reservations[0]?.selectedPickupPoints[0]?.address}:
                                       </span>

                                    ${meetPoint}
                                  </p>
                                  ` : ""}
                                      <!--flight.waiting time description-->
                                  ${allPickUpss.map((point)=>{
            return `
                                  ${point?.flightDetails?.waitingPickupTime ? `  <p>
                                        <span style="font-weight:bold;">
                                          Flight delayed? Don't worry:
                                        </span>
                                        We track the flight and adjust your
                                        requested pick-up time accordingly; your
                                        driver will enter the terminal
                                        <span style="font-weight:bold;">
                                          ${point?.flightDetails?.waitingPickupTime}
                                        </span>
                                        minutes after landing. Please check the
                                        'Flight number' below to ensure this is
                                        correct.
                                      </p>` : ""}

                               `;
        })}
                                  <p>
                                      <span style="font-weight:bold;">Booking Details Changed?</span>
                                      If you like to change booking details, including pickup times, please call us on +44 208 683 2330we're here for you 24/7.
                                  </p>

                               <!--    transferrrrrr  -->
                                             <!-- passenger details  startttt-->
                                   <div style="float: left;width: 650px;">
                                      <table width="650" border="1" cellpadding="0" cellspacing="0"
                                          style="border-collapse:collapse;font-size: 12px;">
                                                 <tbody>
                                                       <tr style="width:100%;">
                                                           <th colspan="2" style="background-color:#ed8323;font-size:20px;padding:5px;color:white">
                                                               Passenger
                                                               Details
                                                           </th>
                                                       </tr>
                                                   </tbody>
                                                <tbody>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px;">Reference Number
                                                     </td>
                                                     <td style="padding:2px;padding-left: 3px ;width: 450px !important">${req.body.reservId[0][0]}</td>
                                                 </tr>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px">Lead Passenger Name
                                                     </td>
                                                     <td style="padding:2px;padding-left: 3px;width: 450px !important">${req.body.reservations[0]?.passengerDetails?.firstname} </td>
                                                 </tr>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px">Number of Passengers
                                                     </td>
                                                     <td style="padding:2px;width:450px !important">${req.body.reservations[0]?.transferDetails?.passengersNumber} </td>
                                                 </tr>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                    Contact Number
                                                     </td>
                                                     <td style="padding:2px;padding-left: 3px;width: 450px !important">  ${req.body.reservations[0]?.passengerDetails?.phone}</td>
                                                 </tr>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px">Email Address</td>
                                                     <td style="padding:2px;padding-left: 3px;width: 450px !important"><a href="/compose?To=elgun1993%2d93@bk.ru">${req.body.reservations[0]?.passengerDetails?.email}
                                                     </a>
                                                     </td>
                                                 </tr>
                                             </tbody>
                                      </table>
                                  </div>

<!--transfer pick drop pointssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss -->
                                    <div style="float: left;width: 650px; ">
                                        <table width="650" border="1" class="xtable_mr_css_attr" cellpadding="0" cellspacing="0"
                                            style="border-collapse:collapse;font-size: 12px;margin-top:10px;">
                                               <tbody>
                                                       <tr style="padding:5px;width:100%;background-color:#ed8323;font-size:20px;padding:5px;color:white">
                                                           <th colspan="2">
                                                               Booking Details
                                                           </th>
                                                       </tr>
                                                   </tbody>

                                            <tbody>
                                              ${req.body.reservations[0].selectedPickupPoints.map((point)=>`
                                                  <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                    Pickup Point
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                          ${point.address}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>

                                             ${point?.flightDetails?.flightNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Flight Number
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                              ${point?.flightDetails?.flightNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                            ${point?.flightDetails?.waitingPickupTime ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Requested Pickup Time
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.flightDetails?.waitingPickupTime}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                                ${point?.postCodeDetails?.postCodeAddress ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Postcode Address:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.postCodeDetails?.postCodeAddress}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                                ${point?.roomNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Address Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.roomNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${point?.cruiseNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Cruise Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.cruiseNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.trainNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Train Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.trainNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.pcatId === 8 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Cities:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${point?.pcatId === 9 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Universities And Colleges:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.pcatId === 10 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                         Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}



                                                `)}


                                              ${req.body.reservations[0].selectedDropoffPoints.map((point)=>`
                                                  <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Dropoff Point
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                          ${point.address}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>

                                             ${point?.flightDetails?.flightNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Flight Number
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                              ${point?.flightDetails?.flightNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                            ${point?.flightDetails?.waitingPickupTime > 0 ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Requested Pickup Time
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.flightDetails?.waitingPickupTime}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                                ${point?.postCodeDetails?.postCodeAddress ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Postcode Address:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.postCodeDetails?.postCodeAddress}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                                ${point?.roomNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Address Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.roomNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${point?.cruiseNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Cruise Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.cruiseNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.trainNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Train Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.trainNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.pcatId === 8 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Cities:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${point?.pcatId === 9 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Universities And Colleges:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.pcatId === 10 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                         Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}



                                                `)}



                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">${req.body.reservations[0].selectedPickupPoints[0]?.pcatId === 1 ? "Flight" : ""} Landing Date and Time</td>
                                                      <td style="padding:2px"><span>
                                                    ${req.body.reservations[0].transferDetails?.transferDateTimeString.split(" ")[0]}

                                                    ${req.body.reservations[0].transferDetails?.transferDateTimeString.split(" ")[1]}
                                                    </span></td>
                                                </tr>

                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important; padding:2px 3px;">Vehicle Type</td>
                                                       <td style="padding:2px">${req.body.vehicleTypes[0]}</td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Transfer Type</td>
                                                    <td style="padding:2px">
                                                    ${req.body.transferTypes[0]}
                                                    </td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Special Requests</td>
                                                    <td style="min-height: 29px;padding:2px">${req.body.reservations[0].transferDetails?.specialRequests}</td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Journey Price</td>
                                                     <td style="padding:2px">
                                                    GBP ${req.body?.reservations[0].quotation?.price} </td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Payment Method</td>
                                                    <td style="padding:2px">
                                                     ${req.body.reservations[0].paymentDetails?.paymentType === 1 ? "Pay With Cash To Driver" : ""}
                                           ${req.body.reservations[0].paymentDetails?.paymentType === 2 ? "Pay With Credit Card" : ""}
                                           ${req.body.reservations[0].paymentDetails?.paymentType === 6 ? "Pay With American Express" : ""}
                                           ${req.body.reservations[0].paymentDetails?.paymentType === 7 ? "Pay With Credit Card" : ""}
                                                    </td>
                                                </tr>
                                                      <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Surcharge</td>
                                                     <td style="padding:2px">
                                                    GBP ${req.body?.surcharge ? req.body.surcharge : "0.00"} </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
<!--transfer pick drop pointssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss finishhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh -->




<!--return passenger details -->
${req.body?.reservations[1]?.quotation?.price ? ` <div style="float: left;width: 650px;margin-top:2rem">
      <table
        width="650"
        border="1"
        cellpadding="0"
        cellspacing="0"
        style="border-collapse:collapse;font-size: 12px;"
      >
        <tbody>
          <tr style="width:100%;">
            <th
              colspan="2"
              style="background-color:#ed8323;font-size:20px;padding:5px;color:white"
            >
              Return Passenger Details
            </th>
          </tr>
        </tbody>
        <tbody>
          <tr style="width:100%;">
            <td style="font-weight:bold;width: 200px !important;padding-left: 3px;">
              Reference Number
            </td>
            <td style="padding:2px;padding-left: 3px;width: 450px !important">
              ${req.body.reservId[0][1]}
            </td>
          </tr>
          <tr style="width:100%;">
            <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
              Lead Passenger Name
            </td>
            <td style="padding:2px;padding-left: 3px;;width: 450px !important">
              ${req.body.reservations[1]?.passengerDetails?.firstname}
            </td>
          </tr>
          <tr style="width:100%;">
            <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
              Number of Passengers
            </td>
            <td style="padding:2px;width: 450px !important">
              ${req.body.reservations[1]?.transferDetails?.passengersNumber}
            </td>
          </tr>
          <tr style="width:100%;">
            <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
              Contact Number
            </td>
            <td style="padding:2px;padding-left: 3px;width: 450px !important">

              ${req.body.reservations[1]?.passengerDetails?.phone}
            </td>
          </tr>
          <tr style="width:100%;">
            <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
              Email Address
            </td>
            <td style="padding:2px;padding-left: 3px;width: 450px !important">
              <a href="/compose?To=elgun1993%2d93@bk.ru">
                ${req.body.reservations[1]?.passengerDetails?.email}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>` : ""}


<!--return boookinggg  detailsssssssssss startttttttttttttttttttttttttt -->
${req.body?.reservations[1]?.quotation?.price ? `
   <div style="float: left;width: 650px;">
                                        <table width="650" border="1" class="xtable_mr_css_attr" cellpadding="0" cellspacing="0"
                                            style="border-collapse:collapse;font-size: 12px;margin-top:10px;">
                                               <tbody>
                                                       <tr style="padding:5px;width:100%;background-color:#ed8323;font-size:20px;padding:5px;color:white">
                                                           <th colspan="2">
                                                               Booking Details
                                                           </th>
                                                       </tr>
                                                   </tbody>

                                            <tbody>
                                              ${req.body.reservations[1].selectedPickupPoints.map((point)=>`
                                                  <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                    Pickup Point
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                          ${point.address}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>

                                             ${point?.flightDetails?.flightNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Flight Number
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                              ${point?.flightDetails?.flightNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                            ${point?.flightDetails?.waitingPickupTime ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Requested Pickup Time
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.flightDetails?.waitingPickupTime}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                                ${point?.postCodeDetails?.postCodeAddress ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Postcode Address:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.postCodeDetails?.postCodeAddress}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                                ${point?.roomNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Address Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.roomNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${point?.cruiseNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Cruise Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.cruiseNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.trainNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Train Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.trainNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.pcatId === 8 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Cities:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${point?.pcatId === 9 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Universities And Colleges:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.pcatId === 10 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                         Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}



                                                `)}


                                              ${req.body.reservations[1].selectedDropoffPoints.map((point)=>`
                                                  <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Dropoff Point
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                          ${point.address}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>

                                             ${point?.flightDetails?.flightNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Flight Number
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                              ${point?.flightDetails?.flightNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                            ${point?.flightDetails?.waitingPickupTime > 0 ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Requested Pickup Time
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.flightDetails?.waitingPickupTime}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                                ${point?.postCodeDetails?.postCodeAddress ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Postcode Address:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.postCodeDetails?.postCodeAddress}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                                ${point?.roomNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Address Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.roomNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${point?.cruiseNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Cruise Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.cruiseNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.trainNumber ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Train Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point?.trainNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.pcatId === 8 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Cities:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${point?.pcatId === 9 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Universities And Colleges:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${point?.pcatId === 10 && point?.["address-description"] ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                         Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point?.["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}



                                                `)}



                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">${req.body.reservations[1].selectedPickupPoints[0]?.pcatId === 1 ? "Flight" : ""} Landing Date and Time</td>
                                                      <td style="padding:2px"><span>
                                                    ${req.body.reservations[1].transferDetails?.transferDateTimeString.split(" ")[0]}

                                                    ${req.body.reservations[1].transferDetails?.transferDateTimeString.split(" ")[1]}
                                                    </span></td>
                                                </tr>

                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important; padding:2px 3px;">Vehicle Type</td>
                                                       <td style="padding:2px">${req.body.vehicleTypes[1]}</td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Transfer Type</td>
                                                    <td style="padding:2px">
                                                    ${req.body.transferTypes[1]}
                                                    </td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Special Requests</td>
                                                    <td style="min-height: 29px;padding:2px">${req.body.reservations[1].transferDetails?.specialRequests}</td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Journey Price</td>
                                                     <td style="padding:2px">
                                                    GBP ${req.body?.reservations[1]?.quotation?.price} </td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Payment Method</td>
                                                    <td style="padding:2px">
                                                     ${req.body.reservations[1].paymentDetails?.paymentType === 1 ? "Pay With Cash To Driver" : ""}
                                           ${req.body.reservations[1].paymentDetails?.paymentType === 2 ? "Pay With Credit Card" : ""}
                                           ${req.body.reservations[1].paymentDetails?.paymentType === 6 ? "Pay With American Express" : ""}
                                           ${req.body.reservations[1].paymentDetails?.paymentType === 7 ? "Pay With Credit Card" : ""}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

  ` : ""}












            <!-- return vooking details finish finish-->
                                    <!-- total price  -->
                                        <div style="float:left;width: 650px;font-family:Arial, Helvetica,Verdana sans-serif !important ;color:#666;">
                                               <span style="font-weight: 700;font-size:14px;padding-top:15px;"><br>Total Price : GBP  ${req.body?.reservations[1]?.quotation?.price ? ` ${Number(req?.body.reservations[0]?.quotation?.price) + Number(req?.body?.reservations[1]?.quotation?.price)}` : `${req?.body?.reservations[0]?.quotation?.price}`}

                                               </span>
                                        </div>

                                         <!-- adresss description  -->
                                     <div style="float:left;width: 650px;font-family:Arial, Helvetica,Verdana sans-serif !important ;color:#666;">
                                        <span><br>Heathrow Gatwick Transfers <br>Aero House House,
                                          <br>611  Simpson Road ,
                                           <br>West Drayton,
                                           <br> UB7 0JD,
                                           <br>United Kingdom
                                          <br>Tel: <span class="js-phone-number">+44 208 683 2330</span>,
                                          <br>Website:
                                          <a href="https://www.london-heathrow.taxi" target="_blank">www.london-heathrow.taxi/</a>,
                                          <br>Email enquiries:
                                          <a href="https://www.london-heathrow.taxi" target="_blank" rel="noopener noreferrer">
                                          info@london-heathrow.taxi
                                       </a>
                                     </span>
                                  </div>
           </div>
        </div>
    `;
        const transporter = nodemailer.createTransport({
            name: "mail.plesk-secure.com",
            host: "mail.plesk-secure.com",
            port: 465,
            secure: true,
            auth: {
                user: "info@aplcars.com",
                pass: "Istanbul2021!-"
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const mailData = {
            // from: "info@heathrow-gatwick-transfers.com",
            from: `"London Heathrow Taxi" <info@aplcars.com>`,
            to: req.body.reservations[0]?.passengerDetails?.email,
            subject: `Booking ${req.body.reservId[0][0]} ${req.body.reservId[0][1] ? "and " : ""}     ${req.body.reservId[0][1] ? req.body.reservId[0][1] : ""}  London Heathrow Taxi`,
            html: template
        };
        transporter.sendMail(mailData, function(err, info) {
            if (err) {
                res.status(403).json({
                    status: "ERROR",
                    err,
                    template
                });
                console.log(err);
            } else {
                res.status(200).json({
                    status: "OK",
                    info,
                    template
                });
                console.log(info);
            }
        });
    }
};


/***/ }),

/***/ 1986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isDevelopment = false; // localohst -> true || live -> false
const env = {
    websiteDomain: isDevelopment ? "http://localhost:8000" : "https://london-heathrow.taxi",
    apiDomain: "https://api.london-tech.com",
    status: {
        success: 200,
        error: 403,
        success: 200,
        badRequest: 400,
        unauthorized: 401,
        forbidden: 403,
        methodNotAllowed: 405,
        notAcceptable: 406,
        internalServerError: 500
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (env);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5415));
module.exports = __webpack_exports__;

})();