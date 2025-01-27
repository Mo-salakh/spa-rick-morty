import { useCallback, useContext, useEffect, useRef } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AppContext } from "../context"
import { useSearchEpisodes } from "../components/useSeacrhEpisodes"

export function Episodes() {

    const context = useContext(AppContext)
    const navigate = useNavigate()
    const { qualityE, setQualityE } = context

    useEffect(() => {
        if(qualityE > 1) {
            setQualityE(1)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const {loading, episodes, hasMore} = useSearchEpisodes(qualityE)
    const observer = useRef()

    const lastNodeRef = useCallback((node) => {
        if(loading) {
            return;
        }

        if(observer.current) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMore) {
                setQualityE(prevState => prevState + 1)
            }
        })

        if(node) {
            observer.current.observe(node)
        }

    }, [loading, hasMore, setQualityE])


    return (
        <>  
            <Outlet />
            <h2 className="subtitle">Эпизоды</h2>
            <div className="main_content">
                <ul className="list episode_list">
                    { episodes.map((episode, index) => {
                        return <li ref={episodes.length === index + 1 ? lastNodeRef : null} key={episode.id} onClick={() => navigate(`/episodes/${episode.id}`)} className="list_item episode_item">
                            <h2>Episode {episode.id}</h2>
                            <h3>{episode.name}</h3>
                            <p>Date: {episode.air_date}</p>
                        </li>
                    })}    
                </ul>    
                {loading && <div className="loading">Идет загрузка</div>}  
            </div>
        </>
    )
}