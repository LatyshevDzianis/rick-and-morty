import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchCharacterBegin,
  fetchCharacterEpisodesBegin,
} from "../../../../actions/characterActions";
import { Loader } from "../../../blocks/Loader/index";

import "./CharacterDetails.css";

function CharacterDetails({ match }) {
  const characterId = match.params.id;
  let idList = [];

  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters.selectedCharacter);
  const characterEpisodes = useSelector(
    (state) => state.characters.characterEpisodes
  );
  const loading = useSelector((state) => state.characters.loading);
  const loadingEpisodes = useSelector(
    (state) => state.characters.loadingEpisodes
  );

  useEffect(() => {
    dispatch(fetchCharacterBegin(characterId));
  }, []);

  useEffect(() => {
    character.episode &&
      character.episode.forEach((item) =>
        idList.push(item.substring(item.lastIndexOf("/") + 1))
      );

    idList.length && dispatch(fetchCharacterEpisodesBegin(idList));
  }, [character]);

  return (
    <div className="CharacterDetails">
      {loading ? (
        <Loader />
      ) : (
        <div className="Row">
          <img alt="..." src={character.image} />
          <ul>
            <li>
              <b>Name: </b>
              {character.name}
            </li>
            <li>
              <b>Status: </b>
              {character.status}
            </li>
            <li>
              <b>Species: </b>
              {character.species}
            </li>
            <li>
              <b>Gender: </b>
              {character.gender}
            </li>
            <li>
              <b>Origin: </b>
              {character.origin && character.origin.name}
            </li>
            <li>
              <b>Location: </b>
              {character.location && character.location.name}
            </li>
          </ul>
        </div>
      )}
      <div className="CharacterEpisodes">
        <span>
          <b>Episodes: </b>
        </span>
        {loadingEpisodes ? (
          <Loader />
        ) : Array.isArray(characterEpisodes) ? (
          characterEpisodes.map((episode) => (
            <Link key={episode.id} to={`/episodes/${episode.id}`}>
              <span>{episode.name}, </span>
            </Link>
          ))
        ) : (
          <Link to={`/episodes/${characterEpisodes.id}`}>
            <span key={characterEpisodes.id}>{characterEpisodes.name}</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CharacterDetails;
