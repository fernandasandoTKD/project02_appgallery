import React from 'react'
import tkd1 from '../assets/images/tkd1.jpg'
import PropTypes from 'prop-types'

export const Taekwondo1 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={tkd1} alt="Imagen cinturon negro" className='image' />
    </div>
  )
}

Taekwondo1.propTypes={
  className: PropTypes.string
}
