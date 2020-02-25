import React from 'react';
import { Route } from 'react-router-dom';

const routes = [];
const pageCtx = require.context('.', false, /\.js$/);

pageCtx.keys().forEach(key => {
    if (key === './index.js') return;
    const route = pageCtx(key);
    routes.push(<Route {...route} key={key} />);
});

export default routes;