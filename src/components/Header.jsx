import React from 'react'
import PropTypes from 'prop-types'


function Header({text, bgColor, textColor}) {

  const headerStyle = {
    backgroundColor: bgColor, 
    color:textColor,
  }

  return (
    <header style = {headerStyle}>
        <div className='container'>
            <h1>{text}</h1>

        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'grey',
    textColor: 'lightgreen',
}

Header.prototype = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header