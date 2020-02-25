import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import pages from './page';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

function App() {
  return (
    <Router>
      {pages}
    </Router>
  );
}

export default App;
