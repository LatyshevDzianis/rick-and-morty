import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchLocationsBegin,
  setCurrentPage,
} from "../../../actions/locationActions";
import Pagination from "../../blocks/Pagination";
import { Loader } from "../../blocks/Loader";
import { LOCATIONS_PAGE } from "../../../constants/routes";

import "./styles.css";

function Locations() {
  const locations = useSelector((state) => state.locations.items);
  const info = useSelector((state) => state.locations.info);
  const currentPage = useSelector((state) => state.locations.currentPage);
  const loading = useSelector((state) => state.locations.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocationsBegin({ page: currentPage }));
  }, []);

  const generateLocationLink = (id) => `${LOCATIONS_PAGE}${id}`;

  const onPageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(fetchLocationsBegin({ page: pageNumber }));
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
                    <Link to={generateLocationLink(item.id)}>{item.name}</Link>
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
