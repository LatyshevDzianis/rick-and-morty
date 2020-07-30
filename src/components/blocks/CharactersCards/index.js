import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { CHARACTERS_PAGE } from "../../../constants/routes";

export default function CharactersCards({ characters }) {
  const generateCharacterUrl = (id) => `${CHARACTERS_PAGE}${id}`;

  return (
    <div className="CharactersCardsContainer">
      {Array.isArray(characters) && characters.length > 0 ? (
        characters.map((character) => {
          return (
            <div className="CharacterCard" key={character.id}>
              <Link to={generateCharacterUrl(character.id)}>
                <img src={character.image} alt="..." />
                <br />
                <span>{character.name}</span>
              </Link>
            </div>
          );
        })
      ) : characters.length > 0 ? (
        <div className="CharacterCard" key={characters.id}>
          <Link to={generateCharacterUrl(characters.id)}>
            <img src={characters.image} alt="..." />
            <br />
            <span>{characters.name}</span>
          </Link>
        </div>
      ) : (
        <span>Empty</span>
      )}
    </div>
  );
}
