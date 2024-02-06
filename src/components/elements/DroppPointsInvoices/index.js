import React from "react";
import styles from "../PickUpPointsInvoices/styles.module.scss";
const DropOffPointsInvoices = ({ drops }) => {
  return (
    <div className={styles.details}>
      <div className={styles.details_headerr_li}>
        <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
        <p>Drop off Location :</p>
      </div>

      {drops?.map((point, i) => {
        return (
          <div className={styles.details_bottom_container} key={i}>
            <div className={styles.details_bottom}>
              <i className="fa-solid fa-check"></i>

              <span className={styles.desc}>{point.address}</span>
            </div>
            {/*  //! for flight  */}
            {point?.flightDetails?.flightNumber && (
              <div className={styles.details_bottom_description}>
                <i className="fa-solid fa-circle-dot"></i>
                <div className={styles.bottom_main_desc}>
                  <span>Fligth Number:</span>{" "}
                  <span>{point?.flightDetails?.flightNumber}</span>
                </div>
              </div>
            )}
            {point?.postCodeDetails?.postCodeAddress && (
              <div className={styles.details_bottom_description}>
                <i className="fa-solid fa-circle-dot"></i>
                <div className={styles.bottom_main_desc}>
                  <span>Postcode Address:</span>{" "}
                  <span>{point?.postCodeDetails?.postCodeAddress}</span>
                </div>
              </div>
            )}

            {/* //!for cruise  */}

            {point?.cruiseNumber && (
              <div className={styles.details_bottom_description}>
                <i className="fa-solid fa-circle-dot"></i>
                <div className={styles.bottom_main_desc}>
                  <span>Cruise Name:</span> <span>{point?.cruiseNumber}</span>
                </div>
              </div>
            )}

            {/* //!for train */}
            {point?.trainNumber && (
              <div className={styles.details_bottom_description}>
                <i className="fa-solid fa-circle-dot"></i>
                <div className={styles.bottom_main_desc}>
                  <span>Train Number:</span> <span>{point?.trainNumber}</span>
                </div>
              </div>
            )}

            {/* //!for hotel  */}
            {/* {point?.roomNumber && (
              <div className={styles.details_bottom_description}>
                <i className="fa-solid fa-circle-dot"></i>
                <div className={styles.bottom_main_desc}>
                  <span>Address Description:</span>{" "}
                  <span>{point?.roomNumber}</span>
                </div>
              </div>
            )} */}

            {/* //!place of interest */}
            {point?.pcatId === 7 && point?.["address-description"] && (
              <div className={styles.details_bottom_description}>
                <i className="fa-solid fa-circle-dot"></i>
                <div className={styles.bottom_main_desc}>
                  <span>Places of Interest:</span>{" "}
                  <span>{point?.["address-description"]}</span>
                </div>
              </div>
            )}

            {/* //! cities*/}
            {point?.pcatId === 8 && point?.["address-description"] && (
              <div className={styles.details_bottom_description}>
                <i className="fa-solid fa-circle-dot"></i>
                <div className={styles.bottom_main_desc}>
                  <span>Cities:</span>{" "}
                  <span>{point?.["address-description"]}</span>
                </div>
              </div>
            )}
            {/* UNIVERSITIES */}
            {point?.pcatId === 9 && point?.["address-description"] && (
              <div className={styles.details_bottom_description}>
                <i className="fa-solid fa-circle-dot"></i>
                <div className={styles.bottom_main_desc}>
                  <span>Universities And Colleges:</span>{" "}
                  <span>{point?.["address-description"]}</span>
                </div>
              </div>
            )}

            {/* OTHERRRRRRR */}
            {point?.pcatId === 10 && point?.["address-description"] && (
              <div className={styles.details_bottom_description}>
                <i className="fa-solid fa-circle-dot"></i>
                <div className={styles.bottom_main_desc}>
                  <span>Description:</span>{" "}
                  <span>{point?.["address-description"]}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DropOffPointsInvoices;
