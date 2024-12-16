import { useParams } from "react-router-dom"
import { locations } from "../location";

export function Location() {

    const { id } = useParams()

    const location = locations.find(location => location.id === Number(id));

    if (!location) {
        return <h1 className="not_found_title">Локация не найдена</h1>;
    }


    return (
        <div className="card">
            <div className="card_info">
                <h2 className="title">{location.name}</h2>
                <div className="card_text">
                    <span>location dimension: {location.dimension}</span>
                    <span>location type: {location.type}</span>
                    <span>location created date: {location.created}</span>
                </div>
            </div>
        </div>
    )
}