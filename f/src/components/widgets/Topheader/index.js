import React from "react";

import styles from "./styles.module.scss";
const TopHeader = () => {
  return (
    <div className={styles.top_header}>
      {/* //*Start top header */}
      <div className={styles.container}>
        <div className={styles.content}>
          <a href={"/"} className={styles.content_title_a}>
            <h1 className={`${styles.top_header_title} ${styles.h1}`}>
              LONDON - HEATHROW TAXI
            </h1>
          </a>
          <div className={styles.top_header_left}>
            <div className={styles.shop_cart}>
              <span></span>
            </div>
            <div className={styles.phoneNumber}>
              <a href="tel:+442038873844" className={styles.phone_tag}>
                Click to call +442038873844
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* //*finish top header */}
    </div>
  );
};

export default TopHeader;
