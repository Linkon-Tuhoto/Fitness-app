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