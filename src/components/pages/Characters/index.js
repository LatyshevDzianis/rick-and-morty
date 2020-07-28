import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCharactersBegin,
  setCurrentPage,
} from "../../../actions/characterActions";
import Pagination from "../../blocks/Pagination/index";

import "./Characters.css";

function Characters(props) {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const info = useSelector((state) => state.characters.info);
  const currentPage = useSelector((state) => state.characters.currentPage);

  useEffect(() => {
    dispatch(
      fetchCharactersBegin(
        `https://rickandmortyapi.com/api/character?page=${props.currentPage}`
      )
    );
  }, []);

  const onPageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(
      fetchCharactersBegin(
        `https://rickandmortyapi.com/api/character?page=${pageNumber}`
      )
    );
  };

  return (
    <div className="Characters">
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <Link to={`/characters/${character.id}`}>
                <div>
                  <img src={character.image} alt="..." />
                  <span>{character.name}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination
        pages={info.pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Characters;
