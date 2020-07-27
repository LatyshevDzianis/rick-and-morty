import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCharacterEpisodes,
  fetchCharacterEpisodesBegin,
  fetchCharacters,
} from "../../actions/characterActions";
import "./CharacterDetails.css";
import { Link } from "react-router-dom";

function CharacterDetails(/*{ match },*/ props) {
  let idList = [];
  const characterId = props.match.params.id;

  let character = props.characters.find((item) => item.id == characterId);

  character.episode.forEach((item) =>
    idList.push(item.substring(item.lastIndexOf("/") + 1))
  );

  useEffect(() => {
    props.fetchCharacterEpisodes(
      `https://rickandmortyapi.com/api/episode/${idList}`
    );
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
          {Array.isArray(props.characterEpisodes) ? (
            props.characterEpisodes.map((episode) => (
              <span key={episode.id}>{episode.name}, </span>
            ))
          ) : (
            <span key={props.characterEpisodes.id}>
              {props.characterEpisodes.name}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    characterEpisodes: state.characters.characterEpisodes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacterEpisodes: (url) => dispatch(fetchCharacterEpisodesBegin(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
