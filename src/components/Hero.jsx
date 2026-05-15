import React from 'react';
import heroImg from '../assets/hero-bg.jpeg';
import { FaHandSparkles, FaFire, FaBell, FaDumbbell, FaChartLine} from "react-icons/fa6";
import { GiWaterDrop } from "react-icons/gi";
import { TbHeartRateMonitor } from "react-icons/tb";


function Hero() {
  return (
    <div className='bg-[#050510] text-white pl-4'>
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
        <div className='flex  gap-10 mt-8 px-8 '>
        <div className='h-[500px] w-[75%] bg-cover bg-center relative border-2 border-purple-600/30 rounded-2xl' style={{ backgroundImage: `url(${heroImg})` }} >
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
        <div className='border border-purple-500/13 rounded-lg  bg-slate-900/60  w-[350px] h-[500px] mr-15'>
            <h2 className='text-2xl font-bold p-7'>Today's Goal</h2>
            <div className='flex flex-col items-center justify-center'>
            <div className='w-50 h-50 rounded-full flex items-center justify-center mt-6 bg-[conic-gradient(theme(colors.purple.600)_0%_75%,theme(colors.purple.950)_75%_100%)] p-4'>
                <div className='w-full h-full rounded-full bg-black flex items-center justify-center flex-col'>
                    <h2 className='text-3xl font-bold'>75%</h2>
                    
                    <p className='text-[#94a3b8] block'>Completed</p>
                </div>
            </div>
            <div className='flex items-center gap-8 mt-8 p-4  text-center'>
                <div>
                    <h2 className='text-3xl font-bold'>
                        450
                    </h2>
                    <p className='text-[#94a3b8]'>
                        Calories
                    </p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold'>
                        32 
                    </h2>
                    <p className='text-[#94a3b8]'>
                        Minutes
                    </p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold'>
                        5
                    </h2>
                    <p className='text-[#94a3b8]'>
                        Workouts
                    </p>
                </div>
            </div>
            </div>
        </div>
        </div>

        {/*Quick Action links*/}
        <div className='px-8 flex gap-10 mt-10'>
            <div className='w-[75%]'>
                <h2 className='text-2xl font-bold pt-5'>Quick Actions</h2>
                <div className='grid grid-cols-4 space-x-10 gap-8'>
                <div className='flex flex-col items-center gap-2 text-center bg-slate-900/60 border border-purple-500/13 hover:border-cyan-400/40 rounded-3xl p-10 mt-6'>
                    <FaDumbbell className='text-5xl text-pink-600'/>
                    <p className='text-xl'>Start Workout</p>
                </div>
                <div className='flex flex-col items-center gap-2 text-center bg-slate-900/60 border border-purple-500/13 hover:border-cyan-400/40 rounded-3xl p-10  mt-6'>
                    <GiWaterDrop className='text-5xl text-cyan-600'/>
                    <p className='text-xl'>Log Water</p>
                </div>
                <div className='flex flex-col items-center gap-2 text-center bg-slate-900/60 border border-purple-500/13 hover:border-cyan-400/40 rounded-3xl p-10  mt-6'>
                    <TbHeartRateMonitor className='text-5xl text-purple-600'/>
                    <p className='text-xl'>Track Heart Rate</p>
                </div>
                <div className='flex flex-col items-center gap-2 text-center bg-slate-900/60 border border-purple-500/13 hover:border-cyan-400/40 rounded-3xl p-10  mt-6'>
                    <FaChartLine className='text-5xl text-purple-400'/>
                    <p className='text-xl'>View Progress</p>
                </div>
                </div>
            </div>

            <div className='bg-slate-900/60 border border-purple-500/13 hover:border-cyan-400/40 w-[350px] rounded-lg p-6 space-y-8'>
                <h2 className='text-2xl font-bold'>Water Intake</h2>
                <div className='space-y-8'>
                    <div className='flex items-center justify-between mt-4'>
                        <div>
                            <div className='flex items-center space-x-2'>
                                <GiWaterDrop className='text-3xl text-cyan-600'/>
                                <span className='text-3xl font-bold'>1.8
                                    <span className='text-xl text-[#94a3b8]'>/3L</span>
                                </span>
                            </div>
                        </div>
                        <div>
                            60%
                        </div>
                    </div>
                    <div className="w-full h-[5px] mt-2 rounded-full bg-[linear-gradient(to_right,cyan_0%_60%,#94a3b8_60%_100%)]"></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero