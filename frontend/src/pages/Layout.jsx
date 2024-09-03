import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../App.css"

function Layout({status,setStatus}) {
    return (
        <div className='bd'>
            <header className='navbar'>
                <Navbar status={status} setStatus={setStatus}/>
            </header>
            <Outlet/>
            <footer className='mt-auto'>
                <Footer/>
            </footer>
            
        </div>
    )
}

export default Layout
