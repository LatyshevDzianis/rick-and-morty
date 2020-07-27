import React, { useEffect } from "react";
import "./EpisodeDetails.css";
import { connect } from "react-redux";
import {
  fetchEpisodeCharacters,
  fetchEpisodeCharactersBegin,
} from "../../actions/episodeActions";

function EpisodeDetails(props) {
  let idList = [];
  const episodeId = props.match.params.id;

  let episode = props.episodes.find((item) => item.id == episodeId);

  episode.characters.forEach((item) =>
    idList.push(item.substring(item.lastIndexOf("/") + 1))
  );

  useEffect(() => {
    props.fetchEpisodeCharacters(
      `https://rickandmortyapi.com/api/character/${idList}`
    );
  }, []);

  return (
    <div className="EpisodeDetails">
      {console.log(props)}
      <p>
        <b>Name: </b> {episode.name}
      </p>
      <p>
        <b>Episode: </b> {episode.episode}
      </p>
      <p>
        <b>Air date: </b> {episode.air_date}
      </p>
      <p>
        <b>Characters: </b>
        {Array.isArray(props.episodeCharacters) ? (
          props.episodeCharacters.map((character) => (
            <span key={character.id}>{character.name}, </span>
          ))
        ) : (
          <span key={props.episodeCharacters.id}>
            {props.episodeCharacters.name}
          </span>
        )}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes.episodes,
    episodeCharacters: state.episodes.episodeCharacters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEpisodeCharacters: (url) => dispatch(fetchEpisodeCharactersBegin(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetails);
