import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image.js";

const CarIcon = () => {
  return (
    <div className={styles.carIcon}>
      <ul className={styles.section_tab}>
        <li className={styles.navItem}>
          {/* aria-label kullanarak ikonun bağlantı metnini ekleyin */}
          <a href="/" className={styles.navLink} aria-label="Transfer Search">
            {/* İkon için alternatif metin olarak title kullanılıyor */}
            <i className={`fa-solid fa-car-rear ${styles.icon}`} title="Car Icon"     >
              <Image src={"/icons/car-rear.svg"} alt="car-rear" width={16} height={16} />
            </i>
            <span> Transfer Search</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CarIcon;
