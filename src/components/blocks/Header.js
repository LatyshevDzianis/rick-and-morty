import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <span>Rick And Morty</span>
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/episodes">Episodes</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
      </ul>
    </div>
  );
}
