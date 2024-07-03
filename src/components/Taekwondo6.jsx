import React from 'react'
import tkd6 from '../assets/images/tkd6.jpg'
import PropTypes from 'prop-types'
export const Taekwondo6 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={tkd6} alt="Pateo"  className='image'/>
    </div>
  )
}
Taekwondo6.propTypes={
    className: PropTypes.string
}
