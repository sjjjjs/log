
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Navbar, NavbarGroup, Button, NavbarHeading, NavbarDivider, ButtonGroup, Popover
} from '@blueprintjs/core';
import { DatePicker } from '@blueprintjs/datetime';
import getUrlUtil from 'util/getUrlUtil';
import dayjs from 'dayjs';

export default function NormalNavigator(props) {
    const { showBack = false, showHome = true, title = '', actions = null, leftActions = null } = props;
    const h = useHistory();
    return (
        <Navbar style={{ userSelect: 'none'}}>
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
                        {
                            showHome &&
                            <Button
                                minimal
                                icon="home"
                                onClick={() => h.push(getUrlUtil.getLogUrl())}
                                text="主页"
                            />
                        }
                        <ButtonGroup>
                            <Button icon="book" minimal text="日记" onClick={() => {
                                h.push(getUrlUtil.getAliaUrl(dayjs(Date.now()).format('YYYYMMDD')));
                            }} />
                            <Popover content={
                                <DatePicker
                                    showActionsBar
                                    shortcuts
                                    highlightCurrentDay
                                    onChange={evt => {
                                        evt && h.push( getUrlUtil.getAliaUrl(dayjs(evt).format('YYYYMMDD')));
                                    }}
                                />
                            }>
                                <Button minimal rightIcon="caret-down" />
                            </Popover>
                        </ButtonGroup>
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