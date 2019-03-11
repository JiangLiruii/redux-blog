import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';
export default (
  <HashRouter>
    <div>
      <Route path="/" component={Frame}>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Route>
    </div>
  </HashRouter>
);