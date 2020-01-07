import React, { useState } from "react";
import styles from "./index.module.css";

const minWidth = 150;
const maxWidth = 600;

export default function WebAppFrame(props) {
    const [ sideWidth, setSideWidth ] = useState(300);
    const [ resizeActive, setResizeActive ] = useState(false);
    const [ offset, setOffset ] = useState(0);
    return (
        <div
            className={styles.frame}
            onMouseUp={() => {
                setOffset(0);
                setResizeActive(false); 
            }}
            onMouseMove={evt => {
                if (!resizeActive) return;
                const diff = evt.screenX - offset;
                let width = sideWidth + diff;
                if (width > maxWidth) width = maxWidth;
                if (width < minWidth) width = minWidth;
                setSideWidth(width);
                setOffset(evt.screenX);  
            }}
        >
            <div className={styles.header}>{props.header}</div>
            <div className={styles.content}>
                <div className={styles.side} style={{ width: sideWidth }}>
                    <div className={styles.sideMain}>
                        {props.side}
                    </div>
                    <div
                        className={styles.sideBar}
                        onMouseDown={evt => {
                            setResizeActive(true);
                            setOffset(evt.screenX); 
                        }}
                    ></div>
                </div>
                <div className={styles.main}>{props.children}</div>
            </div>
            <div className={styles.footer}>{props.footer}</div>
        </div>
    );
}
