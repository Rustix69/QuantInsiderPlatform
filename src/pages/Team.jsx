import React from 'react'
import TeamCard from '@/components/TeamCard'
import GradualSpacing from '@/components/ui/gradual-spacing'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card'

const Team = () => {
  // Dummy team data with placeholder images
  const executiveTeam = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Smith",
      role: "Founder & CEO",
      description: "Former VP at Goldman Sachs with 15+ years of experience in quantitative finance and algorithmic trading."
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Johnson",
      role: "CTO",
      description: "PhD in Computer Science from MIT with expertise in machine learning and financial modeling."
    },
    {
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      name: "David Chen",
      role: "Chief Research Officer",
      description: "Former quantitative researcher at Jane Street with a background in mathematical finance and statistics."
    }
  ]

  const developmentTeam = [
    {
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      name: "Emily Rodriguez",
      role: "Lead Developer",
      description: "Full-stack engineer with expertise in React, Node.js, and financial APIs."
    },
    {
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      name: "Michael Lee",
      role: "Data Scientist",
      description: "Specializes in time series analysis and predictive modeling for financial markets."
    },
    {
      image: "https://randomuser.me/api/portraits/women/76.jpg",
      name: "Jessica Wong",
      role: "UX Designer",
      description: "Creates intuitive interfaces for complex financial applications with a focus on user experience."
    },
    {
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "Robert Taylor",
      role: "Backend Engineer",
      description: "Designs scalable systems for high-frequency trading and real-time data processing."
    }
  ]

  const advisoryBoard = [
    {
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      name: "Dr. Alan Patel",
      role: "Academic Advisor",
      description: "Professor of Finance at Harvard Business School with research focus on market microstructure."
    },
    {
      image: "https://randomuser.me/api/portraits/women/62.jpg",
      name: "Lisa Nakamura",
      role: "Industry Advisor",
      description: "Former Managing Director at Citadel with 20+ years of experience in systematic trading."
    }
  ]

  return (
    <div className="flex flex-col items-center">
      {/* Team Hero Section */}
      <div className="w-full px-5 sm:px-16 mt-10">
        <NeonGradientCard className="w-full">
          <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">Meet Our Team</h1>
          <p className="text-center text-lg md:text-xl mb-4">
            At Quant Insider, we've assembled a world-class team of quantitative finance experts, 
            developers, and industry veterans dedicated to revolutionizing algorithmic trading.
          </p>
          <p className="text-center text-lg md:text-xl">
            Our diverse team combines academic excellence with real-world trading experience 
            to deliver cutting-edge solutions.
          </p>
        </NeonGradientCard>
      </div>

      {/* Executive Team */}
      <div className="w-full px-5 sm:px-16 mt-12">
        <GradualSpacing
          className="text-center text-3xl font-extrabold tracking-tighter text-black md:text-7xl font-serif mb-8"
          text="Executive Team"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {executiveTeam.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>

      {/* Development Team */}
      <div className="w-full px-5 sm:px-16 mt-16">
        <GradualSpacing
          className="text-center text-3xl font-extrabold tracking-tighter text-black md:text-7xl font-serif mb-8"
          text="Development Team"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {developmentTeam.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>

      {/* Advisory Board */}
      <div className="w-full px-5 sm:px-16 mt-16 mb-16">
        <GradualSpacing
          className="text-center text-3xl font-extrabold tracking-tighter text-black md:text-7xl font-serif mb-8"
          text="Advisory Board"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advisoryBoard.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team 