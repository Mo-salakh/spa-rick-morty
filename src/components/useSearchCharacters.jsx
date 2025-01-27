import { useEffect, useState } from "react"

export function useSearchCharacters(n) {
    const [characters, setCharacters] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/character?page=${n}`)
        .then(response => response.json())
        .then((data) => {
            setCharacters((prevLocations) => {
                const newLocations = data.results.filter((location => !prevLocations.some(prevLoc => prevLoc.id === location.id)))
                return [...prevLocations, ...newLocations];
            });
            setHasMore(data.info?.next !== null);
            setLoading(false);
        })
        .catch(e => console.error(e.message))
        .finally(() => setLoading(false));

    }, [n])

    return {
        characters,
        hasMore,
        loading
    }
}