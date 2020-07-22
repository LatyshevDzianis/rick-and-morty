import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEpisodes, setCurrentPage } from "../../actions/episodeActions";
import { Link } from "react-router-dom";
import "./Episodes.css";
import Breadcrumbs from "../blocks/Breadcrumbs";

function Episodes(props) {
  useEffect(() => {
    props.fetchData(
      `https://rickandmortyapi.com/api/episode?page=${props.currentPage}`
    );
  }, []);

  const onPageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.fetchData(
      `https://rickandmortyapi.com/api/episode?page=${pageNumber}`
    );
  };

  // const breadcrumbs = [];
  //
  // for (let i = 1; i <= props.info.pages; i++) {
  //   breadcrumbs.push(
  //     <span
  //       onClick={() => onPageChange(i)}
  //       className={props.currentPage === i ? "selected" : null}
  //       key={i}
  //     >
  //       {i}
  //     </span>
  //   );
  // }

  return (
    <div className="Episodes">
      {props.episodes.episodes.map((item) => {
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
      <Breadcrumbs
        pages={props.info.pages}
        currentPage={props.currentPage}
        onPageChange={onPageChange}
      />
      {/*<div className="Breadcrumbs">{breadcrumbs}</div>*/}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes,
    info: state.episodes.info,
    currentPage: state.episodes.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchEpisodes(url)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
