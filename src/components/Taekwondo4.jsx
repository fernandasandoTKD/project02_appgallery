import React from 'react'
import tkd4 from '../assets/images/tkd4.jpg'
import PropTypes from 'prop-types'

export const Taekwondo4 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={tkd4} alt="Imagen taekwondo pateo" className='image' />
    </div>
  )
}

Taekwondo4.propTypes={
    className: PropTypes.string
}
