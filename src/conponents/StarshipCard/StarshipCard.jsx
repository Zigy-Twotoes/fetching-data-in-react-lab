import React from 'react'

const StarshipCard = ({starship}) => {
  return (
    <div className='.card'>
        <ul>
            <li>
                <strong>{starship.name}</strong>
            </li>
            <li>
                Class: {starship.starship_class}
            </li>
            <li>
                Manufacturer: {starship.manufacturer}
            </li>
            <li>
                Model: {starship.model}
            </li>
        </ul>
    </div>
  )
}

export default StarshipCard