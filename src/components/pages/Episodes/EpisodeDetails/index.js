import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchEpisodeCharactersBegin } from "../../../../actions/episodeActions";
import { Loader } from "../../../blocks/Loader";

import "./EpisodeDetails.css";
import CharactersCards from "../../../blocks/CharactersCards";

function EpisodeDetails({ match }) {
  const episodes = useSelector((state) => state.episodes.episodes);
  const loading = useSelector((state) => state.episodes.loading);
  const episodeCharacters = useSelector(
    (state) => state.episodes.episodeCharacters
  );
  const dispatch = useDispatch();

  let idList = [];
  const episodeId = match.params.id;

  let episode = episodes.find((item) => item.id === +episodeId);

  episode.characters.forEach((item) =>
    idList.push(item.substring(item.lastIndexOf("/") + 1))
  );

  useEffect(() => {
    dispatch(fetchEpisodeCharactersBegin(idList));
  }, []);

  return (
    <div className="EpisodeDetails">
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
        <br />
      </p>
      {loading ? (
        <Loader />
      ) : (
        <CharactersCards characters={episodeCharacters} />
      )}
    </div>
  );
}

export default EpisodeDetails;
