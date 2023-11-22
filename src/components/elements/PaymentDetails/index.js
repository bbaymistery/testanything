import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import env from "../../../resources/env"

import { useRouter } from "next/router";
import {
  selectArchieveToken,
  selectedJourneyType,
  selectedReturnQuot,
  selectedTransferQuot,
  selectPickUpDropOffReducer,
  transferPassengerEmail,
  transferPassengerPhone,
} from "../../../store/pickUpDropOffReducer/pickUpDropSelectors";
import { setPayment } from "../../../store/pickUpDropOffReducer/pickUpDropAction";
const PaymentDetail = ({ setConfirmation }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { paymentTypes, reservations, cookies } = useSelector(
    selectPickUpDropOffReducer
  );
  const trEmail = useSelector(transferPassengerEmail);
  const trPhone = useSelector(transferPassengerPhone);

  const journeyType = useSelector(selectedJourneyType);
  const selectedArchieveToken = useSelector(selectArchieveToken);

  // console.log(cookies.sessionToken);

  const trQuot = useSelector(selectedTransferQuot);
  const returnQuot = useSelector(selectedReturnQuot);

  const [openedIdPayment, setOpenedIdOfPayment] = useState(""); //iframin acilmasinda bize komeklik edir
  const [dataTokenForWebSocket, setDataTokenForWebSocket] = useState("");
  const [hrefForIframeAmex, setHrefForIframeAmex] = useState("");
  const [iframeStripe, setIframeStripe] = useState("");
  const [urlPaypal, setUrlPaypal] = useState("");
  const [statusToken, setStatusToken] = useState("");

  const fetchArchieveToken = async (params = {}) => {
    let { token, paymentType, stage } = params


    let reservationObj =
      Number(journeyType) === 1 ? reservations : [reservations[0]];
    console.log({ length: reservationObj.length > 1 });

    if (reservationObj.length > 1) {
      reservationObj = [
        {
          ...reservationObj[0],
          paymentDetails: {
            ...reservationObj[0].paymentDetails,
            token: token,
            paymentType: paymentType,
          },
        },
        {
          ...reservationObj[1],
          paymentDetails: {
            ...reservationObj[1].paymentDetails,
            token: token,
            paymentType: paymentType,
          },
        }
      ]
    } else {
      reservationObj = [
        {
          ...reservationObj[0],
          paymentDetails: {
            ...reservationObj[0].paymentDetails,
            token: token,
            paymentType: paymentType,
          },
        },
      ]
    }
    let url = `${env.apiDomain}/api/v1/sessions/add`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ token: selectedArchieveToken, details: reservationObj, stage }),
      headers: { "Content-Type": "application/json", },
    });
    const data = await response.json();

  };
  //sadece paypal icin bunu saxladim
  const openedWindow = (id, openOrClose, data) => {
    if (id === 5) {
      let options = `menubar=no,location=yes,toolbar=no,left=${window.screen.width / 2 - 550 / 2
        },width=550,height=800`;
      let url = data?.href;

      var openedW = window.open(url, "_blank", options);
      if (id === 5) setUrlPaypal(openedW);

      if (!openOrClose) openedW.close();
    }
  };
  //*payment _1_(cash)
  const cashMethod = (id) => {
    if (id === 1) {
      // 2 if it is cash payment you have set payment type first of all then send archive
      fetchArchieveToken({ token: "", paymentType: "", stage: "CLICK_OVER_CASH_BUTTON" })
      dispatch(setPayment(id, "", router));

      // if paypal is opened the close
      if (urlPaypal) urlPaypal?.close();
    }
  };

  const stripeMethod = (id, quotations, passengerEmail, url) => {
    if (!iframeStripe) {
      try {
        if (id === 7) {
          // if it is card payment you have set payment type first of all then send archive then
          fetchArchieveToken({ token: "", paymentType: 7, stage: "CLICK_OVER_CARD_BUTTON" })
          let config = {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
              quotations,
              type: id,
              language: "en",
              passengerEmail,
              "session-id": cookies.sessionToken,
              //  mode: "sandbox",
            }),
          };

          fetch(url, config)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              // setConfirmation(false); //in order to open new window pop up
              setDataTokenForWebSocket(data); //in order to a tag of pop up window
              setStatusToken(data.webSocketToken); //it will trigger interval and will make request
              setHrefForIframeAmex(""); //it is gonna close the iframe, if it is opened
              setIframeStripe(data?.href);
              //if we have opened window with paypal it will be closed
              if (urlPaypal) urlPaypal?.close();
            })
            .catch((error) => { window.handelErrorLogs(error, 'LHT PaymentDetail Component lht- stripeMethod function fetching catch blog  ', { config, url }) });
        }
      } catch (error) { window.handelErrorLogs(error, 'LHT PaymentDetail Component lht - stripeMethod function catch blog ', { id, quotations, passengerEmail, url }) }
    }
  };
  //*triggering payment methods And it  Will activate Cash or Stripe function => ((=>Step 1
  const startPayment = (id) => {
    try {


      setOpenedIdOfPayment(id);
      cashMethod(id);
      //general settings
      const paymentPagePath = JSON.parse(paymentTypes.filter((payment) => payment.id === id)[0].pagePath).path;
      const url = `${env.apiDomain}/${paymentPagePath}`;
      let quotations = journeyType === 0 ? [trQuot] : [trQuot, returnQuot];
      let passengerEmail = trEmail;
      let passengerPhoneNumber = trPhone;

      //methods
      // paypalMethod(id, quotations, passengerEmail, url);
      // americanExpress(id, quotations,passengerEmail,passengerPhoneNumber,url);
      stripeMethod(id, quotations, passengerEmail, url);
    } catch (error) { window.handelErrorLogs(error, 'LHT PaymentDetail Component lht -startPayment function catch blog', { id }) }
  };

  useEffect(() => {
    const url = `${env.apiDomain}/api/v1/payment/status`;
    let interVal;
    if (statusToken) {
      interVal = setInterval(async () => {
        console.log(statusToken + "" + "inside");

        let config = { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ token: statusToken }), };
        try {
          let requ = await fetch(url, config);
          let resp = await requ.json();

          if (resp?.status === 200) {
            console.log(resp);



            if (dataTokenForWebSocket?.href?.includes("paypal")) {
              dispatch(setPayment(5, resp.data.token, router));
              openedWindow(5, false, dataTokenForWebSocket);
              setStatusToken("");
            }

            if (dataTokenForWebSocket?.href?.includes("elavon")) {
              dispatch(setPayment(6, resp.data.token, router));
              setStatusToken("");
            }

            if (dataTokenForWebSocket?.href?.includes("stripe")) {
              //after you get a success payment status and after set a token into paymentDEtails object then send archive
              fetchArchieveToken({ token: resp.data.token, paymentType: 7, stage: "GET_SUCCESS_CARD_PAYMENT" })
              dispatch(setPayment(7, resp.data.token, router));
              setHrefForIframeAmex("");
              setIframeStripe("");
              setStatusToken("");
            } else {
              window.handelErrorLogs("!dataTokenForWebSocket?.href?.includes(stripe)", 'LHT PaymentDetail Component  lht- Useffect statustoken  if payment done successfully but it didnt includes (stipe)', { config, resp })
            }

            clearInterval(interVal);

            /// ....
          }
        } catch (error) {
          console.log(error);
          window.handelErrorLogs(error, 'LHT PaymentDetail Component - useEffect statusToken catch blog  ', { config })
        }
      }, 2000);
    }

    return () => clearInterval(interVal);
  }, [statusToken]);

  return (
    <>
      <div className={`${styles.payment_details}`}>
        <div className={styles.header}>
          <div className={styles.header_top}>
            {
              <h2 className={styles.header_top_title}>
                How would you like to pay ?
              </h2>
            }

            <Link href={"/terms"}>
              <a target="_blank" className={styles.header_top_subtitle}>
                <i className="fa-solid fa-check"></i>
                By proceeding, you agree to our{" "}
                <span>terms and conditions</span>
              </a>
            </Link>
          </div>
          <div className={styles.header_tot_price}>
            <p className={styles.header_tot_price_text}>Total Price</p>
            <span className={styles.header_tot_price_price}>
              £
              {trQuot?.price && returnQuot?.price
                ? Number(trQuot?.price) + Number(returnQuot?.price)
                : Number(trQuot?.price)}
            </span>
          </div>
        </div>

        <div className={styles.payment_list}>
          {hrefForIframeAmex && openedIdPayment === 6 && (
            <iframe
              src={hrefForIframeAmex}
              target="_blank"
              className={styles.iframe}
              frameBorder="0"
              allow="payment"
            ></iframe>
          )}

          {iframeStripe && openedIdPayment === 7 && (
            <iframe
              src={iframeStripe}
              className={styles.iframe}
              frameBorder="0"
              allow="payment"
            ></iframe>
          )}
          <div className={`${styles.items_buttons}`}>
            <div
              title="Pay with Cash to Driver"
              className={` ${styles.item} ${styles.item_1}`}
              onClick={() => startPayment(1)}
            >
              <div className={styles.topleft_circle}> </div>
              <div className={styles.bottomleft_circle}> </div>
              <div className={styles.topright_circle}> </div>
              <div className={styles.bottomright_circle}> </div>
              <p>Pay Cash to Driver </p>
              <img src="/images/cash.png" alt="cash" />
            </div>

            <div
              title="Pay with Stripe"
              className={`${styles.item} ${styles.item_4}`}
              onClick={() => startPayment(7)}
            >
              <div className={styles.topleft_circle}> </div>
              <div className={styles.bottomleft_circle}> </div>
              <div className={styles.topright_circle}> </div>
              <div className={styles.bottomright_circle}> </div>
              <p>Pay by Card </p>
              <img src="/images/vsMaster.jpg" alt="master" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetail;
