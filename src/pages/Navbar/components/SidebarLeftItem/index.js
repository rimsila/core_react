import React, { Component } from 'react';

import NavItemLeft from '../NavItemLeft';



class SidebarLeftItem extends Component {
  state = {

    mock: [
      {
        icon: "user",
        navTitle: "Navbar",
        navLinkTitle: "Sidebar Left",
        navLink: "/SidebarLeft",

      },
      {
        icon: "user",
        navTitle: "Item",
        navLink: "/hello",
        navLinkTitle: "subItem",

      },

    ]

  };



  render() {
    return (
      <div>

        {this.state.mock.map((mock, index) => (
          <NavItemLeft
            key={index}
            mock={mock}
          />
        ))}
      </div>




    );
  }
}



export default SidebarLeftItem;