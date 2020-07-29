import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchEpisodeBegin } from "../../../../actions/episodeActions";
import { Loader } from "../../../blocks/Loader";
import CharactersCards from "../../../blocks/CharactersCards";

import "./styles.css";

function EpisodeDetails() {
  const dispatch = useDispatch();
  const episode = useSelector((state) => state.episodes.selectedEpisode);
  const loading = useSelector((state) => state.episodes.loading);
  const loadingCharacters = useSelector(
    (state) => state.episodes.loadingCharacters
  );
  const episodeCharacters = useSelector(
    (state) => state.episodes.episodeCharacters
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchEpisodeBegin(id));
  }, []);

  return (
    <div className="EpisodeDetails">
      {loading ? (
        <Loader />
      ) : (
        <div className="Info">
          <ul>
            <li>
              <b>Name: </b>
              {episode.name}
            </li>
            <li>
              <b>Episode: </b>
              {episode.episode}
            </li>
            <li>
              <b>Air date: </b>
              {episode.air_date}
            </li>
            <li>
              <b>Characters: </b>
            </li>
          </ul>
        </div>
      )}
      {loadingCharacters ? (
        <Loader />
      ) : (
        <CharactersCards characters={episodeCharacters} />
      )}
    </div>
  );
}

export default EpisodeDetails;
