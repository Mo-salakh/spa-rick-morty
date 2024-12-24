import React, { createContext, useEffect, useState } from "react";




export const AppContext = createContext(null)

export function AppProvider({ children }) {

    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem('user');
            return storedUser ? JSON.parse(storedUser) : null;
        }
        catch {
           return null
        }
    });
    const [gender, setGender] = useState('');
    const [isSigned, setIsSigned] = useState(false);
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])
    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(false)
    const [qualityCh, setQualityCh] = useState(1)
    const [qualityL, setQualityL] = useState(1)
    const [qualityE, setQualityE] = useState(1)
    const [hasMore, setHasMore] = useState(false)

    function signin(userData) {
        setUser(userData);
        setIsSigned(true);
        localStorage.setItem('user', JSON.stringify(userData)) 
    }

    function getCharacters() {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/character?page=${qualityCh}`)
        .then(response => response.json())
        .then(data => { 
            setCharacters(data.results)
            setHasMore(data.results.length > 0)
            setLoading(false)
        })
        .catch(e => console.error(e.message))
        .finally(() => setLoading(false) )
    }

    function getLocations() {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/location?page=${qualityL}`)
        .then(response => response.json())
        .then(data => { 
            setLocations(data.results)
            setHasMore(data.results.length > 0)
            setLoading(false)
        })
        .catch(e => console.error(e.message))
        .finally(() => setLoading(false) )
    }
    
    function getEpisodes() {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/episode?page=${qualityE}`)
        .then(response => response.json())
        .then(data => { 
            setEpisodes(data.results)
            setHasMore(data.results.length > 0)
            setLoading(false)
        })
        .catch(e => console.error(e.message))
        .finally(() => setLoading(false) )
    }

    function signup(email, password) {
        if (!user) return false;
        if(user.email === email && user.password === password) {
            setIsSigned(true);
            return true
        }
        return false
    }

    useEffect(() => {
        localStorage.setItem('signed', isSigned)
    }, [isSigned])

    function signout(cb) {
        setIsSigned(false);
        cb()
    }

    const value = {
        user,
        isSigned,
        setIsSigned,
        gender,
        setGender,
        signin,
        signup,
        signout,
        loading,
        characters,
        setCharacters,
        locations,
        episodes,
        getCharacters,
        getLocations,
        getEpisodes,
        qualityCh,
        setQualityCh,
        qualityL,
        setQualityL,
        qualityE,
        setQualityE,
        hasMore
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
