import React from "react";
import styles from "./styles.module.scss";
const NoResult = () => {
  return (
    <ul>
      <li className={styles.no_results}>
        <i className="fas fa-times-circle" aria-hidden="true"></i>
        <p>
          No any result matched <br /> if you want a quotation, try to contact
          with this phone number :{" "}
          <a href="tel: +44 (0) 208 683 2330">+44 (0) 208 683 2330</a>

        </p>
      </li>
    </ul>
  );
};

export default NoResult;
