import React, {useEffect, useState} from "react";
import {useAuth} from "../context/AuthContext";
import classNames from "classnames";

const Login = () => {
    const {onLogin} = useAuth();
    const [email, setEmail] = useState("admin@admin.at");
    const [password, setPassword] = useState("myP4ssword!");
    const [passwordRepeat, setPasswordRepeat] = useState("myP4ssword!");
    const [emailIsValid, setEmailIsValid] = useState(0);
    const [passwordsMatch, setPasswordsMatch] = useState(0);
    const [mailErrorMessage, setMailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    
    useEffect(() => {
        validatePasswords();
    }, [password]);

    useEffect(() => {
        validatePasswords();
    }, [passwordRepeat]);
    
    const validatePasswords = () => {
        const passwordsHaveValue = password && passwordRepeat;
        const passwordsAreIdentical = password === passwordRepeat;

        if (passwordsHaveValue && passwordsAreIdentical) {
            setPasswordsMatch(1);
        }

        if (passwordsHaveValue && !passwordsAreIdentical) {
            setPasswordsMatch(-1);
        }

        if (!passwordsHaveValue) {
            setPasswordsMatch(0);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const passwordsAreIdentical = password === passwordRepeat;
        const emailIsValid = validateEmail();
        
        if (!emailIsValid) {
            setEmailIsValid(-1);
            setMailErrorMessage("Email address is not valid.");
        }

        if (!passwordsAreIdentical) {
            setPasswordsMatch(-1);
            setPasswordErrorMessage("Passwords do not match.");
        }

        if (emailIsValid && passwordsAreIdentical) {
            try {
                onLogin(email, password);
            } catch (e) {
                console.log(e);
            }
        }
    }

    const validateEmail = () => {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    return (
        <div>
            {/*TODO: Secure this against bots*/}
            <form className="flex flex-col w-full max-w-2xl mx-auto">
                <div className="flex flex-col">
                    <label htmlFor="user-email">Email</label>
                    <input id="user-email"
                           className={classNames("form-input", {
                               "border-solid": emailIsValid !== 0,
                               "border": emailIsValid !== 0,
                               "border-rose-400": emailIsValid === -1,
                               "border-green-600": emailIsValid === 1,
                               "focus-border-blue": emailIsValid === 0
                           })}
                           type="text"
                           onChange={e => setEmail(e.target.value)}
                           value={email}/>
                    {mailErrorMessage && <p>{mailErrorMessage}</p>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="user-password">Password</label>
                    <input id="user-password"
                           className={classNames("form-input", {
                               "border-solid": passwordsMatch !== 0,
                               "border": passwordsMatch !== 0,
                               "border-rose-400": passwordsMatch === -1,
                               "border-green-600": passwordsMatch === 1,
                               "focus-border-blue": passwordsMatch === 0
                           })}
                           type="password"
                           onChange={e => setPassword(e.target.value)}
                           value={password}/>
                    {passwordErrorMessage && <p>{passwordErrorMessage}</p>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="user-password-repeat">Repeat Password</label>
                    <input id="user-password-repeat"
                           className={classNames("form-input", {
                               "border-solid": passwordsMatch !== 0,
                               "border": passwordsMatch !== 0,
                               "border-rose-400": passwordsMatch === -1,
                               "border-green-600": passwordsMatch === 1,
                               "focus-border-blue": passwordsMatch === 0
                           })}
                           type="password"
                           onChange={e => setPasswordRepeat(e.target.value)}
                           value={passwordRepeat}/>
                    {passwordErrorMessage && <p>{passwordErrorMessage}</p>}
                </div>
                <button className="btn-primary self-start" type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;