import React, { useContext } from "react";
import { AppContext } from "../context";
import { Navigate, useLocation } from "react-router-dom";

export function PrivateRouters({children} : any) {
    const context = useContext(AppContext)
    const location = useLocation()

    if(context === null) {
        throw new Error('Ошибка в компоненте PrivateRouters')
    }

    if(context.isSigned === false) {
        return <Navigate to={'/auth'} state={{from: location.pathname}} replace />
    }

    return children
}