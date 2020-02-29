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
            <Route path="/log" exact component={LogPage} />
            <Route path="/alia/:id" component={AliaPage} />
            <Route path="/log.comment.createOrEdit/:id/:cid?" component={LogCommentCreatePage} />
            <Route path="/log.createOrEdit/:id?" component={LogCreatePage} />
            <Route path="/log.detail/:id" component={LogDetailPage} />
        </Router>
    );
}

export default App;
