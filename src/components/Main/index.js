import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hello from '../Hello';
import Hello1 from '../Hello1';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Hello} />
    <Route path="/hello" component={Hello} />
    <Route path="/hello1" component={Hello1} />
  </Switch>
)

export default Main;
