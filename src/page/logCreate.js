import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Navbar, NavbarGroup, Button, Classes
} from '@blueprintjs/core';
import styles from './logCreate.module.css';
import LogAppender from 'component/logAppender';
import AppFrame from 'component/appFrame';

function PageNavigator() {
    const h = useHistory();
    return (
        <Navbar className={Classes.DARK}>
            <NavbarGroup align="left">
                <Button
                    onClick={() => h.replace('/log')}
                    icon="chevron-left"
                    minimal
                >返回</Button>
            </NavbarGroup>
        </Navbar>
    );
}

function Appender() {
    return (
        <AppFrame header={<PageNavigator />}>
            <div className={styles.container}>
                <LogAppender />
            </div>
        </AppFrame>
    );
}

export const component = Appender;
export const path = '/log.create';