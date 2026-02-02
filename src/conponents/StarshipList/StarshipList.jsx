import React from 'react'
import StarshipCard from '../StarshipCard/StarshipCard'

const StarshipList = ({starshipsData, displayedStarships}) => {
  return (
    <div>
        <ul>
            {displayedStarships.map((starship, index) => (
                <li className='card'key={index}>
                    <StarshipCard 
                        starship={starship}
                    />
                </li>
            ))}
        </ul>

    </div>
  )
}

export default StarshipList