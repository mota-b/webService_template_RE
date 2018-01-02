import React, {Component} from 'react';
import {BrowserRouter, Route, browserHistory, Switch} from 'react-router'

import {Root} from './Root'
import {Home} from './Home'
import {User} from './User'


export class App extends Component {
    
    render(){
        return (
            <div>
                <h1> Home React</h1>
            </div>
        );
    }
}