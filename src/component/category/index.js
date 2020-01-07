import React from 'react';
import { Tree, Input } from 'antd';

const { TreeNode } = Tree;

export default class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  render() {
    return (
      <Tree
        defaultExpandedKeys={['0-0-0']}
        onSelect={this.onSelect}
        blockNode
        showLine
      >
        <div style={{ padding: 4, marginTop: 10 }}>
          <Input.Search size="small" style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />
        </div>
        <TreeNode title="哲学" key="0-0">
          <TreeNode title="中国哲学" key="0-0-0">
            <TreeNode title="儒家" key="0-0-0-0" />
            <TreeNode title="道家" key="0-0-0-1" />
            <TreeNode title="佛教" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="西方哲学" key="0-0-1">
            <TreeNode title="古希腊哲学" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="近代哲学" key="0-0-2">
            <TreeNode title="存在主义" key="0-0-2-0" />
            <TreeNode title="花园学派" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
        <TreeNode title="启蒙运动" key="1-0">
          <TreeNode title="parent 1-0" key="1-0-0">
            <TreeNode title="leaf" key="1-0-0-0" />
            <TreeNode title="leaf" key="1-0-0-1" />
            <TreeNode title="leaf" key="1-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="1-0-1">
            <TreeNode title="leaf" key="1-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="1-0-2">
            <TreeNode title="leaf" key="1-0-2-0" />
            <TreeNode title="leaf" key="1-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }
}