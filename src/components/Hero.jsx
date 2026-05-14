import React from 'react';
import heroImg from '../assets/hero.png';
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
        <div style={{ backgroundImage: 'url(${heroImg})'}}>
            <p>Focus</p>
            <h1>
                DISCIPLINE
                <br />
                BUILDS POWER
            </h1>
            <p>
                Stay focused. Stay consistent. See results.
            </p>
            <div>
                <button>Start Workout</button>
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