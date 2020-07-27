import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchLocations,
  fetchLocationsBegin,
  setCurrentPage,
} from "../../actions/locationActions";
import "./Locations.css";
import Breadcrumbs from "../blocks/Breadcrumbs";
import { Link } from "react-router-dom";

function Locations(props) {
  useEffect(() => {
    props.fetchData("https://rickandmortyapi.com/api/location");
  }, []);

  const onPageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.fetchData(
      `https://rickandmortyapi.com/api/location?page=${pageNumber}`
    );
  };

  return (
    <div className="Locations">
      {props.locations.map((item) => {
        return (
          <Link key={item.id} to={`/locations/${item.id}`}>
            <div className="LocationItem">
              <span>
                <b>Name:</b> {item.name}
              </span>
              <br />
              <span>
                <b>Type:</b> {item.type}
              </span>
              <br />
              <span>
                <b>Dimension:</b> {item.dimension}
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    info: state.locations.info,
    currentPage: state.locations.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchLocationsBegin(url)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
