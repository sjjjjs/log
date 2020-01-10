import React, { useEffect } from 'react';
import { Table, Tag } from 'antd';
import Tabulator from 'tabulator-tables';

import LogComments from '../logComments';
import LogRemarker from '../logRemarker';
import styles from './index.module.css';

const columns = [
  {
    title: '#',
    dataIndex: 'key',
    width: 70,
  },
  {
    title: '时间',
    dataIndex: 'createAt',
    width: 130,
  },
  {
    title: '分类',
    dataIndex: 'category',
    width: 140,
  },
  {
    title: '消息',
    dataIndex: 'message',
    render: (text, record) => (
      <span>
        <Tag>{record.tag}</Tag>
        {text}
      </span>
    )
  }
];
const data = [
  {
    key: '1',
    createAt: '01.01 14:09',
    appender: '经济学',
    level: '紧急',
    message: '今天学习了薛兆丰经济学一部分，收益不小',
    _children: [
      {
        key: '43',
        createAt: '01.01 14:09',
        appender: '减肥计划',
        level: '铭记',
        message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
      },
      {
        key: '44',
        createAt: '01.01 14:09',
        appender: '戒烟',
        level: '突破',
        message: '本月累计抽烟 1 根。'
      },
    ]
  },
  {
    key: '2',
    createAt: '01.01 14:09',
    appender: '自我管理',
    level: '心情',
    message: '我是不是在浪费时间？？'
  },
  {
    key: '3',
    createAt: '01.01 14:09',
    appender: '减肥计划',
    level: '铭记',
    message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
  },
  {
    key: '4',
    createAt: '01.01 14:09',
    appender: '戒烟',
    level: '突破',
    message: '本月累计抽烟 1 根。'
  },
  {
    key: '21',
    createAt: '01.01 14:09',
    appender: '经济学',
    level: '紧急',
    message: '今天学习了薛兆丰经济学一部分，收益不小'
  },
  {
    key: '22',
    createAt: '01.01 14:09',
    appender: '自我管理',
    level: '心情',
    message: '我是不是在浪费时间？？',
    _children: [
      {
        key: '43',
        createAt: '01.01 14:09',
        appender: '减肥计划',
        level: '铭记',
        message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
      },
      {
        key: '44',
        createAt: '01.01 14:09',
        appender: '戒烟',
        level: '突破',
        message: '本月累计抽烟 1 根。'
      },
    ]
  },
  {
    key: '23',
    createAt: '01.01 14:09',
    appender: '减肥计划',
    level: '铭记',
    message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
  },
  {
    key: '24',
    createAt: '01.01 14:09',
    appender: '戒烟',
    level: '突破',
    message: '本月累计抽烟 1 根。'
  },
  {
    key: '31',
    createAt: '01.01 14:09',
    appender: '经济学',
    level: '紧急',
    message: '今天学习了薛兆丰经济学一部分，收益不小'
  },
  {
    key: '32',
    createAt: '01.01 14:09',
    appender: '自我管理',
    level: '心情',
    message: '我是不是在浪费时间？？'
  },
  {
    key: '33',
    createAt: '01.01 14:09',
    appender: '减肥计划',
    level: '铭记',
    message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
  },
  {
    key: '34',
    createAt: '01.01 14:09',
    appender: '戒烟',
    level: '突破',
    message: '本月累计抽烟 1 根。'
  },
  {
    key: '41',
    createAt: '01.01 14:09',
    appender: '经济学',
    level: '紧急',
    message: '今天学习了薛兆丰经济学一部分，收益不小'
  },
  {
    key: '42',
    createAt: '01.01 14:09',
    appender: '自我管理',
    level: '心情',
    message: '我是不是在浪费时间？？'
  },
  {
    key: '43',
    createAt: '01.01 14:09',
    appender: '减肥计划',
    level: '铭记',
    message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
  },
  {
    key: '44',
    createAt: '01.01 14:09',
    appender: '戒烟',
    level: '突破',
    message: '本月累计抽烟 1 根。'
  },
];

const rowSelection = {
  type: 'radio',
  selectedRowKeys: [ '3' ]
};

var tableDataNested = [
  {name:"Oli Bob", location:"United Kingdom", gender:"male", col:"red", dob:"14/04/1984", _children:[
      {name:"Mary May", location:"Germany", gender:"female", col:"blue", dob:"14/05/1982"},
      {name:"Christine Lobowski", location:"France", gender:"female", col:"green", dob:"22/05/1982"},
      {name:"Brendon Philips", location:"USA", gender:"male", col:"orange", dob:"01/08/1980", _children:[
          {name:"Margret Marmajuke", location:"Canada", gender:"female", col:"yellow", dob:"31/01/1999"},
          {name:"Frank Harbours", location:"Russia", gender:"male", col:"red", dob:"12/05/1966"},
      ]},
  ]},
  {name:"Jamie Newhart", location:"India", gender:"male", col:"green", dob:"14/05/1985"},
  {name:"Gemma Jane", location:"China", gender:"female", col:"red", dob:"22/05/1982", _children:[
      {name:"Emily Sykes", location:"South Korea", gender:"female", col:"maroon", dob:"11/11/1970"},
  ]},
  {name:"James Newman", location:"Japan", gender:"male", col:"red", dob:"22/03/1998"},
];

export default function DataTable(props) {
  let tableRootRef = null;
  useEffect(() => {
    if (tableRootRef) {
      new Tabulator(tableRootRef, {
        height:"300px",
        data:data,
        // dataTree:true,
        // movableRows:true,
        // selectable:true, //make rows selectable
        // dataTreeStartExpanded:true,

        layout:"fitDataFill",
        pagination:"local",
        paginationSize:10,
        paginationSizeSelector:[3, 6, 8, 10],
        columns:[
          {formatter:"rownum", align:"center", width:40},
          {title:"来源", field:"appender", width:150, responsive:0}, //never hide this column
          {title:"Example", field:"example", formatter:"textarea", editor:true, },
          {title:"等级", field:"level", width:150},
          {title:"记录时间", field:"createAt", align:"center", width:150},
          {title:"消息", field:"message", responsive:10}, //hide this column first
        ],
    })
    }
  }, [ tableRootRef ])
  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableBody} ref={ref => tableRootRef = ref}>
        {/* <Table
          className="dataTable"
          showHeader={false}
          dataSource={data}
          columns={columns}
          pagination={false}
          rowSelection={rowSelection}
        /> */}
      </div>
      <div className={styles.itemContent}>
        <div className={styles.commentsContent}>
          <LogComments />
        </div>
        <div className={styles.remarkContent}>
          <LogRemarker />
        </div>
      </div>
    </div>
  );
}