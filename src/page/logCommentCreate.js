import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Navbar, NavbarGroup, Button, Classes
} from '@blueprintjs/core';
import styles from './logCommentCreate.module.css';
import LogCommentEditor from 'component/logCommentEditor';
import AppFrame from 'component/appFrame';

function PageNavigator() {
    const h = useHistory();
    return (
        <Navbar className={Classes.DARK}>
            <div style={{width: '640px', margin: 'auto'}}>
                <NavbarGroup align="left">
                    <Button
                        onClick={() => h.goBack()}
                        icon="chevron-left"
                        minimal
                    >返回</Button>
                </NavbarGroup>
            </div>
        </Navbar>
    );
}

function LogCommentCreate() {
    const params = useParams();
    const { id = null, cid = null } = params;
    return (
        <AppFrame header={<PageNavigator />}>
            <div className={styles.container}>
                <LogCommentEditor id={id} cid={cid} />
            </div>
        </AppFrame>
    );
}

export const component = LogCommentCreate;
export const path = '/log.comment.createOrEdit/:id/:cid?';