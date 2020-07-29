import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchLocationsBegin,
  setCurrentPage,
} from "../../../actions/locationActions";
import Pagination from "../../blocks/Pagination/index";

import "./Locations.css";
import { Loader } from "../../blocks/Loader";

function Locations() {
  const locations = useSelector((state) => state.locations.locations);
  const info = useSelector((state) => state.locations.info);
  const currentPage = useSelector((state) => state.locations.currentPage);
  const loading = useSelector((state) => state.locations.loading);
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
      {loading ? (
        <Loader />
      ) : (
        <table align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Dimension</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <Link to={`/locations/${item.id}`}>{item.name}</Link>
                  </td>
                  <td>{item.type}</td>
                  <td>{item.dimension}</td>
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

export default Locations;
