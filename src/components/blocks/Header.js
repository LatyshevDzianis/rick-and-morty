import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='Header'>
      <div className='Logo'>
        <Link to='/'>
          <span>Rick And Morty</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/episodes'>Эпизоды</Link>
        </li>
        <li>
          <Link to='/locations'>Локации</Link>
        </li>
        <li>
          <Link to='/characters'>Персонажи</Link>
        </li>
      </ul>
    </div>
  )
}