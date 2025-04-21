import React from 'react'
import { NeonGradientCard } from './ui/neon-gradient-card'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import { Link } from 'react-router-dom'
import InteractiveHoverButton from './ui/interactive-hover-button'

const About = () => {
    return (
        <div className='px-5 sm:px-52 align-middle -mt-5 sm:mt-4'>
            <NeonGradientCard className="w-auto mt-5">
                <h1 className='text-center text-sm sm:text-2xl font-[C059]'>At Quant Insider, we are redefining the landscape of quantitative finance and algorithmic trading by building a specialized startup that offers a one-stop 360-degree ecosystem. Whether you’re a quant enthusiast aspiring to secure a position at leading hedge funds, investment banks, or prop trading firms, or a trader looking to automate strategies, we have the tools, expertise, and community to guide your journey.</h1>
                <div className='items-center justify-center flex sm:bottom-2 sm:right-2 sm:absolute mt-5'>
                    <Link to='/about'>
                        <InteractiveHoverButton text="Explore more" />
                    </Link>
                </div>
            </NeonGradientCard>



        </div>
    )
}

export default About