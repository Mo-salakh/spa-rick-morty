import { Outlet, useNavigate } from "react-router-dom"
import { episodes } from "../episode"

export function Episodes() {

    const navigate = useNavigate()

    return (
        <>
            <h2 className="subtitle">Эпизоды</h2>
            <div className="main_content">
                <ul className="list episode_list">
                    { episodes.map(episode => {
                        return <li key={episode.id} onClick={() => navigate(`/episodes/${episode.id}`)} className="list_item episode_item">
                            <h2>Episode {episode.id}</h2>
                            <h3>{episode.name}</h3>
                            <p>Date: {episode.air_date}</p>
                        </li>
                    })}    
                </ul>    
            </div>
            <Outlet />
        </>
    )
}