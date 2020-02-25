import React from 'react';
import { Route } from 'react-router-dom';

const path = require('path');
const routes = [];
const pageCtx = require.context('.', false, /\.js$/);
console.log(path)
pageCtx.keys().forEach(key => {
    const name = path.parse(key).name;
    if (name === 'index') return;
    routes.push(<Route component={pageCtx(key).default} path={name} />);
});

export default pageCtx;