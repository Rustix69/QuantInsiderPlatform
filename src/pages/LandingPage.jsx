import { motion } from 'framer-motion'
import { Testimonials } from '@/components/Testimonials'
import ShinyButton from '@/components/ui/shiny-button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import events from "../data/events.json"
import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileForm } from '@/components/Contact';
import NumberTicker from '@/components/ui/number-ticker';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import { GallerySlider } from '@/components/GallerySlider';
import { AlgoBulls } from '@/components/AlgoBulls';
import About from '@/components/About';


const LandingPage = () => {
    // Image animation variants
    const imageVariants = {
        initial: { 
            opacity: 0, 
            scale: 0.9,
            y: 20 
        },
        animate: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            rotate: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    };

    // Button animation variants
    const buttonVariants = {
        initial: { 
            opacity: 0, 
            y: 20,
            scale: 0.95 
        },
        animate: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                duration: 0.6
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
            }
        }
    };

    return (
        <>
            <div className='flex flex-col max-w-full overflow-hidden'>
                {/* Hero Section with improved mobile layout */}
                <div className='px-4 sm:px-8 mt-8 lg:mt-24 flex flex-col items-center h-full'>
                    {/* Main Heading - Adjusted font sizes for better responsiveness */}
                    <div className='flex flex-col items-center justify-center'>
                        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl gradient-title tracking-tighter text-center max-w-4xl'>
                            Quant Insider is a 360 Degrees Eco System of Quant Finance
                        </div>

                    {/* Subheading with improved spacing and responsive text */}
                    <div className='text-center text-xs sm:text-base lg:text-lg tracking-tighter flex flex-col mt-3 lg:mt-5 max-w-3xl'>
                        <p>We provide, <b>Quant Finance Educational & Training, Trading Technology Solutions,</b></p>
                            <p><b>Risk analytics systems and Hiring Services</b> for Financial Institutions</p>
                        </div>
                    </div>

                    {/* Logo with better sizing and animations */}
                    <motion.div 
                        className='flex flex-col items-center justify-center mt-4 sm:mt-6'
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                    >
                        <motion.img 
                            src='/landing.png' 
                            alt='Quant Insider' 
                            variants={imageVariants}
                            className='h-72 sm:h-60 md:h-60 lg:h-96 object-contain'
                        />
                    </motion.div>

                    {/* Call to Action Buttons */}
                    <div className="w-full md:max-w-6xl mt-5 sm:mt-8 lg:mt-12 px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                            <motion.div
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                whileTap="tap"
                                variants={buttonVariants}
                            >
                                <Link to="/education" target="_blank" className="w-full">
                                    <ShinyButton 
                                        className="font-semibold tracking-tighter w-full py-4 px-4 sm:h-16 flex items-center justify-center"
                                    >
                                        <span className="whitespace-nowrap">Crack Your First Quant Job</span>
                                    </ShinyButton>
                                </Link>
                            </motion.div>

                            <motion.div
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                whileTap="tap"
                                variants={buttonVariants}
                            >
                                <Link to="https://marketmaking.quantinsider.io/" target="_blank" className="w-full">
                                    <ShinyButton 
                                        className="font-semibold tracking-tighter w-full py-4 px-4 sm:h-16 flex items-center justify-center"
                                    >
                                        <span className="whitespace-nowrap">Market Making Game</span>
                                    </ShinyButton>
                                </Link>
                            </motion.div>

                            <motion.div
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                whileTap="tap"
                                variants={buttonVariants}
                                className="w-full sm:block hidden"
                            >
                                <Link to="https://quantinsider.algobulls.com/phoenix/splash" target="_blank" className="w-full">
                                    <ShinyButton 
                                        className="font-semibold tracking-tighter w-full py-4 px-4 sm:h-16 flex items-center justify-center"
                                    >
                                        <span className="whitespace-nowrap">Algo Trading Platform</span>
                                    </ShinyButton>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Collaborations */}
                <div className='flex flex-col items-center mt-12 sm:mt-24'>
                    <h1 className='text-center text-black text-3xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold'>Past Events</h1>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="w-full py-5 sm:py-10 sm:mt-6"
                    >
                        <CarouselContent className="flex gap-8 sm:gap-20 items-center">
                            {events.map(({ name, id, path }) => (
                                <CarouselItem key={id} className="basis-1/4 lg:basis-1/5 ">
                                    <img
                                        src={path}
                                        alt={name}
                                        className="h-20 sm:h-36 object-contain"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>


            {/* Numerics Data */}
            <div className='mt-10 sm:mt-28'>
                <h1 className='text-center text-black text-3xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold'>The Edge in Quantitative Strategies</h1>
                <div className='py-2 sm:py-6 lg:py-8 text-center font-semibold text-xs lg:text-lg tracking tracking-tighter px-5 sm:px-10'>
                    <p>Our team helps you excel in quantitative strategies, positioning you as a thought leader to attract top talent, generate leads, and secure investments for growth.</p>
                </div>
                <div className="px-5 lg:px-20 mt-10 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center justify-center whitespace-pre-wrap text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-blue-600 drop-shadow-lg">
                            <span>
                                <NumberTicker value={118} className="text-blue-600" />
                            </span>
                            <span className="ml-2 text-5xl sm:text-5xl md:text-7xl lg:text-9xl">K+</span>
                        </div>
                        <div className="flex items-center justify-center whitespace-pre-wrap text-xl lg:text-5xl lg:gap-6 sm:gap-3 md:gap-4 py-4 font-extrabold tracking-tighter text-transparent bg-clip-text bg-blue-600 drop-shadow-lg gap-2">
                            <h1 >on</h1>
                            <img src='/linkedIn_logo.svg' alt='LinkedIn' className='h-5 md:h-9 sm:h-7 lg:h-12 align-bottom' />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center whitespace-pre-wrap text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-orange-600 drop-shadow-lg">
                            <span>
                                <NumberTicker value={4500} className="text-orange-600" />
                            </span>
                            <span className="ml-2 text-5xl sm:text-5xl md:text-7xl lg:text-9xl">+</span>
                        </div>
                        <div className="flex items-center justify-center whitespace-pre-wrap text-xl lg:text-5xl lg:gap-6 sm:gap-3 md:gap-4 py-4 font-extrabold tracking-tighter text-transparent bg-clip-text bg-orange-600 drop-shadow-lg gap-2">
                            <h1 >Students mentored on</h1>
                            <img src='/topmate_logo.png' alt='LinkedIn' className='h-5 md:h-9 sm:h-7 lg:h-12 align-bottom' />
                        </div>
                    </div>
                </div>


                {/* Neon Cards */}
                <div className="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 px-5 sm:px-10 mt-5 sm:mt-20">
                    <NeonGradientCard className="w-full lg:w-1/2 justify-center text-center">
                        <h1 className="text-center pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-xl sm:text-2xl font-extrabold tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            Our Mission
                        </h1>
                        <span className="text-sm sm:text-lg py-20">
                            We bridge the gap between theoretical learning and practical application by providing cutting-edge education, hands-on tools, and personalized guidance to help you master the art and science of quantitative finance.
                        </span>
                    </NeonGradientCard>
                    <NeonGradientCard className="w-full lg:w-1/2 justify-center text-center">
                        <h1 className="text-center pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-xl sm:text-2xl font-extrabold tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            Our Vision
                        </h1>
                        <span className="text-sm sm:text-lg">
                            To democratize access to specialized knowledge, tools, and resources, enabling everyone to succeed in the competitive world of quantitative finance and algorithmic trading, regardless of their background or location.                        </span>
                    </NeonGradientCard>
                </div>

            </div>


            {/* AlgoBulls */}
            <div className='h-full mt-20 px-5 sm:px-15'>
                <AlgoBulls />
            </div>

            {/* Gallery */}
            <div className='mt-5 sm:mt-20 px-5 sm:px-15' id="event">
                <GallerySlider />
            </div>

            {/* Testimonials */}
            <div className='mt-14 sm:mt-20 flex flex-col items-center'>
                <h1 className='text-center text-black text-3xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold'>Testimonials</h1>
                <Testimonials />
            </div>


            {/* About Us */}
            <div className='flex flex-col items-center justify-center item-centre px-3 mt-10 sm:mt-10' id="about">
                <h1 className='text-center text-black text-3xl md:text-4xl lg:text-6xl tracking-tighter mt-5 sm:mt-20 font-extrabold p-4'>About Us</h1>
                <About/>
            </div>


            {/* Contact Us */}
            <div className='flex flex-col items-center justify-center item-centre px-3 mt-10 sm:mt-20' id="contact-us">
                <h1 className='text-center text-black text-3xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold p-4'>Contact Us</h1>
                <ProfileForm />
            </div>



        </>
    )
}

export default LandingPage