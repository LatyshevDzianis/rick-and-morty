import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacterEpisodesBegin } from "../../../../actions/characterActions";
import { Loader } from "../../../blocks/Loader/index";

import "./CharacterDetails.css";

function CharacterDetails({ match }) {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters.characters);
  const characterEpisodes = useSelector(
    (state) => state.characters.characterEpisodes
  );
  const loading = useSelector((state) => state.characters.loading);

  let idList = [];
  const characterId = match.params.id;

  let character = characters.find((item) => item.id === +characterId);

  character.episode.forEach((item) =>
    idList.push(item.substring(item.lastIndexOf("/") + 1))
  );

  useEffect(() => {
    dispatch(fetchCharacterEpisodesBegin(idList));
  }, []);

  return (
    <div className="CharacterDetails">
      <img alt="..." src={character.image} />
      <ul>
        <li>
          <b>Name:</b> {character.name}
        </li>
        <li>
          <b>Status:</b> {character.status}
        </li>
        <li>
          <b>Species:</b> {character.species}
        </li>
        <li>
          <b>Gender:</b> {character.gender}
        </li>
        <li>
          <b>Episodes: </b>
          <br />
          {loading ? (
            <Loader />
          ) : Array.isArray(characterEpisodes) ? (
            characterEpisodes.map((episode) => (
              <span key={episode.id}>{episode.name}, </span>
            ))
          ) : (
            <span key={characterEpisodes.id}>{characterEpisodes.name}</span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default CharacterDetails;
