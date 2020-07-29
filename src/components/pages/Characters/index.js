import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCharactersBegin,
  setCurrentPage,
} from "../../../actions/characterActions";
import Pagination from "../../blocks/Pagination/index";
import CharactersCards from "../../blocks/CharactersCards";

import "./Characters.css";
import { Loader } from "../../blocks/Loader";

function Characters() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const loading = useSelector((state) => state.characters.loading);
  const info = useSelector((state) => state.characters.info);
  const currentPage = useSelector((state) => state.characters.currentPage);

  useEffect(() => {
    dispatch(fetchCharactersBegin(currentPage));
  }, []);

  const onPageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(fetchCharactersBegin(pageNumber));
  };

  return (
    <React.Fragment>
      <div className="Characters">
        {loading ? <Loader /> : <CharactersCards characters={characters} />}
      </div>
      <Pagination
        pages={info.pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </React.Fragment>
  );
}

export default Characters;
