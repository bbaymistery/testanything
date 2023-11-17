import React from 'react'
import styles from "./resultBox.module.scss";
import Image from 'next/image';
import LoadingInput from '../LoadingInput';
import dynamic from "next/dynamic";
const HandleSearchResults = dynamic(() => import("../HandleSearchResults"))

const ResultBox = ({ showInputFieldPickUpIndex, index, internalState, pickInputsUpValue, loadingPickUpOneWay, setFocusToInput, onchangeHandler, closeModal }) => {
    return (
        <div className={`${styles.result_box} `} >
            {showInputFieldPickUpIndex === index && (
                <div className={`${styles['search-input-container']} ${styles.search_box}`} f={String(internalState[`pickup-search-focus-${index}`])} id="content">
                    <div className={styles.popup_header} f={String(internalState[`pickup-search-focus-${index}`])}>
                        <i onClick={(e) => closeModal({ index, destination: "pickup" })}>
                            <Image src={"/icons/xmark.svg"} alt="xmark" width={16} height={16} />
                        </i>
                        <p>From ?</p>
                    </div>

                    <div className={styles.search_box_input_div}>
                        <input
                            id="input_focused"
                            autoFocus
                            type="text"
                            value={pickInputsUpValue[index].value}
                            name="pickupOneway"
                            onChange={(e) => onchangeHandler(e, index, 0, 0)}
                            onFocus={e => setFocusToInput({ e, destination: "pickup", index })}
                            f={String(internalState[`pickup-search-focus-${index}`])} //giving a style if we focused
                        />
                        <i >
                            <Image src={"/icons/magnifying-glass.svg"} alt="magnifying-glass" width={13} height={13} />
                        </i>
                        {loadingPickUpOneWay && (<div className={styles.loading_div}> <LoadingInput /></div>)}
                    </div>
                    {pickInputsUpValue[index].value.length <= 2 && (<p className={styles.explanation}>  Please write Airpot ,Hotel or Full Post Code  </p>)}

                    {pickInputsUpValue[index].value.length > 2 && !loadingPickUpOneWay && (<HandleSearchResults pickOrDrop={"pickupPoints"} journeyType={0} indexOfInputField={index} />)}
                </div>
            )}
        </div>
    )
}

export default ResultBox