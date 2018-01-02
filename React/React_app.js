import React from 'react';
import { render } from 'react-dom';

import {App} from './React/components/App'
import {User} from './React/components/User'

//render(<App text={"Wellcome to React Express"}/>, window.document.getElementById("app"));

import {
    HashRouter,
    Route,
    Link
  } from 'react-router-dom';
  
render((
     <HashRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/user" component={User} />
          
        </div>
     </HashRouter>
  ), document.getElementById( 'app' ) )