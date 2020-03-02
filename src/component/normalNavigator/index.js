
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Navbar, NavbarGroup, Button, NavbarHeading, NavbarDivider, Classes
} from '@blueprintjs/core';

export default function NormalNavigator(props) {
    const { showBack = false, title = '', actions = [] } = props;
    const h = useHistory();
    return (
        <Navbar className={Classes.DARK} style={{ userSelect: 'none'}}>
            <div style={{width: '640px', margin: 'auto'}}>
                <NavbarGroup align="left">
                    {
                        showBack && < >
                            <Button
                                onClick={() => h.goBack()}
                                icon="chevron-left"
                                minimal
                            >返回</Button>
                            <NavbarDivider />
                        </>
                    }
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