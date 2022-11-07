import React from 'react'
import styles from "./CareerCard.module.css";

export default function CareerCard({item}) {
    return (
        <div className={`row aling-items-center ${styles.card}`}>
            <div className="col-md-10">
                <div className={styles["title"]}>Project Manager</div>
                <div className={styles["description"]}>Project Manager</div>
            </div>
            <div className="col-md-2 d-flex aling-items-center">
            <div className={styles["apply"]}>Apply</div>
            </div>
        </div>
    )
}
