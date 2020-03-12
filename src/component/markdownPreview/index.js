import React from 'react';
import ReactMarkdown from 'react-markdown';
import names from 'classnames';
import styles from './index.module.css';
import { Card } from '@blueprintjs/core';

const SEGMENT = '\n---';

function findTopLevelEle(target) {
    if (!(target instanceof HTMLElement)) return null;
    if (!(target.parentNode instanceof HTMLElement)) return null;
    if (target.classList.contains(styles.markdownBody)) return null;
    const pnode = target.parentElement;
    if (pnode.classList.contains(styles.markdownBody)) {
        return target;
    }
    return findTopLevelEle(pnode);
}
function generatLinks(source) {
    return source.replace(/(.?)#([A-Za-z0-9_\u4E00-\u9FA5]{1,100})/g, (m, p1, p2) => {
        if (p1 === '\\') {
            return '#' + p2;
        }
        return `${p1}[${m}](#/l/a/${p2})`;
    });
}

export default function MarkdownPreview(props) {
    const { source: rsource = '', className, selectAble = false } = props;
    const source = generatLinks(rsource);
    const sepIdx = source.indexOf(SEGMENT);
    const title = sepIdx > 0 ? source.slice(0, sepIdx) : '';
    return (
        <Card>
            <div
                className={names(
                    "markdown-body",
                    className,
                    styles.markdownBody,
                    selectAble ? styles.active : ''
                )}
                onClick={evt => {
                    if (!props.selectAble || typeof props.onSelect !== 'function') return;
                    if (!evt.shiftKey) return;
                    evt.preventDefault();
                    const el = findTopLevelEle(evt.target);
                    if (!el) return;
                    const sourcePosStr = el.getAttribute('data-sourcePos');
                    props.onSelect(sourcePosStr);
                }}
            >
                <ReactMarkdown
                    source={props.short ? (title || source) : source}
                    sourcePos={selectAble}
                />
            </div>
        </Card>
    );
}