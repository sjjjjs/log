import React from 'react';
import ReactMarkdown from 'react-markdown';
import names from 'classnames';

const SEGMENT = '---\n';

export default function MarkdownPreview(props) {
    const { source = '', className } = props;
    const sepIdx = source.indexOf(SEGMENT);
    const title = sepIdx > 0 ? source.slice(0, sepIdx) : '';
    return (
        <div className={names("markdown-body", className)}>
            <ReactMarkdown source={props.short ? (title || source) : source} />
        </div>
    );
}