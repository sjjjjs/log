
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Navbar, NavbarGroup, Button, NavbarHeading, NavbarDivider, ButtonGroup, Classes
} from '@blueprintjs/core';
import getUrlUtil from 'util/getUrlUtil';

export default function NormalNavigator(props) {
    const { showBack = false, title = '', actions = null, leftActions = null } = props;
    const h = useHistory();
    return (
        <Navbar className={Classes.DARK} style={{ userSelect: 'none'}}>
            <div style={{ maxWidth: 640, margin: 'auto' }}>
                <NavbarGroup align="left">
                    <ButtonGroup>
                        {
                            showBack &&
                                <Button
                                    onClick={() => h.goBack()}
                                    icon="chevron-left"
                                    minimal
                                >返回</Button>
                        }
                        <Button minimal icon="home" onClick={() => h.push(getUrlUtil.getLogUrl())}></Button>
                    </ButtonGroup>
                    {
                        leftActions && <>
                            <NavbarDivider />
                            {leftActions}
                        </>
                    }
                    {
                        title !== '' && <>
                            <NavbarDivider />
                            <NavbarHeading>{title}</NavbarHeading>
                        </>
                    }
                </NavbarGroup>
                <NavbarGroup align="right">
                    {actions}
                </NavbarGroup>
            </div>
        </Navbar>
    );
}