import React from 'react';
import ReactMarkdown from 'react-markdown';
import names from 'classnames';
import styles from './index.module.css';

const SEGMENT = '---\n';

function findTopLevelEle(target) {
    if (!(target instanceof HTMLElement)) return null;
    if (!(target.parentNode instanceof HTMLElement)) return null;
    const pnode = target.parentElement;
    if (pnode.classList.contains(styles.markdownBody)) {
        return target;
    }
    return findTopLevelEle(pnode);
}
function generatLinks(source) {
    return source.replace(/#(\S{1,100})\s/g, (_, p1) => `[${p1}](#/alia/${p1})`);
}

export default function MarkdownPreview(props) {
    const { source: rsource = '', className, selectAble = false } = props;
    const source = generatLinks(rsource);
    const sepIdx = source.indexOf(SEGMENT);
    const title = sepIdx > 0 ? source.slice(0, sepIdx) : '';
    return (
        <div
            className={names(
                "markdown-body",
                className,
                styles.markdownBody,
                selectAble ? styles.active : ''
            )}
            onClick={evt => {
                if (!props.selectAble || typeof props.onSelect !== 'function') return;
                const el = findTopLevelEle(evt.target);
                const sourcePosStr = el.getAttribute('data-sourcePos');
                props.onSelect(sourcePosStr);
            }}
        >
            <ReactMarkdown
                source={props.short ? (title || source) : source}
                sourcePos={selectAble}
            />
        </div>
    );
}