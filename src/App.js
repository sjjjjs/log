import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AliaPage from './page/alia';
import LogPage from './page/log';
import LogCommentCreatePage from './page/logCommentCreate';
import LogCreatePage from './page/logCreate';
import LogDetailPage from './page/logDetail';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'github-markdown-css';

function App() {
    return (
        <Router>
            <Route path="/l" exact component={LogPage} />
            <Route path="/l/:id" exact component={LogDetailPage} />
            <Route path="/l/a/:id" exact component={AliaPage} />
            <Route path="/l/ce/:id?" exact component={LogCreatePage} />
            <Route path="/l/lc/ce/:id/:cid?" exact component={LogCommentCreatePage} />
        </Router>
    );
}

export default App;
