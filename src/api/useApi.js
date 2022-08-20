import config from "../config.json";
import {useEffect, useState} from "react";
import FetchWrapper from "./FetchWrapper";
import {useNavigate} from "react-router-dom";

const api = new FetchWrapper(config.API_BASE_URL);

export function useApi() {
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = useState(config.emailAddress);
    const [password, setPassword] = useState(config.password);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [tokenExpiresAt, setTokenExpiresAt] = useState(localStorage.getItem("tokenExpiresAt"));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));
    const [refreshTokenExpiresAt, setRefreshTokenExpiresAt] = useState(localStorage.getItem("refreshTokenExpiresAt"));

    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);
    useEffect(() => {
        localStorage.setItem("tokenExpiresAt", tokenExpiresAt);
    }, [tokenExpiresAt]);
    useEffect(() => {
        localStorage.setItem("refreshToken", refreshToken);
    }, [refreshToken]);
    useEffect(() => {
        localStorage.setItem("refreshTokenExpiresAt", refreshTokenExpiresAt)
    }, [refreshTokenExpiresAt]);

    const getJobs = async () => {
        const token = await authenticate();
        const jobs = await api.getAuthorized("/jobs", token);
        return jobs;
    }

    const authenticate = async () => {
        if (tokenIsValid()) {
            console.debug("Current Token is valid!");
            return token;
        }

        if (refreshTokenIsValid()) {
            console.debug("Refresh Token is valid!");
            return await refreshWebToken();
        }

        console.log("Nothing is valid, logging in from scratch");
        clearTokenDetails();

        return await logIn();
    }

    const logIn = async () => {
        const tokenDetails = await api.post("/token",
            {
                emailAddress,
                password
            });

        storeTokenDetails(tokenDetails);
        const {token} = tokenDetails;

        return token;
    }

    const logOut = async () => {
        clearTokenDetails();
    }

    const refreshWebToken = async () => {
        console.log("Refreshing token...");
        try {
            const tokenDetails = await api.post("/refresh-token",
                {
                    accessToken: token,
                    refreshToken: refreshToken
                });
            
            storeTokenDetails(tokenDetails);

            const {token: newToken} = tokenDetails;

            return newToken;
        } catch (e) {
            console.error(e.message);
        }

    }

    const tokenIsValid = () => {
        console.log(tokenExpiresAt);
        const expiresAt = new Date(Date.parse(tokenExpiresAt));
        // Subtract 1 min from the current date to avoid potential issues in the future
        const now = new Date(new Date(Date.now()).setMinutes(-1));

        return now.getTime() < expiresAt.getTime();
    }

    const refreshTokenIsValid = () => {
        console.log(refreshTokenExpiresAt);
        const expiresAt = new Date(Date.parse(refreshTokenExpiresAt));
        // Subtract 1 min from the current date to avoid potential issues in the future
        const now = new Date(new Date(Date.now()).setMinutes(-1));

        return now.getTime() < expiresAt.getTime();
    }

    const storeTokenDetails = tokenDetails => {
        const {token, tokenExpiresAt, refreshToken, refreshTokenExpiresAt} = tokenDetails;

        setToken(token);
        setTokenExpiresAt(tokenExpiresAt);
        setRefreshToken(refreshToken);
        setRefreshTokenExpiresAt(refreshTokenExpiresAt);
    }

    const clearTokenDetails = () => {
        setToken("");
        setTokenExpiresAt("");
        setRefreshToken("");
        setRefreshTokenExpiresAt("");
    }

    return {logIn, logOut, getJobs};
}