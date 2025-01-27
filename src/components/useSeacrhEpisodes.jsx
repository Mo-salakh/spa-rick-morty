import { useEffect, useState } from "react"

export function useSearchEpisodes(n) {
    const [episodes, setEpisodes] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/episode?page=${n}`)
        .then(response => response.json())
        .then((data) => {
            setEpisodes((prevEpisodes) => {
                const newEpisodes = data.results.filter((location => !prevEpisodes.some(prevLoc => prevLoc.id === location.id)))
                return [...prevEpisodes, ...newEpisodes];
            });
            setHasMore(data.info?.next !== null);
            setLoading(false);
        })
        .catch(e => console.error(e.message))
        .finally(() => setLoading(false));

    }, [n])

    return {
        episodes,
        hasMore,
        loading
    }
}