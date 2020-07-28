import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchLocationCharactersBegin } from "../../../../actions/locationActions";
import { Loader } from "../../../blocks/Loader";

import "./LocationDetails.css";

function LocationDetails({ match }) {
  const loading = useSelector((state) => state.locations.loading);
  const locations = useSelector((state) => state.locations.locations);
  const locationCharacters = useSelector(
    (state) => state.locations.locationCharacters
  );
  const dispatch = useDispatch();

  let idList = [];
  const locationId = match.params.id;

  let location = locations.find((item) => item.id === +locationId);

  location.residents.forEach((item) =>
    idList.push(item.substring(item.lastIndexOf("/") + 1))
  );

  useEffect(() => {
    dispatch(fetchLocationCharactersBegin(idList));
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
        <br />
        {loading ? (
          <Loader />
        ) : Array.isArray(locationCharacters) ? (
          locationCharacters.map((character) => (
            <span key={character.id}>{character.name}, </span>
          ))
        ) : (
          <span key={locationCharacters.id}>{locationCharacters.name}</span>
        )}
      </p>
    </div>
  );
}

export default LocationDetails;
