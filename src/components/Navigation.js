import {useAuth} from "../context/AuthContext";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    const { isLoggedIn, onLogout } = useAuth();

    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/admin">Admin</NavLink>

            {isLoggedIn && (
                <button type="button" onClick={onLogout}>
                    Sign Out
                </button>
            )}
        </nav>
    );
};

export default Navigation;