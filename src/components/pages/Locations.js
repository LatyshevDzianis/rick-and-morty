import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLocations, setCurrentPage } from "../../actions/locationActions";
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Dimension</th>
          </tr>
        </thead>
        <tbody>
          {props.locations.map((location) => {
            return (
              <tr key={location.id}>
                <td>
                  <Link to={`/locations/${location.id}`}>{location.name}</Link>
                </td>
                <td>
                  <Link to={`/locations/${location.id}`}>{location.type}</Link>
                </td>
                <td>
                  <Link to={`/locations/${location.id}`}>
                    {location.dimension}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
    fetchData: (url) => dispatch(fetchLocations(url)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
