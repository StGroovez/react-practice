import React from 'react'
import { Card } from '../Card/Card'

const cards = [
    {
        id: 1,
        title: 'tarjeta 1',
        image: "https://source.unsplash.com/random" 
    },
    {
        id: 3,
        title: 'tarjeta 1',
        image: "https://source.unsplash.com/random" 
    },
    {
        id: 2,
        title: 'tarjeta 1',
        image: "https://source.unsplash.com/random" 
    }

]

export const Section = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className="row">
                { 
                    cards.map(card => (
                        <div className="col-md-4" key= {card.id}>
                            <Card />
                        </div>
                    ) )
                }    

            </div>
        </div>
    )
}
