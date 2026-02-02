export const showStarships = async (starship) => {
    try {
        const response = await fetch ('https://swapi.info/api/starships')
        if (!response.ok) {
            throw new Error('Failed to fetch starships.');
        }
        const data = await response.json()
        return data

    } catch (error) {
        console.log (error)
    }
}