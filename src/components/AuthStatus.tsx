import { useContext } from "react";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";

export function AuthStatus() {
    const context = useContext(AppContext)

    if(context === null) {
        throw new Error('Error in context in component AuthStatus')
    }

    const navigate = useNavigate()

    const { user, signout } = context

    if(user === null) {
        return <p>Вы не зарегистрированы</p>
    }

    function handleSignout() {
        signout(() => {
            navigate('/')
        })
    }

    return (
        <>
            <p> Welcome user {user.name}</p>
            <button onClick={handleSignout}>Выход</button>
        </>
    )

}