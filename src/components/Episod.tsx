import { useParams } from "react-router-dom"
import { episodes } from "../episode";

export function Episod() {

    const { id } = useParams()

    const episode = episodes.find(hero => hero.id === Number(id));

    if (!episode) {
        return <h1 className="not_found_title">Эпизод не найден</h1>;
    }


    return (
        <div className="card">
            <div className="card_info">
                <h2 className="title">{episode.name}</h2>
                <div className="card_text">
                    <span>episode code: {episode.episode}</span>
                    <span>episode date: {episode.air_date}</span>
                    <span>episode created date: {episode.created}</span>
                </div>
            </div>
        </div>
    )
}