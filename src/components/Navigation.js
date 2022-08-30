import {useAuth} from "../context/AuthContext";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import classNames from "classnames";

const Navigation = () => {
    const {isLoggedIn, onLogout} = useAuth();
    const [openMenu, setOpenMenu] = useState(false);
    
    const handleBurgerMenuClick = e => {
        e.preventDefault();
        
        setOpenMenu(!openMenu);
    }

    return <nav className="mb-4 bg-white border-gray-200 px-2 sm:px-4 py-2.5 md:py-8 bg-gray-900 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <button onClick={handleBurgerMenuClick}
                type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-200 hover:text-gray-100 md:hidden">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"></path>
                </svg>
            </button>
            <div className={classNames("w-full md:block md:w-auto", {hidden: !openMenu})} id="navbar-default">
                <ul className="flex flex-col pt-2 px-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
                    <li>
                        <NavLink to="/home" className="block py-2 pr-4 pl-2 text-gray-300 md:p-0 hover:text-gray-100">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/jobs" className="block py-2 pr-4 pl-2 text-gray-300 md:p-0 hover:text-gray-100">
                            Jobs
                        </NavLink>
                    </li>
                </ul>
            </div>
            {<button className={classNames("btn-primary", { invisible: !isLoggedIn })} onClick={onLogout}>Logout</button>}
        </div>
    </nav>;
};

export default Navigation;