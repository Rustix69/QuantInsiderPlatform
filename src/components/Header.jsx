"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import ShimmerButton from './ui/shimmer-button'
import { Link } from 'react-router-dom'
import { Menu as MenuIcon, X } from 'lucide-react'; // Import icons for hamburger menu

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className='flex justify-between items-center px-6 gap-2 sm:px-10 lg:px-20 py-4 tracking-tighter'>
                {/* Logo Section */}
                <Link to="/">
                    <img src='./logo.png' alt='Quant Insider' className='h-6 sm:h-8 md:h-10' />
                </Link>

                {/* Navigation Section - Hidden on mobile */}
                <div className='hidden md:flex flex-1 justify-center space-x-2 sm:space-x-4 lg:space-x-6 items-center font-sans font-lg text-base sm:text-base md:text-lg sm:backdrop-blur-xl'>
                    <Link to="/education"><h1>Education</h1></Link>
                    <Link to="enterprise"><h1>Enterprise</h1></Link>
                    <Link to="/events" ><h1>Events</h1></Link>
                    <Link to="/talks"><h1>Talks</h1></Link>
                    <Link className="hidden lg:block" to="/hiring"><h1>Hiring Services</h1></Link>

                    {/* Hidden on smaller screens */}
                    <Link className="hidden lg:block" to="/about"><h1>About</h1></Link>
                    {/* <Link className="hidden lg:block" to="/jobs"><h1>Jobs</h1></Link> */}
                    <Link className="hidden lg:block" onClick={() => scrollToSection("contact-us")}><h1>Contact Us</h1></Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
                        {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>

                {/* Button Section */}
                <Link to="https://quantinsider.algobulls.com/" target='_blank' className="hidden sm:block">
                    <ShimmerButton>Algo Trading Platform</ShimmerButton>
                </Link>
            </div>

            {/* Mobile Sidebar Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 md:hidden">
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-end mb-6">
                            <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-6 text-xl font-medium">
                            <Link to="/education" onClick={toggleMenu}><h1>Education</h1></Link>
                            <Link to="/enterprise" onClick={toggleMenu}><h1>Enterprise</h1></Link>
                            <Link to="/events" onClick={toggleMenu}><h1>Events</h1></Link>
                            <Link to="/talks" onClick={toggleMenu}><h1>Talks</h1></Link>
                            <Link to="/hiring" onClick={toggleMenu}><h1>Hiring Services</h1></Link>
                            <Link to="/about" onClick={toggleMenu}><h1>About</h1></Link>
                            <Link onClick={() => {
                                toggleMenu();
                                scrollToSection("contact-us");
                            }}><h1>Contact Us</h1></Link>
                            <Link to="https://quantinsider.algobulls.com/" target='_blank' onClick={toggleMenu} className="mt-6">
                                <ShimmerButton>Algo Trading Platform</ShimmerButton>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header