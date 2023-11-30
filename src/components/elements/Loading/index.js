import React from 'react'
import styles from "./styles.module.scss"
const Loading = () => {
    return (
        <div className={styles.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loading