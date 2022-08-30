import React, {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useApi} from "../api/useApi";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const {logIn, logOut} = useApi();
    const [isLoggedIn, _setIsLoggedIn] = useState(false)
    
    const setIsLoggedIn = isLoggedIn => {
        _setIsLoggedIn(isLoggedIn);
        localStorage["isLoggedIn"] = isLoggedIn.toString();
    }

    useEffect(() => {
        setIsLoggedIn(localStorage["isLoggedIn"] === "true");
    }, []);
    
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/home");
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [isLoggedIn]);

    const handleLogin = async (email, password) => {
        await logIn(email, password);
        setIsLoggedIn(true);
    };

    const handleLogout = async () => {
        await logOut();
        setIsLoggedIn(false);
    };

    const value = {
        isLoggedIn,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
