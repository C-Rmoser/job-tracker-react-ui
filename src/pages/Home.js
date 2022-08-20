import {useAuth} from "../context/AuthContext";

const Home = () => {
    const {onLogin, isLoggedIn} = useAuth();

    return (
        <>
            <h2>Home (Public)</h2>

            {!isLoggedIn &&
                <button type="button" onClick={onLogin}>
                    Sign In
                </button>}
        </>
    );
};

export default Home;