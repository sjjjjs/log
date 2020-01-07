import React, { useState } from "react";
import styles from "./index.module.css";

const minWidth = 150;
const maxWidth = 600;
const cachedWidth = Number(localStorage.getItem('sideWidth'));
const defaultWidth = (!isNaN(cachedWidth) && cachedWidth <= maxWidth && cachedWidth >= minWidth) ? cachedWidth : 300;

const cacheKey = 'APP_SIDE_WIDTH';
function getSideWidthCache () {
    const value = Number(window.localStorage.getItem(cacheKey));
    if (isNaN(value)) {
        removeSideWidthCache();
        return null;
    } else if (value > maxWidth) {
        setSideWidthCache(maxWidth);
        return maxWidth;
    } else if (value < minWidth) {
        setSideWidthCache(minWidth);
        return minWidth;
    } else {
        return value;
    }
};
function setSideWidthCache (value) {
    if (isNaN(value)) {
        removeSideWidthCache();
        return null;
    } else if (value > maxWidth) {
        setSideWidthCache(maxWidth);
        return maxWidth;
    } else if (value < minWidth) {
        setSideWidthCache(minWidth);
        return minWidth;
    } else {
        setSideWidthCache(value);
        return value;
    }
};
function removeSideWidthCache() {
    window.localStorage.removeItem(cacheKey);
}

export default function WebAppFrame(props) {
    const [ sideWidth, setSideWidth ] = useState(defaultWidth);
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
