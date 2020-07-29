import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchLocationBegin,
  fetchLocationCharactersBegin,
} from "../../../../actions/locationActions";
import { Loader } from "../../../blocks/Loader";

import "./LocationDetails.css";
import CharactersCards from "../../../blocks/CharactersCards";

function LocationDetails({ match }) {
  const locationId = match.params.id;
  let idList = [];

  const dispatch = useDispatch();
  const location = useSelector((state) => state.locations.selectedLocation);
  const loading = useSelector((state) => state.locations.loading);
  const loadingCharacters = useSelector(
    (state) => state.locations.loadingCharacters
  );

  const locationCharacters = useSelector(
    (state) => state.locations.locationCharacters
  );

  useEffect(() => {
    dispatch(fetchLocationBegin(locationId));
  }, []);

  useEffect(() => {
    location.residents &&
      location.residents.forEach((item) =>
        idList.push(item.substring(item.lastIndexOf("/") + 1))
      );

    idList.length > 0 && dispatch(fetchLocationCharactersBegin(idList));
  }, [location]);

  return (
    <div className="LocationDetails">
      {loading ? (
        <Loader />
      ) : (
        <div className="Info">
          <ul>
            <li>
              <b>Name: </b>
              {location.name}
            </li>
            <li>
              <b>Type: </b>
              {location.type}
            </li>
            <li>
              <b>Dimension: </b>
              {location.dimension}
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
        <CharactersCards characters={locationCharacters} />
      )}
    </div>
  );
}

export default LocationDetails;
