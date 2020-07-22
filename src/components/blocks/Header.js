import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <span>Rick And Morty</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </div>
  );
}
