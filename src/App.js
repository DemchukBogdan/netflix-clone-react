import React from 'react';
import { Switch, Route } from 'react-router';
import './css/Main.css';
import Main from './pages';
import Login from './pages/Login'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
