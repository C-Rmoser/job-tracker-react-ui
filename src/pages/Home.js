import {useAuth} from "../context/AuthContext";
import Login from "./Login";
import ProjectDetails from "./ProjectDetails";

const Home = () => {
    const {isLoggedIn} = useAuth();

    return (
        <div className="container mx-auto px-8 max-w-screen-lg">
            {!isLoggedIn && <Login/>}
            {isLoggedIn && <ProjectDetails />}
        </div>
    );
};

export default Home;