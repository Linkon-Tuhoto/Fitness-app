import React from 'react';
import heroImg from '../assets/hero-bg.jpeg';
import { FaHandSparkles, FaFire, FaBell } from "react-icons/fa6";


function Hero() {
  return (
    <div className='bg-[#050510] text-white'>
        {/*Header content*/}
        <div className='grid grid-cols-2 pt-4 px-8'>
            <div>
                <div className='text-white font-bold flex items-center gap-2 text-2xl'>
                    <span>Hey, Kingori!</span> 
                    <FaHandSparkles className='text-amber-400' />
                </div>
                <p className='text-[#94a3b8]'>Ready to crush your goals today?</p>
            </div>
            <div className='flex justify-end  pr-15 gap-8'>
            <div>
                <div className='flex items-center gap-1'>
                    <FaFire className='text-amber-700'/>
                    <span className='text-white font-bold'>12</span>
                </div>
                <p className='text-[#94a3b8]'>
                    Day Streak
                </p>
            </div>
            <div>
                <p className='text-[#94a3b8]'>
                <FaBell />
                </p>
            </div>
            </div>
        </div>
        {/*Hero image*/}
        <div>
        <div className='h-[500px] w-[75%] bg-cover bg-center relative' style={{ backgroundImage: `url(${heroImg})` }} >
            <div className='absolute inset-0 bg-black/50'></div>
            <div className='relative z-10 text-white px-8 mt-10 space-y-6 max-w-lg max-w-[12ch] leading-tight'>
            <p>Focus</p>
            <h1 className='text-6xl font-black leading-tight' style={{transform: "skewX(-15deg)" , display: "inline-block"}}>
                DISCIPLINE
                
                <span className='block text-5xl text-purple-600'>BUILDS POWER</span>
            </h1>
            <p className='text-[#94a3b8] mt-2 text-xl'>
                Stay focused. Stay consistent. Stay strong. Your fitness journey is a marathon, not a sprint. Let's make every step count!
            </p>
            <div>
                <button className='bg-pink-500  text-white shadow-[0_0_5px_#ff00ff] px-6 py-4 rounded-lg text-xl'>Start Workout</button>
            </div>
            </div>
        </div>

        {/*Today's Goal*/}
        <div>
            <h2>Today's Goal</h2>
            <div>
                <div>
                    <h2>
                        450
                    </h2>
                    <p>
                        Calories
                    </p>
                </div>
                <div>
                    <h2>
                        32 
                    </h2>
                    <p>
                        Minutes
                    </p>
                </div>
                <div>
                    <h2>
                        5
                    </h2>
                    <p>
                        Workouts
                    </p>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Hero