import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import Home from '../views/Home'
import Detail from '../views/Detail'
export default (
  <HashRouter>
    <div>
      <Route path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </div>
  </HashRouter>
);