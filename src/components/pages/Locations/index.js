import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchLocationsBegin,
  setCurrentPage,
} from "../../../actions/locationActions";
import Pagination from "../../blocks/Pagination/index";

import "./Locations.css";

function Locations() {
  const locations = useSelector((state) => state.locations.locations);
  const info = useSelector((state) => state.locations.info);
  const currentPage = useSelector((state) => state.locations.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocationsBegin(currentPage));
  }, []);

  const onPageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(fetchLocationsBegin(pageNumber));
  };

  return (
    <div className="Locations">
      {locations.map((item) => {
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
      <Pagination
        pages={info.pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Locations;
