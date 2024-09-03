import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import "../App.css"

function Layout() {
    return (
        <div className='bd'>
            <header className='navbar'>
                <Navbar/>
            </header>
            <Outlet/>
            <footer className='mt-auto'>
                <Footer/>
            </footer>
            
        </div>
    )
}

export default Layout
