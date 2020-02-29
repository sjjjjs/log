/* eslint-disable jsx-a11y/anchor-is-valid  */

import React, { useState } from 'react';
import TimeAgo from 'timeago-react';
import { useHistory } from 'react-router-dom';
import { Card, Classes, Alert, Intent, Elevation } from '@blueprintjs/core';
import names from 'classnames';
import styles from './index.module.css';
import MarkdownPreview from 'component/markdownPreview';
import getUrlUtil from 'util/getUrlUtil';

export default function (props) {
    const h = useHistory();
    return (
        <div className={styles.container}>
            <div className={styles.meta}>
                <span className={names(Classes.TEXT_MUTED, Classes.TEXT_SMALL)}>
                    <TimeAgo datetime={props.date} locale='zh_CN' />
                </span>
            </div>
            <Card elevation={Elevation.ONE} interactive onClick={() => {
                console.log(props.id, getUrlUtil.getLogDetailUrl(props.id));
                h.push(getUrlUtil.getLogDetailUrl(props.id))
            }}>
                <div className={names("markdown-body", styles.markdownBody)}>
                    <MarkdownPreview source={props.children} short />
                </div>
            </Card>
        </div>
    );
}