import React, { createContext, useState } from "react";


interface AppInterface {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isSigned: boolean;
    setIsSigned: React.Dispatch<React.SetStateAction<boolean>>;
    gender: string
    setGender: React.Dispatch<React.SetStateAction<string>>;
    signupSubmit: (userData: User) => void;
    signin: (email: string, password: string) => boolean;
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
            return JSON.parse(localStorage.getItem('user') || 'null');
        } catch {
            return null;
        }
    });
    const [gender, setGender] = useState<string>('');
    const [isSigned, setIsSigned] = useState(false);

    function signupSubmit(userData: User) {
        if (!userData.email || !userData.password) {
            console.error('Некорректные данные пользователя');
            return;
        }
        setUser(userData);

        setIsSigned(true);
    }

    function signin(email: string, password: string): boolean {
        if (!user) return false;
        setIsSigned(true);
        return user.email === email && user.password === password;
    }

    function signout(cb: () => {}) {
        setUser(null)
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
        signupSubmit,
        signin,
        signout,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
