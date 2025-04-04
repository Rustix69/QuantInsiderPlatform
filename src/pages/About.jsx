import BlurIn from '@/components/ui/blur-in'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card'
import ShineBorder from '@/components/ui/shine-border'
import React from 'react'

const About = () => {
    return (
        <div className='mt-10 sm:mt-20 px-5 sm:px-10'>
            <BlurIn
                word="About Us"
                duration={1}
                className="text-center sm:text-start text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-title font-extrabold tracking-tighter"
            />

            <div className="flex flex-col w-full sm:flex-row gap-5 items-center justify-center mt-16 px-5">
                <NeonGradientCard className=" w-full sm:w-3/4 h-auto">
                    <h1 className="text-center text-sm sm:text-3xl font-[C059]">
                        At Quant Insider, we are redefining the landscape of quantitative finance and algorithmic trading by building a specialized startup that offers a one-stop 360-degree ecosystem. Whether you’re a quant enthusiast aspiring to secure a position at leading hedge funds, investment banks, or prop trading firms, or a trader looking to automate strategies, we have the tools, expertise, and community to guide your journey.
                    </h1>
                </NeonGradientCard>
                <div className=''>
                    <NeonGradientCard className="h-auto mt-5 block sm:hidden">
                    <h1 className="text-center pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        Our Pillars
                    </h1>
                    <h1 className='text-center font-serif text-3xl mt-5 leading-none'> Education and Technology </h1>
                </NeonGradientCard>
                </div>
                
            </div>

            <div className='hidden sm:block'>
                <ContainerScroll
                    titleComponent={
                        <>
                            <span className="text-4xl md:text-[6rem] font-extrabold mt-1 leading-none">
                                Our Pillars
                            </span>
                        </>
                    }
                >
                    <img
                        src={`/pillar.png`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-center mt-10">
                <NeonGradientCard className="w-full sm:w-1/4 h-auto sm:h-64 mt-5">
                    <h1 className="text-center pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        Education Segment
                    </h1>
                    <h1 className='text-center font-serif text-3xl mt-5 leading-none'> Transforming Enthusiasts into Professionals </h1>
                </NeonGradientCard>

                <NeonGradientCard className="w-full sm:w-3/4 h-auto sm:h-64 mt-5">
                    <h1 className="text-center text-sm sm:text-xl font-[C059]">
                        Our education platform is designed to bridge the gap between theoretical knowledge and real-world application. We empower aspiring quants with industry-relevant skills, personalized guidance, and hands-on experience to prepare them for top roles in hedge funds, investment banks, prop trading firms, and market-making desks. Insider, we are redefining the landscape of quantitative finance and algorithmic trading by building a specialized startup that offers a one-stop 360-degree ecosystem. Whether you’re a quant enthusiast aspiring to secure a position at leading hedge funds, investment banks, or prop trading firms, or a trader looking to automate strategies, we have the tools, expertise, and community to guide your journey.
                    </h1>
                </NeonGradientCard>
            </div>




            {/* Key Offerings */}
            <h1 className='font-[C059] font-extrabold text-5xl sm:text-6xl text-center mt-10 '>Key Offerings</h1>
            <div className='grid grid-cols-1 sm:grid-cols-4 text-center gap-4 mt-10 px-5 sm:px-20'>
                <ShineBorder
                    className="relative flex h-auto flex-col py-10 items-center justify-around rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
                        Interview Byte
                    </span>
                    <div className='py-5 tracking-tighter font-serif text-base'>
                        A comprehensive question bank for quant finance interview preparation.
                        Quant Insider Stack: A complete learning bundle with project handbooks, webinars, and exclusive resources.

                    </div>
                </ShineBorder>
                <ShineBorder
                    className="relative flex h-auto flex-col py-10 items-center justify-around rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
                        Masterclass Recordings
                    </span>
                    <div className='py-5 tracking-tighter font-serif text-base'>
                        Learn from the best with expert-led sessions on derivative pricing, machine learning for trading, delta-neutral strategies, and more.
                    </div>
                </ShineBorder>
                <ShineBorder
                    className="relative flex h-auto flex-col py-10 items-center justify-around rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
                        Mock Interviews & Consulting
                    </span>
                    <div className='py-5 tracking-tighter font-serif text-base'>
                        Tailored mentorship to help you ace interviews and build a standout career.

                    </div>
                </ShineBorder>
                <ShineBorder
                    className="relative flex h-auto flex-col py-10 items-center justify-around rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
                        Practical Courses
                    </span>
                    <div className='py-5 tracking-tighter font-serif text-base'>
                        Specialized programs on algorithmic trading, machine learning, and quant finance.
                    </div>
                </ShineBorder>
            </div>

            <div className="flex flex-col w-fu56 sm:flex-row gap-5 items-center mt-10 sm:px-20">
                <NeonGradientCard className="sm:w-1/4 sm:h-52 mt-5">
                    <h1 className="text-center pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        Technology Segment
                    </h1>
                    <h1 className='text-center font-serif text-3xl mt-5 leading-none'> Democratizing Algorithmic Trading </h1>
                </NeonGradientCard>

                <NeonGradientCard className="sm:w-3/4 sm:h-52 mt-5 flex justify-center items-center">
                    <h1 className="text-center text-sm sm:text-xl font-[C059] leading-relaxed">
                        Our technology division is designed to empower traders—both retail and institutional—with state-of-the-art tools to build, optimize, and execute trading strategies. By integrating Generative AI and algorithmic trading platforms, we simplify the complexities of trading and enhance efficiency.
                    </h1>
                </NeonGradientCard>
            </div>

            <h1 className='font-[C059] font-extrabold text-5xl text-center mt-10 '>Key Offerings</h1>
            <div className='grid grid-col-1 sm:grid-cols-4 text-center gap-4 mt-10 px-5 sm:px-20'>
                <ShineBorder
                    className="relative flex h-auto flex-col py-10 items-center justify-around rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
                        Phoenix Platform
                    </span>
                    <div className='py-5 tracking-tighter font-serif text-base'>
                        A fully customizable environment for developing, backtesting, and deploying trading algorithms.
                    </div>
                </ShineBorder>
                <ShineBorder
                    className="relative flex h-auto flex-col py-10 items-center justify-around rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
                        Phoenix AI Copilot
                    </span>
                    <div className='py-5 tracking-tighter font-serif text-base'>
                        A Generative AI-powered tool that helps traders create strategies effortlessly.
                    </div>
                </ShineBorder>
                <ShineBorder
                    className="relative flex h-auto flex-col py-10 items-center justify-around rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
                        Odyssey Marketplace
                    </span>
                    <div className='py-5 tracking-tighter font-serif text-base'>
                        A hub for discovering and utilizing proven trading strategies from industry experts.
                    </div>
                </ShineBorder>
                <ShineBorder
                    className="relative flex h-auto flex-col py-10 items-center justify-around rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
                        Institutional Solutions
                    </span>
                    <div className='py-5 tracking-tighter font-serif text-base'>
                        End-to-end trading technology for RIAs, trading desks, family offices, and brokers, with our Tech Stack.
                    </div>
                </ShineBorder>
            </div>

        </div>
    )
}

export default About