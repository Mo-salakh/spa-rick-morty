import { Outlet, useNavigate } from "react-router-dom"
import { locations } from "../location"

export function Locations() {
    const navigate = useNavigate()

    return (
        <>
            <h2 className="subtitle">Локации</h2>
            <div className="main_content">
                <ul className="list location_list">
                    { locations.map(location => {
                        return <li key={location.id} onClick={() => navigate(`/locations/${location.id}`)} className="list_item location_item">
                            <h2>location {location.id}</h2>
                            <h3>{location.name}</h3>
                            <p>Type: {location.type}</p>
                        </li>
                    })}    
                </ul>    
            </div>
            <Outlet />
        </>
    )
}