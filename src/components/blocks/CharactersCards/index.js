import React from "react";
import { Link } from "react-router-dom";

import "./CharactersCards.css";

export default function CharactersCards({ characters }) {
  return (
    <div className="CharactersCardsContainer">
      {characters.map((character) => {
        return (
          <div className="CharacterCard">
            <Link to={`/characters/${character.id}`}>
              <img src={character.image} alt="..." />
              <br />
              <span>{character.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
