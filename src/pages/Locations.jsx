import { useCallback, useContext, useEffect, useRef } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useSearchLocations } from "../components/useSearchLoactions"
import { AppContext } from "../context"

export function Locations() {
    const navigate = useNavigate()
    const observer = useRef()
    const context = useContext(AppContext)    
    const {qualityL, setQualityL} = context 
    useEffect(() => {
        if(qualityL > 1) {
            setQualityL(1)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {locations, loading, hasMore} = useSearchLocations(qualityL)
    

    const lastNodeRef = useCallback((node) => {
        if(loading) {
            return
        }

        if(observer.current) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMore) {
                setQualityL(prevState => prevState + 1)
            }
        })

        if(node) {
            observer.current.observe(node)
        }

    }, [loading, hasMore, setQualityL])


    return (
        <>
            <Outlet />
            <h2 className="subtitle">Локации</h2>
            <div className="main_content">
            <ul className="list location_list">
                {locations.map((location, index) => {
                    return (
                        <li 
                            key={location.id} 
                            ref={locations.length === index + 1 ? lastNodeRef : null} 
                            onClick={() => navigate(`/locations/${location.id}`)} 
                            className="list_item location_item"
                        >
                            <h2>location {location.id}</h2>
                            <h3>{location.name}</h3>
                            <p>Type: {location.type}</p>
                        </li>
                    );
                })}
            </ul>

                {loading && <div className="loading">Идет загрузка</div>}    
            </div>
        </>
    )
}