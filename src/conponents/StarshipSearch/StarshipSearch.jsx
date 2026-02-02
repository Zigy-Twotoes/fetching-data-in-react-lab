import React from 'react'
import { useState } from 'react'

const StarshipSearch = ({ searchTerm, setSearchTerm, searchStarship, displayedStarships }) => {

    const [prevSearchTerm, setPrevSearchTerm] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setPrevSearchTerm(searchTerm)
        searchStarship(searchTerm)
        setSearchTerm('')
               
    };

  return (
    <div>
        <h2>Starship Search</h2>
        <p>{prevSearchTerm ? `Last Search: ${prevSearchTerm}` : "Search for a starship by name."}</p>
        <p>{prevSearchTerm ? `Number of results: ${displayedStarships.length}` : null}</p>
        <p></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor='starship'>What vessel are you looking for?</label>
            <input
                id='starship'
                type='text'
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type='submit'>Scan</button>
        </form>
    </div>
  )
}

export default StarshipSearch