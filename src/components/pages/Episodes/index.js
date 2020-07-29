import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchEpisodesBegin,
  setCurrentPage,
} from "../../../actions/episodeActions";
import Pagination from "../../blocks/Pagination/index";

import "./Episodes.css";
import { Loader } from "../../blocks/Loader";

function Episodes() {
  const episodes = useSelector((state) => state.episodes.episodes);
  const info = useSelector((state) => state.episodes.info);
  const currentPage = useSelector((state) => state.episodes.currentPage);
  const loading = useSelector((state) => state.episodes.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodesBegin(currentPage));
  }, []);

  const onPageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(fetchEpisodesBegin(pageNumber));
  };

  return (
    <div className="Episodes">
      {loading ? (
        <Loader />
      ) : (
        <table align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Episode</th>
              <th>Air date</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <Link to={`/episodes/${item.id}`}>{item.name}</Link>
                  </td>
                  <td>{item.episode}</td>
                  <td>{item.air_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Pagination
        pages={info.pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Episodes;
