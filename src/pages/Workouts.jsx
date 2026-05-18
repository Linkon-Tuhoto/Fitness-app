import React, { useState } from 'react';
import vid from '../assets/vidfit.mp4';
import VideoCard from '../components/VideoCard';


function Workouts() {
  const workouts = [
    {
      id: 1,
      title: 'Full Body Strength Training',
      video: vid,
    },
    {
      id: 2,
      title: 'Cardio Blast Workout',
      video: vid,
    },
    {
      id: 3,
      title: 'Cardio Blast Workout',
      video: vid,
    },
    {
      id: 4,
      title: 'Cardio Blast Workout',
      video: vid,
    },
    {
      id: 5,
      title: 'Cardio Blast Workout',
      video: vid,
    },
    {
      id: 6,
      title: 'Cardio Blast Workout',
      video: vid,
    },
    {
      id: 7,
      title: 'Cardio Blast Workout',
      video: vid,
    }
  ]
  const featured = workouts[0]
  const othervideos = workouts.slice(1)
  const [activevideo, setActivevideo] = useState(null);
  return (
    <div  className='ml-64 p-4 text-white bg-[#050510]' mt-8>
      {/* Header */}
      <div className='flex justify-between items-center'>
      <div>
        <h2 className='text-2xl font-bold'>WORKOUTS EXPLORER</h2>
      </div>
      <div className='flex items-center gap-2'>
        <input type="text" placeholder="Search workouts..." className='flex items-center gap-2 bg-[#1e1e2f] p-2 rounded-lg' />
      </div>
      </div>

      <div className='flex gap-8 mt-4 '>
        <span className='bg-purple-500/50 p-1 rounded-full border-2 border-purple-500 px-4 text-white'> 
          <button>Strength</button>
          </span>
        <span className='bg-purple-500/50 p-1 rounded-full border-2 border-purple-500 px-4 text-white'> 
          <button>Cardio</button>
          </span>
        <span className='bg-purple-500/50 p-1 rounded-full border-2 border-purple-500 px-4 text-white'> 
          <button>Yoga</button>
          </span>
        <span className='bg-purple-500/50 p-1 rounded-full border-2 border-purple-500 px-4 text-white'> 
          <button>HIIT</button>
          </span>
        <span className='bg-purple-500/50 p-1 rounded-full border-2 border-purple-500 px-4 text-white'> 
          <button>Pilates</button>
          </span>
        <span className='bg-purple-500/50 p-1 rounded-full border-2 border-purple-500 px-4 text-white'> 
          <button>CrossFit</button>
          </span>
      </div>

      {/*RECOMENDED FOR YOU */}
      <div className='mt-8'>
        <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold'>RECOMMENDED FOR YOU</h2>
        <button className='bg-purple-500/50 p-1 rounded border-2 border-purple-500 px-4 text-white'>
          View All
        </button>
        </div>
        <div>
          {/* Workout card videos*/}
          <div className='grid grid-cols-3 gap-6 '>
            <div  className=' lg:col-span-1 '>
              <VideoCard 
              title={featured.title} 
              video={featured.video} 
              height='h-135'
              />
            </div>
            <div className='col-span-2 grid grid-cols-3 gap-6'>
              {othervideos.map((workout) => (
                <VideoCard 
                  key={workout.id} 
                  title={workout.title} 
                  video={workout.video} 
                  activevideo={activevideo === workout.video.id}
                  setActivevideo={setActivevideo}
                  height='h-52'/>
              ))}
              
            </div>
          </div>
        </div>
      </div>

      {/*STATISTICS */}
      <div>
        <div>
          <h2>STATISTICS</h2>
          <button>
            EXPLORE ALL
          </button>
        </div>
      </div>
    </div>
  )
}

export   default Workouts