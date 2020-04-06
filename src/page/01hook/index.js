import React from 'react'
import ReactDOM,{render} from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link,NavLink } from 'react-router-dom'
import App from './07useState';
import Home from './01hook简介';
import FriendStatus from './05gameOrTravel';
import './style/index.less';
render(<Router>
  <div className='nav'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/app'>App</NavLink>
    <NavLink to='/status'>status</NavLink>
  </div>
  <Switch>
    <Route path='/' exact component={Home}></Route>
    <Route path='/app' exact component={App}></Route>
    <Route path='/status' exact component={FriendStatus}></Route>
  </Switch>
</Router>, window.root)
