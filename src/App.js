import * as React from 'react';
import {
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import {AuthProvider, useAuth} from "./context/AuthContext";
import ProtectedRoute from "./authentication/ProtectedRoute";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <AuthProvider>
            <h1>React Router</h1>

            <Navigation />

            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route
                    path="dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="admin"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<NoMatch />} />
            </Routes>
        </AuthProvider>
    );
};

export default App;