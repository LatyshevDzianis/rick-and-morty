import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCharactersBegin,
  setCurrentPage,
} from "../../actions/characterActions";
import "./Characters.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "../blocks/Breadcrumbs";

function Characters(props) {
  useEffect(() => {
    props.fetchData(
      `https://rickandmortyapi.com/api/character?page=${props.currentPage}`
    );
  }, []);

  const onPageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.fetchData(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}`
    );
  };

  return (
    <div className="Characters">
      <ul>
        {props.characters.map((character) => {
          return (
            <li key={character.id}>
              <Link to={`/characters/${character.id}`}>
                <div>
                  <img src={character.image} />
                  <span>{character.name}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
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
    characters: state.characters.characters,
    info: state.characters.info,
    currentPage: state.characters.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchCharactersBegin(url)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
