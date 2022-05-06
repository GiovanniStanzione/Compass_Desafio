import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [userFavRepos, setUserFavRepos] = useState([]);

    return (
        <context.Provider value={{
            userData,
            userRepos,
            userFavRepos,
            setUserData,
            setUserRepos,
            setUserFavRepos
        }}>
            {props.children}
        </context.Provider>
    );
}