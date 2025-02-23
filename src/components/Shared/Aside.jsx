
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, CalendarCheck, ClipboardList, LogOut,List,CirclePlus } from "lucide-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../../app/features/AuthSlice";


function Aside() {
    const user=useSelector((state)=>state.auth.user);
    const dispatche=useDispatch();
    const [AbsenseActive, setAbsenseActive] = useState(false);
    const handleLogout=()=>{
        if(window.confirm("Are you sure you want to logout?")){
            dispatche(logout())}
    }
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-5 flex flex-col space-y-6 shadow-lg">
            <h2 className="text-xl font-semibold text-center">Dashboard</h2>
            <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-700">
                <img src="https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1738621967~exp=1738625567~hmac=fea822c6deb80ceed3b3803d773fb6677e40ad3b91fd422eb7ded85454e8bfdf&w=740" alt="Profile" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-gray-400">{user?.email}</p>
                </div>
            </div>
            <nav className="flex flex-col space-y-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 ${isActive ? "bg-blue-600 text-white " : ""}`
                    }
                >
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                </NavLink>

                <div className={`Absense flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer ${AbsenseActive ? "opacity-70 text-white" : ""}`}
                    onClick={() => setAbsenseActive(!AbsenseActive)}
                >
                    <ClipboardList className="w-5 h-5" />
                    <span>Gestion des Absences</span>
                </div>
                {AbsenseActive && (
                    <div className="flex flex-col space-y-2 pl-8">
                        <NavLink
                            to="/liste-absences"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 ${isActive ? "bg-blue-600 text-white " : ""}`
                            }
                        >
                            <List className="w-5 h-5" />
                            <span>Liste Absences</span>
                        </NavLink>
                        <NavLink
                            to="/ajouter-absence"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 ${isActive ? "bg-blue-600 text-white " : ""}`
                            }
                        >
                            <CirclePlus className="w-5 h-5" />
                            <span>Ajouter Absence</span>
                        </NavLink>
                    </div>
                )}
                <NavLink
                    to="/conges"
                    className={({ isActive }) =>
                        `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 ${isActive ? "bg-blue-600 text-white " : ""}`
                    }
                >
                    <CalendarCheck className="w-5 h-5" />
                    <span>Gestion des Congés</span>
                </NavLink>
                <NavLink
                    to="/employes"
                    className={({ isActive }) =>
                        `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 ${isActive ? "bg-blue-600 text-white " : ""}`
                    }
                >
                    <Users className="w-5 h-5" />
                    <span>Gestion des Employés</span>
                </NavLink>

                <a className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
                    onClick={handleLogout}
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </a>
            </nav>
        </aside>
    );
}

export default Aside;
