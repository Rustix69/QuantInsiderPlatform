import Header from '@/components/Header'
import GridPattern from '@/components/ui/grid-pattern'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
const AppLayout = () => {
    return (
        <div>
            <GridPattern className='bg-gradient' />
            <main className='min-h-screen'>
                <Header />
                <Outlet />
                <Footer />
            </main>


            

        </div>
    )
}

export default AppLayout