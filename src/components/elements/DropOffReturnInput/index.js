import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { substrText } from "../../../helpers/substr";
import {
  quotationsDroppOffReturn,
  returnDropOffPointsReturn,
  selectPickUpDropOffReducer,
} from "../../../store/pickUpDropOffReducer/pickUpDropSelectors";
import { SET_ERROR_INSIDE_HEROR_CONTENT } from "../../../store/pickUpDropOffReducer/pickUpDropTypes";
import { returnShowInputDropField } from "../../../store/showFieldReducer/showFieldSelectors";
import {
  SET_SHOW_DROP_FIELD_RETURN,
  SET_SHOW_PICK_FIELD_RETURN,
} from "../../../store/showFieldReducer/showFieldTypes";
import HandleSearchResults from "../HandleSearchResults";
import LoadingInput from "../LoadingInput";
import styles from "../PickUpOneWayInput/styles.module.scss";
import {
  collectPickUpPoints,
  deleteItemFromList,
} from "../../../store/pickUpDropOffReducer/pickUpDropAction";
import { useWindowSize } from "../../../hooks/useWindowSize";
import env from "../../../resources/env";
import Image from "next/image";
const DropOffReturnInput = ({ dropInputsOffValueReturn, setDropInputsOffValueReturn, setInternalState, internalState }) => {
  const dispatch = useDispatch();
  const selectedPickupDropPoints = useSelector(returnDropOffPointsReturn);
  const { loadingDropOffReturn, appData } = useSelector(
    selectPickUpDropOffReducer
  );
  const droppPoints = useSelector(quotationsDroppOffReturn);
  const showInputFieldDroppIndex = useSelector(returnShowInputDropField);
  const [droppCounts, setDroppCounts] = useState([0]);
  // const [dropInputsOffValueReturn, setDropInputsOffValueReturn] = useState([
  //   { index: 0, value: "", errorMessage: "", havePoint: false },
  // ]);
  const imageObjects = appData?.pointTypeCategories?.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: item.image,
    }),
    {}
  );
  const onchangeHandler = (e, indexOfInput, pickOrDropp, journeyType) => {
    //collecting suggestion if input value more than 2 letter
    let value = e.target.value;
    if (value.includes('"') || value.includes(`'`) || value.includes('/') || value.includes('\\')) {
      return
    }
    setDropInputsOffValueReturn((prev) =>
      prev.map((item) =>
        item?.index === indexOfInput ? { ...item, value } : item
      )
    );
    if (e.target.value.length > 2) {
      dispatch(collectPickUpPoints(e.target.value, pickOrDropp, journeyType));
    }
    //if input value less than 3 letter it will clean  previous data
    // if (e.target.value.length === 2) dispatch({ type: RESET_INPUT_LOADINGS });
  };

  const handleDropOfField = (index) => {
    if (typeof showInputFieldDroppIndex === "number") {
      dispatch({ type: SET_SHOW_DROP_FIELD_RETURN, payload: null });
      return;
    }
    // console.log(index);
    // console.log(dropInputsOffValueReturn[index]);
    // console.log(pikUpPoints);=>baslangcda bir objedir sonrasi ucun ise butun lhr yazilan pointler
    //diyelim ki lhr yazdk results geldi Yazilan inut boxdan cxb basga yere tikliyib gelib yene yazilana geldigimizde asagidaki fonksyon inputun valuesunu siler

    dispatch({ type: SET_SHOW_DROP_FIELD_RETURN, payload: index });
    dispatch({ type: SET_SHOW_PICK_FIELD_RETURN, payload: null });
    if (droppPoints) {
      setDropInputsOffValueReturn((prev) =>
        prev.map((item) =>
          item?.index === index ? { ...item, value: "" } : item
        )
      );
    }
  };

  const addExtraPickPoint = (pickUpItem) => {
    // console.log(pickUpItem);
    //whenever i add item to redux I change havePoint true
    if (dropInputsOffValueReturn[pickUpItem].havePoint) {
      setDroppCounts((prev) => [...prev, pickUpItem + 1]);
      setDropInputsOffValueReturn([
        ...dropInputsOffValueReturn,
        {
          index: dropInputsOffValueReturn.length,
          value: "",
          errorMessage: "",
          havePoint: false,
          checkInQuotation: false,
        },
      ]);
    } else {
      //handling errors
      setDropInputsOffValueReturn((prev) =>
        prev.map((item) =>
          item?.index === pickUpItem
            ? { ...item, errorMessage: "required" }
            : item
        )
      );
      dispatch({ type: SET_ERROR_INSIDE_HEROR_CONTENT, payload: true });
      setTimeout(() => {
        dispatch({ type: SET_ERROR_INSIDE_HEROR_CONTENT, payload: false });
      }, 3500);
    }
  };
  const deleteInputField = (e, index) => {
    // setDroppCounts((prev) => prev.filter((it) => it !== index));
    let newPcikUpcounts = [...droppCounts];
    let deletedPickUpCountIndex = newPcikUpcounts.indexOf(droppCounts[index]);
    newPcikUpcounts?.splice(deletedPickUpCountIndex, 1);
    setDroppCounts(newPcikUpcounts);

    let newInp = [...dropInputsOffValueReturn];
    let deletedInputField = newInp.indexOf(dropInputsOffValueReturn[index]);
    newInp?.splice(deletedInputField, 1);
    setDropInputsOffValueReturn(newInp);

    //check edirik Eger indexi1 bir olanin adresi varsa Cunki ilk eklenen inputfield icerigi bos olur
    dispatch(deleteItemFromList(1, 1, index));
    //BIRINCI SIFIR INDEX  PICK UP MI DROPMU ANLAMINDADI
    //IKINCI SIFIR >JOURNEY TYPE
    //INDEXOFCURRENTiTEM
  };
  let size = useWindowSize()
  let { width } = size
  const closeModal = (params = {}) => {
    if (width < 990) {

      let { index, destination } = params
      let inputField = document.getElementById("input_focused")
      inputField.style.opacity = 1
      setInternalState({ [`${destination}-search-focus-${index}`]: false })
      let navbarElement = document.querySelector("#navbar_container")
      navbarElement.style.display = "flex"

    }

  }
  const setFocusToInput = (params = {}) => {
    if (width < 990) {
      let { e, destination, index } = params
      console.log(e.target);

      e.target.style.opacity = 0
      let navbarElement = document.querySelector("#navbar_container")
      navbarElement.style.display = "none"
      setInternalState({ [`${destination}-search-focus-${index}`]: window.innerWidth > 990 ? false : true })
      const container = document?.querySelector("#content");

      e.target.style.opacity = 1
      setTimeout(() => {
        window.scroll({
          top: container,
          left: 0,
          behavior: "smooth",
        });
      }, 100);

    }
  }
  useEffect(() => {
    selectedPickupDropPoints.map((selectedItem, index) => {
      // yani eger burda  secilen itemin indexi ile bizim nput valunun indexi eynidirse Ozaman have pointi true edirik
      setDropInputsOffValueReturn((prev) =>
        prev.map((item) =>
          item?.index === index
            ? {
              ...item,
              havePoint: true,
              errorMessage: "",
              checkInQuotation: false,
            }
            : item
        )
      );
    });
  }, [selectedPickupDropPoints]);
  // console.log(selectedPickupDropPoints, "selectedPickupDropPoints");

  // console.log(droppCounts, "droppCounts");

  useEffect(() => {
    let a = [];
    let newInputs = [];
    let lengthOfPoint = selectedPickupDropPoints.length;
    if (lengthOfPoint > 1) {
      for (let i = 0; i < lengthOfPoint; i++) {
        a.push(i);
        newInputs.push({
          index: i,
          errorMessage: "",
          havePoint: true,
          checkInQuotation: false,
        });
      }
      setDroppCounts(a);
      setDropInputsOffValueReturn(newInputs);
    }
  }, [selectedPickupDropPoints]);
  return (
    <div className={styles.pickup_points}>
      {/* bos olan  */}
      {droppCounts.map((pickUpItem, index) => {
        return (
          <div key={pickUpItem} className={styles.inp_container}>
            {selectedPickupDropPoints[index]?.address && (
              <div className={styles.tooltip_container}>
                <div className={styles.tooltip}>
                  {selectedPickupDropPoints[index]?.address}
                </div>
              </div>
            )}
            <div className={styles.input_div}>
              <p className={styles.input_div_title}>
                <span>
                  {selectedPickupDropPoints[index]?.address && (
                    <i >
                      <Image src={"/icons/check.svg"} alt="check" width={12} height={12} />
                    </i>
                  )}
                  Drop Off Location {droppCounts.length > 1 && index + 1}
                </span>
                {!selectedPickupDropPoints[index]?.address &&
                  dropInputsOffValueReturn[index]?.checkInQuotation ? (
                  <span className="error">required</span>
                ) : (
                  ""
                )}
              </p>
              <div className={styles.input_div_display_box}>
                <div
                  onClick={() => handleDropOfField(index)}
                  className={`${styles.display_box_text}
                  ${dropInputsOffValueReturn[pickUpItem]?.errorMessage.length >
                      0
                      ? "required"
                      : ""
                    }
                     ${!selectedPickupDropPoints[index]?.address &&
                      dropInputsOffValueReturn[index]?.checkInQuotation
                      ? "required"
                      : ""
                    }

                  `}
                >
                  {imageObjects && selectedPickupDropPoints[index]?.address && (
                    <img
                      className={styles.left_icon}
                      src={`${env.apiDomain}${imageObjects[selectedPickupDropPoints[index]?.pcatId]
                        }`}
                      alt={selectedPickupDropPoints[index]?.address}
                    />
                  )}
                  <p>
                    {selectedPickupDropPoints[index]?.address
                      ? substrText(selectedPickupDropPoints[index]?.address)
                      : "Airport,Hotelor Full Cost Code .."}{" "}
                  </p>
                  {showInputFieldDroppIndex === index ? (
                    <i >
                      <Image src={"/icons/angle-up.svg"} alt="angle-up" width={16} height={16} />
                    </i>
                  ) : (
                    <i >
                      <Image src={"/icons/angle-down.svg"} alt="angle-down" width={16} height={16} />
                    </i>
                  )}
                </div>
                {pickUpItem !== 0 && (
                  <i onClick={(e) => deleteInputField(e, index)} className={`${styles.trash_icon}`} >
                    <Image src={"/icons/trash-can.svg"} alt="trash-can" width={14} height={14} />
                  </i>
                )}
              </div>
            </div>
            <div className={styles.result_box}>

              {showInputFieldDroppIndex === index && (
                <div className={`${styles['search-input-container']} ${styles.search_box}`} f={String(internalState[`dropoff-search-focus-1`])} id="content">
                  <div className={styles.popup_header} f={String(internalState[`dropoff-search-focus-1`])}>
                    <i onClick={(e) => closeModal({ index, destination: "dropoff" })}>
                      <Image src={"/icons/xmark.svg"} alt="xmark" width={16} height={16} />
                    </i>
                    <p>Where ?</p>
                  </div>
                  <div className={styles.search_box_input_div}>
                    <input
                      autoFocus
                      id="input_focused"
                      type="text"
                      value={dropInputsOffValueReturn[index].value}
                      onFocus={e => setFocusToInput({ e, destination: "dropoff", index: 1 })}
                      name="pickupReturn"
                      onChange={(e) => onchangeHandler(e, index, 1, 1)}
                      f={String(internalState[`dropoff-search-focus-1`])} //giving a style if we focused

                    />
                    <i >
                      <Image src={"/icons/magnifying-glass.svg"} alt="magnifying-glass" width={13} height={13} />
                    </i>
                    {loadingDropOffReturn && (
                      <div className={styles.loading_div}>
                        <LoadingInput />
                      </div>
                    )}
                  </div>
                  {dropInputsOffValueReturn[index].value.length <= 2 && (
                    <p className={styles.explanation}>
                      Please write Airpot ,Hotel or Full Post Code
                    </p>
                  )}

                  {dropInputsOffValueReturn[index].value.length > 2 &&
                    !loadingDropOffReturn && (
                      <HandleSearchResults
                        pickOrDrop={"dropoffPoints"}
                        journeyType={1}
                        indexOfInputField={index}
                      />
                    )}
                </div>
              )}
            </div>
            {index + 1 === droppCounts.length && (
              <div className={styles.add_extrafly_div} onClick={() => addExtraPickPoint(pickUpItem)}   >
                <i className={` ${styles.add_extrafly_div_icon}`}>
                  <Image src={"/icons/plus.svg"} alt="fa-plus" width={13} height={13} />
                </i>
                Add Extra Pick-up Point
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DropOffReturnInput;
