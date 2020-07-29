import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { fetchCharacterBegin } from "../../../../actions/characterActions";
import { Loader } from "../../../blocks/Loader";
import { EPISODES_PAGE, LOCATIONS_PAGE } from "../../../../constants/routes";

import "./styles.css";

function CharacterDetails() {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters.selectedCharacter);
  const characterEpisodes = useSelector(
    (state) => state.characters.characterEpisodes
  );
  const loading = useSelector((state) => state.characters.loading);
  const loadingEpisodes = useSelector(
    (state) => state.characters.loadingEpisodes
  );
  const { id } = useParams();

  const originUrl = character.origin
    ? LOCATIONS_PAGE +
      character.origin.url.substring(character.origin.url.lastIndexOf("/") + 1)
    : LOCATIONS_PAGE;
  const locationUrl = character.location
    ? LOCATIONS_PAGE +
      character.location.url.substring(
        character.location.url.lastIndexOf("/") + 1
      )
    : LOCATIONS_PAGE;

  useEffect(() => {
    dispatch(fetchCharacterBegin(id));
  }, []);

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
              <b>Origin:</b>
              <Link to={originUrl}>
                {character.origin && character.origin.name}
              </Link>
            </li>
            <li>
              <b>Location: </b>
              <Link to={locationUrl}>
                {character.location && character.location.name}
              </Link>
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
            <Link key={episode.id} to={EPISODES_PAGE + episode.id}>
              <span>{episode.name}, </span>
            </Link>
          ))
        ) : (
          <Link to={EPISODES_PAGE + characterEpisodes.id}>
            <span key={characterEpisodes.id}>{characterEpisodes.name}</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CharacterDetails;
