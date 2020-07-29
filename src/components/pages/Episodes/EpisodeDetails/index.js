import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchEpisodeBegin,
  fetchEpisodeCharactersBegin,
} from "../../../../actions/episodeActions";
import { Loader } from "../../../blocks/Loader";

import "./EpisodeDetails.css";
import CharactersCards from "../../../blocks/CharactersCards";

function EpisodeDetails({ match }) {
  const episodeId = match.params.id;
  let idList = [];

  const dispatch = useDispatch();
  const episode = useSelector((state) => state.episodes.selectedEpisode);
  const loading = useSelector((state) => state.episodes.loading);
  const loadingCharacters = useSelector(
    (state) => state.episodes.loadingCharacters
  );
  const episodeCharacters = useSelector(
    (state) => state.episodes.episodeCharacters
  );

  useEffect(() => {
    dispatch(fetchEpisodeBegin(episodeId));
  }, []);

  useEffect(() => {
    episode.characters &&
      episode.characters.forEach((item) =>
        idList.push(item.substring(item.lastIndexOf("/") + 1))
      );

    idList.length > 0 && dispatch(fetchEpisodeCharactersBegin(idList));
  }, [episode]);

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
