import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import pages from './page';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

function App() {
  return (
    <Router>
      <nav className="bp3-navbar">
        <div style={{ margin: '0 auto', width: '694px' }}>
          <div className="bp3-navbar-group bp3-align-left">
            <div className="bp3-navbar-heading">日志</div>
          </div>
          <div className="bp3-navbar-group bp3-align-right">
            <button className="bp3-button" onClick={() => window.location.href = '#/log.create'}>创建</button>
          </div>
        </div>
      </nav>
      {pages}
    </Router>
  );
}

export default App;
