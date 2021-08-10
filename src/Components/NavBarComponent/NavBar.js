import {MenuItems, options} from "../../Configs/MenuItems";
import './NavBarCSS/NavBar.css';
import React from 'react';
import DropDownComp from "../DropDownComp/DropDownComp";


function NavBar() {
  
  return (
    <div className="nav_panel">
      <div className="header_panel_left">
        
        <h1>Baseball21</h1>
        <div className="header_option">
          {
            MenuItems.map((item, index) => {
              return(
                <DropDownComp title={item.title} option={options} />
              )
            })
          }
        </div>
      </div>

      <div className="header_panel_right">
        <input type="text" placeholder="Search..."/>
        <button>Search</button>
      </div>
    </div>
  );
}

export default NavBar;