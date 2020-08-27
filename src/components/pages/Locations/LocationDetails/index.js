import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchLocationBegin } from "../../../../actions/locationActions";
import CharactersCards from "../../../blocks/CharactersCards";
import { Loader } from "../../../blocks/Loader";

import "./styles.css";

function LocationDetails() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.locations.selectedLocation);
  const loading = useSelector((state) => state.locations.loading);
  const locationCharacters = useSelector(
    (state) => state.locations.selectedLocation.locationCharacters
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchLocationBegin(id));
  }, []);

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
          <CharactersCards
            characters={locationCharacters ? locationCharacters : []}
          />
        </div>
      )}
    </div>
  );
}

export default LocationDetails;
