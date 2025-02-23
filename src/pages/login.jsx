import { useState } from "react";
import React from "react";
import { Mail, Lock } from "lucide-react";
import { useDispatch,useSelector  } from "react-redux";
import { login } from "../app/features/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function LoginForm() {
    const navigate = useNavigate();
    const user=useSelector((state)=>state.auth)    
    const dispatche=useDispatch();
    const [email, setEmail] = useState("janesmith@example.com");
    const [password, setPassword] = useState("securepass456");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            alert("please enter Data");
        }else{
            
            dispatche(login({
                email:email,
                password:password
            }))
        }
        

    };
    useEffect(() => {
        if(user.isAuth){
            navigate('/');
        }
    }, [user.isAuth])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-6 bg-gray-800 shadow-lg rounded-2xl">
                <h2 className="text-center text-white text-2xl font-semibold">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="relative mb-5">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${user.error && "top-[20px]"}`} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-500 rounded-lg ${user.error && "border-red-500"}`}
                            required
                        />
                        {user.error && <p className="text-red-500 text-sm mt-1">Please Enter Correct email </p>}
                    </div>
                    <div className="relative mb-12">
                        <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${user.error && "top-[20px]"}`} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-500 rounded-lg ${user.error && "border-red-500"}`}
                            required
                        />
                        {user.error && <p className="text-red-500 text-sm mt-1">Please Enter Correct password </p>}
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg mb-5">
                        {
                            user.loading?"Loading...":"Sign In"
                        }
                        
                    </button>
                </form>
            </div>
        </div>
    );
}
