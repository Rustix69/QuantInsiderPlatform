import { TimelineDemo } from '@/components/Timeline'
import BlurIn from '@/components/ui/blur-in'
import TypingAnimation from '@/components/ui/typing-animation'
import React from 'react'

const Events = () => {
  return (
    <div>

      <div className='mt-10 sm:mt-20 px-5 sm:px-10' id='top'>
        <BlurIn
          word="EVENTS"
          duration={1}
          className="text-center sm:text-start gradient-title-2 font-extrabold"
        />
        <TypingAnimation duration={70} className='text-center  sm:text-start text-base md:text-4xl tracking-tighter font-semibold py-2'>Explore our quant conference and event highlights</TypingAnimation>
      </div>
      <TimelineDemo/>
    </div>
  )
}

export default Events