import React, {useEffect, useState} from "react";
import {useAuth} from "../context/AuthContext";
import classNames from "classnames";
import Spinner from "../components/Spinner";

const Login = () => {
    const {onLogin} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("admin@admin.at");
    const [password, setPassword] = useState("myP4ssword!");
    const [emailIsValid, setEmailIsValid] = useState(0);
    const [mailErrorMessage, setMailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailIsValid = validateEmail();

        if (!emailIsValid) {
            setEmailIsValid(-1);
            setMailErrorMessage("Email address is not valid.");
        }

        // TODO: If 401 unauthorized: fail message + login again
        if (emailIsValid) {
            try {
                setIsLoading(true);
                await onLogin(email, password);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
    }

    const validateEmail = () => {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
    
    return (
        <div>
            {isLoading && <Spinner/>}
            <div className="container flex flex-col items-center mx-auto px-4">
                {!isLoading &&
                    <form className="flex flex-col w-full max-w-2xl mx-auto">
                        <div className="flex flex-col">
                            <label className="mt-2" htmlFor="user-email">Email</label>
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
                            {mailErrorMessage && <p className="text-sm text-rose-400">{mailErrorMessage}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label className="mt-2" htmlFor="user-password">Password</label>
                            <input id="user-password"
                                   className="form-input"
                                   type="password"
                                   onChange={e => setPassword(e.target.value)}
                                   value={password}/>
                            {passwordErrorMessage && <p className="text-sm text-rose-400">{passwordErrorMessage}</p>}
                        </div>
                        <button className="btn-primary self-start" type="submit" onClick={handleSubmit}>Login</button>
                    </form>
                }
            </div>
        </div>
    );
}

export default Login;