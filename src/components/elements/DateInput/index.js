import React from "react";
import styles from "./elgun.module.scss";
import TextError from "../TextError";
/**
 * @DateInput { //? value , onChange:function, name:string, title:string, type:string,className:string, min:string,max:string,type:string ,errorMessage:string}
 **/
const DateInput = (props) => {
  let {
    value = "",
    onChange = () => { },
    name = "",
    title = "",
    errorMessage = "",
    className = "",
    min = "",
    max = "",
    type = "",
  } = props;
  return (
    <div className={`${styles.form_control} ${className}}`}>
      <div className={styles.header}>
        <label htmlFor="date_input" className={styles.form_label}>{title}</label>{" "}
        {errorMessage && <TextError errorMessage={errorMessage} />}
      </div>
      <div className={styles.input_div}>
        <input
          min={min}
          max={max}
          name={name}
          type={type}
          id="date_input"
          className={`${styles.inputDate} ${errorMessage ? styles.errorDate : ""
            }`}
          onChange={onChange}
          value={value}
          lang="en"
        />
        <i className={`fa-solid fa-calendar-days ${styles.date_picker_icon}`}></i>
      </div>
    </div>
  );
};

export default DateInput;
