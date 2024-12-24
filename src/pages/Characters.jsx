import { useCallback, useContext, useEffect, useRef } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useSearchCharacters } from "../components/useSearchCharacters"
import { AppContext } from "../context"

export function Characters() {
    const context = useContext(AppContext)
    const {qualityCh, setQualityCh} = context 
    const navigate = useNavigate()

    useEffect(() => {
        if(qualityCh > 1) {
            setQualityCh(1)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const { hasMore, loading, characters } = useSearchCharacters(qualityCh)
    const observer = useRef()


    const lastNodeRef = useCallback((node) => {
            if(loading) {
                return
            }
    
            if(observer.current) {
                observer.current.disconnect()
            }
    
            observer.current = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting && hasMore) {
                    setQualityCh(prevState => prevState + 1)
                }
            })
    
            if(node) {
                observer.current.observe(node)
            }
    
    }, [loading, hasMore, setQualityCh])

    return (
        <>
            <Outlet />
            <h2 className="subtitle">Персонажи</h2>
            <div className="main_content">
                <ul className="list heroes_list">
                    { characters.map((character, index) => {
                        return <li ref={characters.length === index + 1 ? lastNodeRef : null} key={character.id} onClick={() => navigate(`/characters/${character.id}`, {
                            state: character.id
                        })} className="list_item heroy_item"><img className="img" src={character.image} alt={character.name} /><p>{character.name}</p>
                        </li>
                    })}    
                </ul>    
                {loading && <div className="loading">Идет загрузка</div>}  
            </div>
        </>
    )
}