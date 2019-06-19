import React, { Component } from 'react';

import NavItemLeft from '../NavItemLeft';



class SidebarLeft extends Component {
  state = {

    mock: [
      {
        icon: "user",
        navTitle: "Navbar",
        navLinkTitle: "Sidebar Left",
        navLink: "/Navbar",

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



export default SidebarLeft;