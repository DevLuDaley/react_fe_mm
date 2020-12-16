import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/meals">
        Meals
      </NavLink>
      <NavLink activeClassName="active" to="/recipes">
        Recipes
      </NavLink>
    </nav>
  );
}
export default Header;