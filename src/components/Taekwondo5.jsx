import React from 'react'
import tkd5 from '../assets/images/tkd5.jpg'
import PropTypes from 'prop-types'

export const Taekwondo5 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={tkd5} alt="Pateo taekwondo"className='image' />
    </div>
  )
}
Taekwondo5.propTypes={
    className: PropTypes.string
}
