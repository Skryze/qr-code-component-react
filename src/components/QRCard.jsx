import React from "react"
import qrcode from "../Assets/image-qr-code.png"
import classes from "./QRCard.module.css"

export const QRCard = () => {
    return (
        <>
            <div className={classes.container}>
                <img className={classes.image} src={qrcode} alt="QR-Code"/>
                <h2>Improve your front-end skills by building projects</h2>
                <p className={classes.paragraph}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </>
    )
}