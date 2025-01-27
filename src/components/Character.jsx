import { useNavigate, useParams } from "react-router-dom";
import { useSearchCharacters } from "./useSearchCharacters";
import { useContext } from "react";
import { AppContext } from "../context";

export function Character() {

    const { id } = useParams()
    const navigate = useNavigate()
    const context = useContext(AppContext)
    if(!context) {
        throw new Error('Error in context')
    }
    const { qualityCh } = context
    const { characters } = useSearchCharacters(qualityCh)
    const character = characters.find(character => character.id === Number(id))


    if (!character) {
        return <h1 className="not_found_title">Персонаж не найден</h1>;
    }

    return (
        <>
        <h2 className="title"> Информация о персонаже </h2>
        <div className="card">
            <div className="card_info">
                <span className="close" onClick={() => navigate('/characters')}>X</span>
                <img src={character?.image} alt={character?.name} />
                <div className="card_text">
                    <h2 className="title">
                        name: {character?.name}
                    </h2>
                    <span>Gender: {character?.gender}</span>
                    {character?.type ? <span>Type: ${character?.type}</span> : null}
                    <span>status: {character?.status}</span>
                    <span>species: {character?.species}</span>
                    <p>created: {character?.created}</p>
                </div>
            </div>
        </div>
        </>
    )
}