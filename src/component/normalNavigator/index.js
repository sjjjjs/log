
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Navbar, Button, Popover, Position
} from '@blueprintjs/core';
import { DatePicker } from '@blueprintjs/datetime';
import getUrlUtil from 'util/getUrlUtil';
import styles from './index.module.css';
import dayjs from 'dayjs';

export default function NormalNavigator(props) {
    const { actions = null } = props;
    const h = useHistory();
    return (
        <Navbar fixedToTop style={{ userSelect: 'none'}}>
            <div className={styles.container}>
                <Navbar.Group align="left">
                    <Button minimal text="Home" onClick={() => {
                        h.push(getUrlUtil.getHome());
                    }} />
                    <Popover minimal content={
                        <DatePicker
                            showActionsBar
                            shortcuts
                            highlightCurrentDay
                            onChange={evt => {
                                evt && h.push( getUrlUtil.getAliaUrl(dayjs(evt).format('YYYYMMDD')));
                            }}
                        />
                    } position={Position.BOTTOM_RIGHT}>
                        <Button text="Daily" minimal rightIcon="caret-down" />
                    </Popover>
                    <Button text="Today" minimal onClick={() => {
                        h.push( getUrlUtil.getAliaUrl(dayjs(Date.now()).format('YYYYMMDD')));
                    }} />
                </Navbar.Group>
                { 
                    actions && <Navbar.Group align="right">
                        { actions }
                    </Navbar.Group>
                }
            </div>
        </Navbar>
    );
}