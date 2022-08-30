import * as React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import NoMatch from "./pages/NoMatch";
import {AuthProvider} from "./context/AuthContext";
import ProtectedRoute from "./authentication/ProtectedRoute";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Jobs from "./pages/Jobs";

const App = () => {
    return (
        <AuthProvider>
            <Navigation />

            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route
                    path="jobs"
                    element={
                        <ProtectedRoute>
                            <Jobs />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </AuthProvider>
    );
};

export default App;