import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <div>
            <Header />
            {/* Outlet là nơi sẽ render các component con tương ứng với route */}
            {/* VD: /about => Outlet -> About page */}
            {/* /profile => Outlet -> Profile page */}
            <main className="pt-16 pb-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
