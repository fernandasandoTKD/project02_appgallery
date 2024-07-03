import React from 'react'
import tkd2 from '../assets/images/tkd2.jpg'
import PropTypes from 'prop-types'

export const Taekwondo2 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={tkd2} alt="Imagen poomsae negro" className='image' />
    </div>
  )
}
Taekwondo2.propTypes={
    className: PropTypes.string
}