import React, { useEffect } from 'react';
// import { Table, Tag } from 'antd';
import Tabulator from 'tabulator-tables';

// import LogComments from '../logComments';
// import LogRemarker from '../logRemarker';
import styles from './index.module.css';

const data = [
  {
    key: '1',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '2',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '3',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '4',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '21',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '22',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters',
  },
  {
    key: '23',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '24',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '31',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '32',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '33',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '34',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '41',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '42',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '43',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '44',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },{
    key: '2',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '3',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '4',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '21',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '22',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters',
  },
  {
    key: '23',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '24',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '31',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '32',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '33',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '34',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '41',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '42',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '43',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '44',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },{
    key: '2',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '3',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '4',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '21',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '22',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters',
  },
  {
    key: '23',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '24',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '31',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '32',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '33',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '34',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '41',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '42',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '43',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '44',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },{
    key: '2',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '3',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '4',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '21',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '22',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters',
  },
  {
    key: '23',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '24',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '31',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '32',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '33',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '34',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
  {
    key: '41',
    createAt: '01/10/2020',
    appender: 'foo.bar',
    level: 'ergent',
    message: 'learn something cool'
  },
  {
    key: '42',
    createAt: '01/10/2020',
    appender: 'management',
    level: 'motion',
    message: 'Paul Alexandrescu, Technical Director at Thomson Reuters'
  },
  {
    key: '43',
    createAt: '01/10/2020',
    appender: 'keep fit',
    level: 'remember',
    message: 'We’re very satisfied with TinyMCE’s features, functionality, ease of integration, and the impeccable support team.'
  },
  {
    key: '44',
    createAt: '01/10/2020',
    appender: 'quit smoking',
    level: 'break',
    message: 'TinyMCE satisfied our needs at a competitive cos'
  },
];

export default function DataTable(props) {
  let tableRootRef = null;
  useEffect(() => {
    if (tableRootRef) {
      new Tabulator(tableRootRef, {
        height:"100%",
        data:data,
        // dataTree:true,
        // movableRows:true,
        // selectable:true, //make rows selectable
        dataTreeStartExpanded:true,

        layout:"fitDataFill",
        pagination:"local",
        paginationSize:100,
        paginationSizeSelector:[3, 6, 8, 10],
        columns:[
          {formatter:"rownum", align:"center", width:40, frozen:true},
          {title:"来源", field:"appender", align:"center", width:150, responsive:0}, //never hide this column
          {title:"等级", field:"level", align:"center", width:150},
          {title:"记录时间", field:"createAt", align:"center", width:150},
          {title:"消息", field:"message", responsive:10}, //hide this column first
        ],
    })
    }
  }, [ tableRootRef ])
  return (
    <div className={styles.tableWrap}>
      <div
        className={styles.tableBody}
        ref={ref => tableRootRef = ref}
      >
      </div>
    </div>
  );
}