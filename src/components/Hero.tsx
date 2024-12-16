import { useParams } from "react-router-dom";
import { heroes } from "../characters";

export function Hero() {

    const { id } = useParams()

    const hero = heroes.find(hero => hero.id === Number(id));

    if (!hero) {
        return <h1 className="not_found_title">Герой не найден</h1>;
    }

    return (
        <>
        <h2 className="title"> Информация о герое </h2>
        <div className="card">
            <div className="card_info">
                <img src={hero?.image} alt={hero?.name} />

                <div className="card_text">
                    <h2 className="title">
                        name: {hero?.name}
                    </h2>
                    <span>Gender: {hero?.gender}</span>
                    {hero?.type ? <span>Type: ${hero?.type}</span> : null}
                    <span>status: {hero?.status}</span>
                    <span>species: {hero?.species}</span>
                    <p>created: {hero?.created}</p>
                </div>
            </div>
        </div>
        </>
    )
}