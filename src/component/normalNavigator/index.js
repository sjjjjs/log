
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Navbar, NavbarGroup, Button, NavbarHeading, NavbarDivider, ButtonGroup, Classes
} from '@blueprintjs/core';
import getUrlUtil from 'util/getUrlUtil';

export default function NormalNavigator(props) {
    const { showBack = false, title = '', actions = [] } = props;
    const h = useHistory();
    return (
        <Navbar className={Classes.DARK} style={{ userSelect: 'none'}}>
            <div>
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
                    <NavbarDivider />
                    {
                        title !== '' && <NavbarHeading>{title}</NavbarHeading>
                    }
                </NavbarGroup>
                <NavbarGroup align="right">
                    {actions}
                </NavbarGroup>
            </div>
        </Navbar>
    );
}