import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../navbar/Navbar'
function Layout({ children }) {
    return (
        <>
        <div>
            {/* Navbar  */}
            <Nav />

            {/* main Content  */}
            <div className="content min-h-screen">
                {children}
            </div>

            {/* Footer  */}
            <Footer />
        </div>
        </>
    )
}

export default Layout