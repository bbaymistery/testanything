import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import env from '../../../resources/env'
import { quotationImagesObj } from '../../../constants/quotationImages'

const CarInfo = (props) => {
    let { index, quotation, splitedDate, splitedHour, splitedMinute, } = props
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { params: { quotations, direction } } = state
    const { appData } = useSelector(state => state.initialReducer)
    //cartypes object for card item as {1:{image:'sds, name:Economy}}
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});


    return (
        <div className={styles.car_info} direction={String(direction === 'rtl')}>
            <h3>{index === 0 ? "Booking Details" : "Return Journey Booking Details"}</h3>
            <div className={styles.sections}>
                <div className={`${styles.section} ${styles.first_column}`}>
                    <div className={styles.img_div}>
                        <img src={`${env.apiDomain}${quotationImagesObj[quotation?.carId]?.image}`} alt="" />
                    </div>
                    <div className={styles.description}>
                        <div className={styles.text_1}>You selected</div>
                        <div className={styles.text_2} style={{ textTransform: 'capitalize' }}>
                            {carObject[quotation.carId]?.name}
                            {/*  _ {carObject[quotation.carId]?.transferType} */}
                            {/* <div className={styles.car_name_icons}>
                                <span>{carObject[quotation.carId]?.suitcases} <i className="fa-solid fa-suitcase"></i></span>
                                <span>{carObject[quotation.carId]?.pax} <i className="fa-solid fa-user"></i></span>
                            </div> */}
                        </div>
                    </div>


                </div>
                <div className={`${styles.section} ${styles.second_column}`}>
                    <div className={styles.description}>
                        <p className={styles.text_1}>Max Capacity</p>
                        <p className={styles.text_2}>
                            <span> {`${carObject[quotation.carId]?.pax} Passenger${carObject[quotation.carId]?.pax === 1 ? "" : "s"}`}</span>
                            <br />
                            <span> {`${carObject[quotation.carId]?.suitcases} Suitcase${carObject[quotation.carId]?.suitcases === 1 ? "" : "s"}`}</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.section} ${styles.fourth_column}`}>
                    <div className={styles.description}>
                        <p className={styles.text_1}>Date</p>
                        <p className={styles.text_2}>
                            {<span>
                                {direction === 'rtl'
                                    ? `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}`
                                    : `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`}
                            </span>}
                        </p>

                    </div>

                </div>
                <div className={`${styles.section} ${styles.third_column}`}>
                    <div className={styles.description}>
                        <p className={styles.text_1}>Time</p>
                        <p className={styles.text_2}> {`${splitedHour}:${splitedMinute}`}</p>
                    </div>
                </div>


                <div className={`${styles.section} ${styles.fifth_column}`}>
                    <div className={styles.description}>
                        <p className={styles.text_1}>{appData?.words["strPriceTitle"]}</p>
                        <p className={styles.text_2}>
                            £ {quotation.price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarInfo