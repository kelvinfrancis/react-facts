import React from 'react'
import reactlogo from '../assets/react.svg'

export default function NavBar() {
  return (
    <header>
        <nav>
            <img src={reactlogo} alt="react-logo" />
            <span>ReactFacts</span>
        </nav>
    </header>
  )
}
