import React, { useEffect } from "react";
import "./LocationDetails.css";
import { connect } from "react-redux";
import {
  fetchLocationCharacters,
  fetchLocationCharactersBegin,
} from "../../actions/locationActions";

function LocationDetails(props) {
  let idList = [];
  const locationId = props.match.params.id;

  let location = props.locations.find((item) => item.id == locationId);

  location.residents.forEach((item) =>
    idList.push(item.substring(item.lastIndexOf("/") + 1))
  );

  useEffect(() => {
    props.fetchLocationCharacters(
      `https://rickandmortyapi.com/api/character/${idList}`
    );
  }, []);

  return (
    <div className="LocationDetails">
      <p>
        <b>Name: </b> {location.name}
      </p>
      <p>
        <b>Type: </b> {location.type}
      </p>
      <p>
        <b>Dimension: </b> {location.dimension}
      </p>
      <p>
        <b>Characters: </b>
        {Array.isArray(props.locationCharacters) ? (
          props.locationCharacters.map((character) => (
            <span key={character.id}>{character.name}, </span>
          ))
        ) : (
          <span key={props.locationCharacters.id}>
            {props.locationCharacters.name}
          </span>
        )}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    locationCharacters: state.locations.locationCharacters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocationCharacters: (url) =>
      dispatch(fetchLocationCharactersBegin(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);
