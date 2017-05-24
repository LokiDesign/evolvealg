import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
