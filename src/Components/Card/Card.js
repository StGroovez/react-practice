import React from 'react'
import './style.css'
import Proptypes from 'prop-types'

export const Card = ({title, imageRandom, text}) => {

    return (
        <div className='card text-center'>
            <img src={imageRandom} alt="" />
            <div className="card-body">
                <h4 className='card-title'>{title}</h4>
                <p className='card-text'>
                    {
                        text ? text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ad corporis inventore, tempora assumenda quo suscipit ab tenetur sequi, blanditiis hic nesciunt esse officiis eos praesentium? Quae sequi distinctio minus.'
                    }
                </p>
                <a href="#!" className='btn btn-outline-secondary'>
                    Go to this website
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: Proptypes.string.isRequired,
    imageRandom: Proptypes.string,
    text: Proptypes.string
}




