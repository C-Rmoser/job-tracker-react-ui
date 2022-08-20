import {useAuth} from "../context/AuthContext";
import {Navigate, useLocation} from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to="/home" replace state={{ from: location }} />;
    }

    return children;
};

export default ProtectedRoute;