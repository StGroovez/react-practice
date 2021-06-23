import React from 'react'
import { Card } from '../Card/Card'

const cards = [
    {
        id: 1,
        title: 'card 1',
        image: "https://source.unsplash.com/random" 
    },
    {
        id: 2,
        title: 'card 2',
        image: "https://source.unsplash.com/random" 
    },
    {
        id: 3,
        title: 'card 3',
        image: "https://source.unsplash.com/random",
        text: 'jaja' 
    }

]

export const Section = () => {


    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className="row">
                { 
                    cards.map(card => (
                        <div className="col-md-4" key= {card.id}> 
                            <Card title={card.title} imageRandom={card.image} text={card.text}/>
                        </div>
                    ) )
                }    
            </div>
        </div>
    )
}
