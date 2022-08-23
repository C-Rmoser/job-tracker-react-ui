import {useAuth} from "../context/AuthContext";
import Login from "./Login";

const Home = () => {
    const {isLoggedIn} = useAuth();

    return (
        <div className="container mx-auto px-4">
            <h2>Home (Public)</h2>

            {!isLoggedIn && <Login/>}
        </div>
    );
};

export default Home;