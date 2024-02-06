import React from "react";
import { useDispatch } from "react-redux";
import { SET_MODAL_INFO } from "../../../store/pickUpDropOffReducer/pickUpDropTypes";
import styles from "./styles.module.scss";
const InfoModal = ({ content }) => {
  const dispatch = useDispatch();
  const setToFalse = () => {
    // setOpenModalInfo(false);
    dispatch({ type: SET_MODAL_INFO, payload: false });
    document.body.style.overflow = "unset";
  };
  return (
    <div className={` ${styles.modal} `}>
      <div className={`${styles.modal_container}`}>
        <p>{content?.length ? content : null}</p>

        <div className={styles.button_div}>
          <button onClick={setToFalse} className="btn_primary">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
