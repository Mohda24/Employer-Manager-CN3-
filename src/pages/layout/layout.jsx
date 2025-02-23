import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from '../../components/Shared/Aside'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function Layout() {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const navigate = useNavigate();
    console.log(isAuth);
    
    useEffect(() => {
        if (!isAuth){
            navigate('/login');
        }
    }, [isAuth])
    if(!isAuth){
        return null;
    }
    return (
        <div className="w-full">
            <div className="w-[260px] fixed top-0 left-0">
                <Aside />
            </div>
            <main className="w-[calc(100%-260px)] ms-auto p-2">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout