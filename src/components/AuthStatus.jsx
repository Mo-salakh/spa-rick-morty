import { useContext } from "react";
import { AppContext } from "../context";
import { NavLink, useNavigate } from "react-router-dom";

export function AuthStatus() {
    const context = useContext(AppContext)

    if(context === null) {
        throw new Error('Error in context in component AuthStatus')
    }
    

    const navigate = useNavigate()
    
    const { user, signout, setIsSigned, isSigned } = context

    
    function handleSignout() {
        setIsSigned(false)
        signout(() => {
            navigate('/')
        })
    }
    
    if(!isSigned) {
        return (
            <>
                <p>Вы не вошли в систему</p>
                <button className="btn"><NavLink to={'/auth'}>Войти</NavLink></button>
            </>
        )
    } else {
        return (
            <>
                <p> Добро пожаловать, {user?.name} </p>
                <button onClick={handleSignout}>Выход</button>
            </>
        )
    }

}