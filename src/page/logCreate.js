import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Navbar, NavbarGroup, Button, Classes
} from '@blueprintjs/core';
import styles from './logCreate.module.css';
import LogEditor from 'component/logEditor';
import AppFrame from 'component/appFrame';

function PageNavigator() {
    const h = useHistory();
    return (
        <Navbar className={Classes.DARK}>
            <div style={{width: '640px', margin: 'auto'}}>
                <NavbarGroup align="left">
                    <Button
                        onClick={() => h.replace('/log')}
                        icon="chevron-left"
                        minimal
                    >返回</Button>
                </NavbarGroup>
            </div>
        </Navbar>
    );
}

function LogCreate() {
    const params = useParams();
    const { id = null } = params;
    return (
        <AppFrame header={<PageNavigator />}>
            <div className={styles.container}>
                <LogEditor id={id} />
            </div>
        </AppFrame>
    );
}

export const component = LogCreate;
export const path = '/log.createOrEdit/:id?';