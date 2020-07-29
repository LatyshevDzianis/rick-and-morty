import React from "react";

import { NavLink, Link } from "react-router-dom";

import "./styles.css";
import {
  CHARACTERS_PAGE,
  EPISODES_PAGE,
  LOCATIONS_PAGE,
  MAIN_ROUTE,
} from "../../../constants/routes";

export default function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to={MAIN_ROUTE}>
          <span>Rick And Morty</span>
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to={EPISODES_PAGE}>Episodes</NavLink>
        </li>
        <li>
          <NavLink to={LOCATIONS_PAGE}>Locations</NavLink>
        </li>
        <li>
          <NavLink to={CHARACTERS_PAGE}>Characters</NavLink>
        </li>
      </ul>
    </div>
  );
}
