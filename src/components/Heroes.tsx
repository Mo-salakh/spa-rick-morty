import { Outlet, useNavigate } from "react-router-dom"
import { heroes } from "../characters"

export function Heroes() {

    const navigate = useNavigate()
    
    return (
        <>
            <h2 className="subtitle">Главные Герои</h2>
            <div className="main_content">
                <ul className="list heroes_list">
                    { heroes.map(hero => {
                        return <li key={hero.id} onClick={() => navigate(`/heroes/${hero.id}`, {
                            state: hero.id
                        })} className="list_item heroy_item"><img className="img" src={hero.image} alt={hero.name} /><p>{hero.name}</p>
                        </li>
                    })}    
                </ul>    
            </div>
            <Outlet />
        </>
    )
}