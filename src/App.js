import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const pageCtx = require.context('./page', false, /\.js$/);
const pages = pageCtx.keys().map(key => pageCtx(key).default);
console.log(pageCtx())

function App() {
  return (
    <Router>
      {pages}
    </Router>
  );
}

export default App;
