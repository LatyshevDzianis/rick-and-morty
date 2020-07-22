import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { fetchEpisodes } from "../../actions/episodeActions";

function CharacterDetails(/*{ match },*/ props) {
  // let idList = [];
  // let episodesList = [];
  const characterId = props.match.params.id;
  // let character;

  const character = useSelector((state) =>
    state.characters.characters.find((item) => item.id == characterId)
  );

  useEffect(() => {
    // character = props.characters.find((item) => item.id == characterId);
    // character.episode.forEach((item) =>
    //   idList.push(item.substring(item.lastIndexOf("/") + 1))
    // );
    // console.log(idList);
    // console.log(props.episodes.filter((item) => idList.includes(item.id)));
    // console.log(props.episodes);
    // props.episodes.map((item) => {
    //   if(item.i)
    // });
    // props.fetchData(`https://rickandmortyapi.com/api/episode/${idList}`);
  }, []);

  return (
    <div className="CharacterDetails">
      <img alt="..." src={character.image} />
      <ul>
        <li>Name: {character.name}</li>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
      </ul>
    </div>
  );
}

export default CharacterDetails;

// const mapStateToProps = (state) => {
//   return {
//     characters: state.characters.characters,
//     episodes: state.episodes.episodes,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: (url) => dispatch(fetchEpisodes(url)),
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
