import React from 'react';
import { Tooltip, Position } from '@blueprintjs/core';
import TimeAgo from 'timeago-react';
import dayjs from 'dayjs';

export default function(props) {
    const { time = new Date(), showTooltip = true } = props;
    return (
        <Tooltip position={Position.TOP} disabled={!showTooltip} content={dayjs(time).format('YYYY.MM.DD HH:mm')} >
            <TimeAgo datetime={time} locale='zh_CN' />
        </Tooltip>
    );
}