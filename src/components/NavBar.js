import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const style = {
    color: "white",
    marginRight: "10px",
    background: "purple"
  }
  return (
    <div className="navbar">
     <NavLink
          to="/"
          exact
          style={style}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
      </NavLink>
      <NavLink
          to="/movies"
          exact
          style={style}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Movies
      </NavLink> 
      <NavLink
          to="/directors"
          exact
          style={style}
          activeStyle={{
            background: "darkblue",
          }}
        >
         Directors
      </NavLink>  
      <NavLink
          to="/actors"
          exact
          style={style}
          activeStyle={{
            background: "darkblue",
          }}
        >
         Actors
      </NavLink> 
  </div>
)}

export default NavBar;
