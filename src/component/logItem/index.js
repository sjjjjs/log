/* eslint-disable jsx-a11y/anchor-is-valid  */

import React from 'react';
import TimeAgo from 'timeago-react';
import { useHistory } from 'react-router-dom';
import { Classes } from '@blueprintjs/core';
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
            <div onClick={() => h.push(getUrlUtil.getLogDetailUrl(props.id))}>
                <MarkdownPreview source={props.children} short />
            </div>
        </div>
    );
}