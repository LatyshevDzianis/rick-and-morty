import React from "react";
import "./EpisodeDetails.css";
import { useSelector } from "react-redux";

export default function EpisodeDetails(props) {
  const episodeId = props.match.params.id;
  const episode = useSelector((state) =>
    state.episodes.episodes.find((item) => item.id == episodeId)
  );

  console.log(episode);

  return (
    <div className="EpisodeDetails">
      <p>
        <b>Name:</b> {episode.name}
      </p>
      <p>
        <b>Episode:</b> {episode.episode}
      </p>
      <p>
        <b>Air date:</b> {episode.air_date}
      </p>
    </div>
  );
}
