import React from 'react'
import './style.css'

export const Card = () => {
    return (
        <div className='card text-center'>
            
            <div className="card-body">
                <h4 className='card-title'>Card Text</h4>
                <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ad corporis inventore, tempora assumenda quo suscipit ab tenetur sequi, blanditiis hic nesciunt esse officiis eos praesentium? Quae sequi distinctio minus.</p>
                <a href="#!" className='btn btn-outline-secondary'>
                    Go to this website
                </a>
            </div>
        </div>
    )
}



