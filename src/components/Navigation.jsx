import React from 'react'
import { Link } from 'react-router-dom'
import { Taekwondo1 } from './Taekwondo1'
import { Taekwondo2 } from './Taekwondo2'
import { Taekwondo3 } from './Taekwondo3'
import { Taekwondo4 } from './Taekwondo4'
import { Taekwondo5 } from './Taekwondo5'
import { Taekwondo6 } from './Taekwondo6'

export const Navigation = () => {
  return (
    <div className='container mt-4 father'>
        <Link to="/taekwondo1" className='links'>
        <figure className='image-size'>
            <Taekwondo1/>
            <figcaption>Taekwondo1</figcaption>
        </figure>
        </Link>
        
        <Link to="/taekwondo2" className='links'>
        <figure className='image-size'>
            <Taekwondo2/>
            <figcaption>Taekwondo2</figcaption>
        </figure>
        </Link>

        <Link to="/taekwondo3" className='links'>
        <figure className='image-size'>
            <Taekwondo3/>
            <figcaption>Taekwondo3</figcaption>
        </figure>
        </Link>

        <Link to="/taekwondo4" className='links'>
        <figure className='image-size'>
            <Taekwondo4/>
            <figcaption>Taekwondo4</figcaption>
        </figure>
        </Link>

        <Link to="/taekwondo5" className='links'>
        <figure className='image-size'>
            <Taekwondo5/>
            <figcaption>Taekwondo5</figcaption>
        </figure>
        </Link>

        <Link to="/taekwondo6" className='links'>
        <figure className='image-size'>
            <Taekwondo6/>
            <figcaption>Taekwondo6</figcaption>
        </figure>
        </Link>

    </div>
  )
}
