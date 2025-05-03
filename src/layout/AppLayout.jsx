import Header from '@/components/Header'
import GridPattern from '@/components/ui/grid-pattern'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Linkedin, Twitter, Instagram } from 'lucide-react'

const AppLayout = () => {
    return (
        <div>
            <GridPattern className='bg-gradient' />
            <main className='min-h-screen'>
                <Header />
                <Outlet />
            </main>


            <div className="relative p-4 bg-gray-900 mt-10 flex flex-col items-center justify-between">
                <div className="text-sm text-gray-400 mb-2 text-center">
                    1st Floor, 264-265, Dr Annie Besant Rd, Municipal Colony, Worli Shivaji Nagar, Worli, Mumbai, Maharashtra
                </div>

                <div className="flex items-center justify-between w-full">
                    <div className="w-24"> {/* Empty div for spacing */}</div>

                    <div className="text-sm text-white font-lg text-center">
                        Copyright &copy; 2025 QuantInsider.io
                    </div>

                    <div className="flex gap-3">
                        <a href="https://www.linkedin.com/company/quant-insider"
                            className="text-white hover:text-gray-300 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://x.com/QuantINsider_IQ"
                            className="text-white hover:text-gray-300 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.instagram.com/quantinsider.io/"
                            className="text-white hover:text-gray-300 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AppLayout