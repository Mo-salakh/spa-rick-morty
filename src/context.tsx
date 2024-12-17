import React, { createContext, useState } from "react";
interface AppInterface {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isSigned: boolean;
    setIsSigned: React.Dispatch<React.SetStateAction<boolean>>;
    gender: string
    setGender: React.Dispatch<React.SetStateAction<string>>;
    signin: (userData: User) => void;
    signup: (email: string, password: string) => boolean;
    signout: any;
}

export interface User {
    name: string
    nickname: string | number
    email: string
    gender: string
    password: string
}

interface ProviderProp {
    children: React.ReactNode
}



export const AppContext = createContext< AppInterface | null>(null)

export function AppProvider({ children }: ProviderProp) {

    const [user, setUser] = useState<User | null>(() => {
        try {
            const storedUser = localStorage.getItem('user');
            return storedUser ? JSON.parse(storedUser) : null;
        }
        catch {
           return null
        }
    });
    const [gender, setGender] = useState<string>('');
    const [isSigned, setIsSigned] = useState<boolean>(false);

    function signin(userData: User) {
        setUser(userData);
        setIsSigned(true);
        localStorage.setItem('user', JSON.stringify(userData)) 
    }

    function signup(email: string, password: string): boolean {
        if (!user) return false;
        if(user.email === email && user.password === password) {
            setIsSigned(true);
            return true
        }
        return false
    }

    function signout(cb: () => {}) {
        setIsSigned(false);
        cb()
    }

    const value: AppInterface = {
        user,
        setUser,
        isSigned,
        setIsSigned,
        gender,
        setGender,
        signin,
        signup,
        signout,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
