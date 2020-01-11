import React, {useEffect} from 'react';
// import { Tree, Input } from 'antd';
import Tabulator from 'tabulator-tables';

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

export default function Demo() {
  let rootRef = null;
  useEffect(() => {
    if (rootRef) {
      new Tabulator(rootRef, {
        height:"100%",
        data:tableDataNested,
        dataTree:true,
        layout:"fitDataFill",
        columns:[
        {title:"来源分类", field:"name", responsive:0, width: '100%'}, //never hide this column
        ],
    });
    }
  }, [ rootRef])
  return (
    <div ref={ref => rootRef = ref}>

    </div>
  );
}

// const { TreeNode } = Tree;

// export default class Demo extends React.Component {
//   onSelect = (selectedKeys, info) => {
//     console.log('selected', selectedKeys, info);
//   };

//   render() {
//     return (
//       <Tree
//         defaultExpandedKeys={['0-0-0']}
//         onSelect={this.onSelect}
//         blockNode
//         showLine
//       >
//         <div style={{ padding: 4, marginTop: 10 }}>
//           <Input.Search size="small" style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />
//         </div>
//         <TreeNode title="哲学" key="0-0">
//           <TreeNode title="中国哲学" key="0-0-0">
//             <TreeNode title="儒家" key="0-0-0-0" />
//             <TreeNode title="道家" key="0-0-0-1" />
//             <TreeNode title="佛教" key="0-0-0-2" />
//           </TreeNode>
//           <TreeNode title="西方哲学" key="0-0-1">
//             <TreeNode title="古希腊哲学" key="0-0-1-0" />
//           </TreeNode>
//           <TreeNode title="近代哲学" key="0-0-2">
//             <TreeNode title="存在主义" key="0-0-2-0" />
//             <TreeNode title="花园学派" key="0-0-2-1" />
//           </TreeNode>
//         </TreeNode>
//         <TreeNode title="启蒙运动" key="1-0">
//           <TreeNode title="parent 1-0" key="1-0-0">
//             <TreeNode title="leaf" key="1-0-0-0" />
//             <TreeNode title="leaf" key="1-0-0-1" />
//             <TreeNode title="leaf" key="1-0-0-2" />
//           </TreeNode>
//           <TreeNode title="parent 1-1" key="1-0-1">
//             <TreeNode title="leaf" key="1-0-1-0" />
//           </TreeNode>
//           <TreeNode title="parent 1-2" key="1-0-2">
//             <TreeNode title="leaf" key="1-0-2-0" />
//             <TreeNode title="leaf" key="1-0-2-1" />
//           </TreeNode>
//         </TreeNode>
//       </Tree>
//     );
//   }
// }
