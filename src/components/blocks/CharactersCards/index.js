import React from "react";
import { Link } from "react-router-dom";

import "./CharactersCards.css";

export default function CharactersCards({ characters }) {
  return (
    <div className="CharactersCardsContainer">
      {Array.isArray(characters) && characters.length > 0 ? (
        characters.map((character) => {
          return (
            <div className="CharacterCard" key={character.id}>
              <Link to={`/characters/${character.id}`}>
                <img src={character.image} alt="..." />
                <br />
                <span>{character.name}</span>
              </Link>
            </div>
          );
        })
      ) : (
        <div className="CharacterCard" key={characters.id}>
          <Link to={`/characters/${characters.id}`}>
            <img src={characters.image} alt="..." />
            <br />
            <span>{characters.name}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
