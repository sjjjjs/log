import React from 'react';
import { Table, Tag } from 'antd';

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
    ellipsis: true
  },
  {
    title: '消息',
    dataIndex: 'message',
    ellipsis: true,
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
    category: '经济学',
    tag: '紧急',
    message: '今天学习了薛兆丰经济学一部分，收益不小'
  },
  {
    key: '2',
    createAt: '01.01 14:09',
    category: '自我管理',
    tag: '心情',
    message: '我是不是在浪费时间？？'
  },
  {
    key: '3',
    createAt: '01.01 14:09',
    category: '减肥计划',
    tag: '铭记',
    message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
  },
  {
    key: '4',
    createAt: '01.01 14:09',
    category: '戒烟',
    tag: '突破',
    message: '本月累计抽烟 1 根。'
  },
  {
    key: '21',
    createAt: '01.01 14:09',
    category: '经济学',
    tag: '紧急',
    message: '今天学习了薛兆丰经济学一部分，收益不小'
  },
  {
    key: '22',
    createAt: '01.01 14:09',
    category: '自我管理',
    tag: '心情',
    message: '我是不是在浪费时间？？'
  },
  {
    key: '23',
    createAt: '01.01 14:09',
    category: '减肥计划',
    tag: '铭记',
    message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
  },
  {
    key: '24',
    createAt: '01.01 14:09',
    category: '戒烟',
    tag: '突破',
    message: '本月累计抽烟 1 根。'
  },
  {
    key: '31',
    createAt: '01.01 14:09',
    category: '经济学',
    tag: '紧急',
    message: '今天学习了薛兆丰经济学一部分，收益不小'
  },
  {
    key: '32',
    createAt: '01.01 14:09',
    category: '自我管理',
    tag: '心情',
    message: '我是不是在浪费时间？？'
  },
  {
    key: '33',
    createAt: '01.01 14:09',
    category: '减肥计划',
    tag: '铭记',
    message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
  },
  {
    key: '34',
    createAt: '01.01 14:09',
    category: '戒烟',
    tag: '突破',
    message: '本月累计抽烟 1 根。'
  },
  {
    key: '41',
    createAt: '01.01 14:09',
    category: '经济学',
    tag: '紧急',
    message: '今天学习了薛兆丰经济学一部分，收益不小'
  },
  {
    key: '42',
    createAt: '01.01 14:09',
    category: '自我管理',
    tag: '心情',
    message: '我是不是在浪费时间？？'
  },
  {
    key: '43',
    createAt: '01.01 14:09',
    category: '减肥计划',
    tag: '铭记',
    message: '今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！今日达到历史最佳体重 63 公斤！'
  },
  {
    key: '44',
    createAt: '01.01 14:09',
    category: '戒烟',
    tag: '突破',
    message: '本月累计抽烟 1 根。'
  },
];

const rowSelection = {
  type: 'radio',
  selectedRowKeys: [ '3' ]
};

export default function DataTable(props) {
  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableBody}>
        <Table
          className="dataTable"
          showHeader={false}
          dataSource={data}
          columns={columns}
          pagination={false}
          rowSelection={rowSelection}
        />
      </div>
      <div className={styles.itemContent}>
        {/* <div className={styles.commentsContent}>
          <LogComments />
        </div> */}
        <div className={styles.remarkContent}>
          <LogRemarker />
        </div>
      </div>
    </div>
  );
}