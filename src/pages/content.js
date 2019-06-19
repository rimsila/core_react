import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import SidebarLeft2 from './Navbar';
import Introduction from './Introduction';


const MainContent = () => (
  <Switch>
    <Route exact path="/" component={Introduction} />
    <Route path="/Navbar" component={Navbar} />
    {/* <Route path="/SidebarLeft2" component={SidebarLeft2} /> */}

  </Switch>

  
)

export default MainContent;
