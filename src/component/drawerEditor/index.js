import React from 'react';
import MarkdownEditor from 'component/markdownEditor';
import { noop } from 'util/commonUtil';
import { Drawer, Position, Classes, Button} from '@blueprintjs/core';

export default function DrawerEditor(props) {
    const {
        isOpen = false,
        onClose = noop,
        value = '',
        onChange = noop,
        onConfirm = noop,
        title = ''
    } = props;
    return (
        <Drawer
            autoFocus
            hasBackdrop
            isOpen={isOpen}
            position={Position.BOTTOM}
            size="100%"
            onClose={onClose}
            title={title}
        >
            <div
                className={Classes.DRAWER_BODY}
                style={{ height: '100%', padding: '0 15px' }}
            >
                <div style={{padding: '20px 0', maxWidth: 640, margin: 'auto'}}>
                    <MarkdownEditor
                        value={value}
                        onChange={val => onChange(val)}
                        onSubmit={() => onConfirm()}
                    />
                </div>
                <div className="">
                    <div style={{
                        display: 'flex',
                        width: 640,
                        margin: 'auto',
                        alignItems: 'center'
                    }}>
                        <Button
                            intent="primary"
                            className={Classes.DIALOG_CLOSE_BUTTON}
                            onClick={onConfirm}
                        >
                            提交
                        </Button>
                    </div>
                </div>
            </div>
        </Drawer>
    );
}
