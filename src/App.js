import React from 'react';
// import "antd/dist/antd.css";
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// import AppFrame from "./component/appFrame";
// import DataTable from './component/dataTable';
// import Category from './component/category';

import LogTable from './component/logTable';

function App() {
  return (
    <LogTable />
    // <AppFrame
    //   side={<Category />}
    //   footer={<span>稍等片刻，正在加载...</span>}
    // >
    //   <DataTable />
    // </AppFrame>
  );
}

export default App;
