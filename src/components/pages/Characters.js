import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchCharacters} from '../../actions/characterActions';
import './Characters.css'

function Characters(props) {

  useEffect(() => {
    props.fetchData('https://rickandmortyapi.com/api/character')
  }, [])

  return (
    <div className='Characters'>
      <ul>
        {props.characters.characters.map(character => {
          return (
            <li key={character.id}>
              <img src={character.image}/>
              <span>{character.name}</span>
            </li>)
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

