import React from 'react'
import tkd3 from '../assets/images/tkd3.jpg'
import PropTypes from 'prop-types'

export const Taekwondo3 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={tkd3} alt="Imagen combate"  className='image'/>
    </div>
  )
}

Taekwondo3.propTypes={
    className: PropTypes.string
}
