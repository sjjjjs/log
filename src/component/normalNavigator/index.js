
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Navbar, Button
} from '@blueprintjs/core';
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
                    <Navbar.Heading>
                        <h3 >&lt;HeroBook /&gt;</h3>
                    </Navbar.Heading>
                    <Button icon="home" minimal text="Home" onClick={() => {
                        h.push(getUrlUtil.getHome());
                    }} />
                    <Button icon="book" minimal text="List" onClick={() => {
                        h.push(getUrlUtil.getLogUrl());
                    }} />
                    <Button text="Today" minimal icon="pin" onClick={() => {
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