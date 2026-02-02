import { useState, useEffect } from 'react'
import './App.css'
import StarshipCard from './conponents/StarshipCard/StarshipCard'
import StarshipList from './conponents/StarshipList/StarshipList'
import StarshipSearch from './conponents/StarshipSearch/StarshipSearch'
import { showStarships } from './services/starshipService'


function App() {

  const [starshipsData, setStarshipData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const fetchData = async () => {
    const data = await showStarships()
    setStarshipData(data)
    setDisplayedStarships(data)
  }
  const searchStarship = (incomingSearchTerm) => {
    const updatedShips = starshipsData.filter(starshipData =>
      starshipData.name.toLowerCase().includes(incomingSearchTerm.toLowerCase())
    )
    setDisplayedStarships([...updatedShips]);
  }
  const reset = (event) => {
    setDisplayedStarships(starshipsData)
  }

  useEffect(() => {
    fetchData()
  }, []);


  

  return (
    <>
      <button onClick={reset}>Show All Starships</button>
      <StarshipSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchStarship={searchStarship}
        setDisplayedStarships={setDisplayedStarships}
        displayedStarships={displayedStarships}
      />
      <StarshipList 
        starshipsData={starshipsData}
        displayedStarships={displayedStarships}
      />
    </>
  )
}

export default App
