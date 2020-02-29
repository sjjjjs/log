import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
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
            <Switch>
                <Route path="/l/l" component={LogPage} />
                <Route path="/l/d/:id" component={LogDetailPage} />
                <Route path="/l/a/:text" component={AliaPage} />
                <Route path="/l/ce/:id?" component={LogCreatePage} />
                <Route path="/l/lc/ce/:id/:cid?" component={LogCommentCreatePage} />
                <Redirect to="/l/a/m" />
            </Switch>
        </Router>
    );
}

export default App;
