import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchEpisodesBegin,
  setCurrentPage,
} from "../../../actions/episodeActions";
import Pagination from "../../blocks/Pagination/index";

import "./Episodes.css";

function Episodes() {
  const episodes = useSelector((state) => state.episodes.episodes);
  const info = useSelector((state) => state.episodes.info);
  const currentPage = useSelector((state) => state.episodes.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchEpisodesBegin(
        `https://rickandmortyapi.com/api/episode?page=${currentPage}`
      )
    );
  }, []);

  const onPageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(
      fetchEpisodesBegin(
        `https://rickandmortyapi.com/api/episode?page=${pageNumber}`
      )
    );
  };

  return (
    <div className="Episodes">
      {episodes.map((item) => {
        return (
          <Link key={item.id} to={`/episodes/${item.id}`}>
            <div className="EpisodeItem">
              <span>
                <b>Episode:</b> {item.episode}
              </span>
              <br />
              <span>
                <b>Name:</b> {item.name}
              </span>
              <br />
              <span>
                <b>Air date:</b> {item.air_date}
              </span>
            </div>
          </Link>
        );
      })}
      <Pagination
        pages={info.pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Episodes;
