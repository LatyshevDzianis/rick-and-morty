import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchCharacters } from '../../actions/characterActions';

function Characters(props) {

  useEffect(() => {
    props.fetchData("https://rickandmortyapi.com/api/character")
  }, [])

  return (
    <div>
      <ul>
        {props.characters.map(character => {
          return <li key={character.key}>{character.name}</li>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchCharacters(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)

