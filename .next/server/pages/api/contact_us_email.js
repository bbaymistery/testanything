"use strict";
(() => {
var exports = {};
exports.id = 9637;
exports.ids = [9637];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 7044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
let nodemailer = __webpack_require__(5184);
async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const { message , email , phone , subject , fullname  } = req.body.formValue;
            let htmlTemplate = `

        <div style="float: left;width: 650px;margin-left:5%">
             <div style="float: left; width: 650px;">
              <!--maaaaaaaaaaargin topppppppppppppppppppppppppppppppppp-->
                      <div
                style="float: left;width: 650px;font-family:Arial, Helvetica,Verdana sans-serif !important ;color:#666;margin-top:5rem">
            </div>



          <!-- passenger details  startttt-->
            <div style="float: left;width: 650px;">
                <table width="650" border="1" cellpadding="0" cellspacing="0"
                    style="border-collapse:collapse;font-size: 12px;">
                    <tbody>
                        <tr style="width:100%;">
                            <th colspan="2" style="background-color:#ed8323;font-size:20px;padding:5px;color:white">

                             Contact Info Details
                            </th>
                        </tr>
                    </tbody>
                    <tbody>

                        <tr style="width:100%;">
                            <td style="font-weight:bold;width: 200px !important;padding-left: 3px">Full Name
                            </td>
                            <td style="padding:2px;padding-left: 3px">${fullname}</td>
                        </tr>

                        <tr style="width:100%;">
                            <td style="font-weight:bold;width: 200px !important;padding-left: 3px">Contact Number</td>
                            <td style="padding:2px;padding-left: 3px">${phone} </td>
                        </tr>
                        <tr style="width:100%;">
                            <td style="font-weight:bold;width: 200px !important;padding-left: 3px">Email Address</td>
                            <td style="padding:2px;padding-left: 3px"><a href="">${email}</a>
                            </td>
                        </tr>
                        <tr style="width:100%;">
                            <td style="font-weight:bold;max-width: 200px !important;padding-left: 3px">Note
                            </td>
                            <td style="padding:2px;padding-left: 3px ;max-width: 445px;word-break: break-all;">
                                <a
                                    href="">${message}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- fioooter-->
            <div
                style="float:left;width: 650px;font-family:Arial, Helvetica,Verdana sans-serif !important ;color:#666;">
                <span><br>Heathrow London Taxi
                    <br>Challenge House,
                    <br>611 Sipson Road,
                    <br>West Drayton,
                    <br>UB7 0JD,
                    <br>United Kingdom
                    <br>Tel: <span class="js-phone-number">+44 208 683 2330</span>,
                    <br>Website:
                   <a href="https://www.london-heathrow.taxi" target="_blank">www.london-heathrow.taxi/</a>,
                    <br>Email enquiries:
                    <a href="//e.mail.ru/compose/?mailto=mailto%3ainfo@aplcars.com%3fsubject%3dEnquiries"
                        target="_blank" rel=" noopener noreferrer">
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
                from: `"London Heathrow Taxi" <info@aplcars.com>`,
                to: "info@aplcars.com",
                subject: subject,
                html: htmlTemplate
            };
            await new Promise((resolve, reject)=>{
                transporter.sendMail(mailData, function(err, info) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(info);
                        resolve(info);
                    }
                });
            });
            res.status(200).json({
                status: "OK"
            });
        }
    } catch (error) {
        console.log(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7044));
module.exports = __webpack_exports__;

})();