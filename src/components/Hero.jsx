import React from 'react';
import heroImg from '../assets/hero.png';
import { FaHandSparkles, FaFire, FaBell } from "react-icons/fa6";


function Hero() {
  return (
    <div className='bg-[#050510] text-white'>
        {/*Header content*/}
        <div>
            <div>
                <h1>Hey, Kingori! 
                    <FaHandSparkles />
                </h1>
                <p>Ready to crush your goals today?</p>
            </div>
            <div>
                <h1>
                    <FaFire />
                    12
                </h1>
                <p>
                    Day Streak
                </p>
            </div>
            <div>
                <p>
                <FaBell />
                </p>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Hero