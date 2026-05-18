import React from 'react';
import { useEffect, useRef, useState } from 'react';

function VideoCard({ title, video, height,activevideo, setActivevideo, isActive }) {
  const videoRef = useRef(null)
  useEffect(() => {
    if(!isActive){
      videoRef.current.pause()
    }
  }, [isActive])
  return (
    <div className='relative  p-4 rounded-lg hover:scale-105 transition-transform duration-300'>
      <video src={video}
      ref={videoRef}
      alt={title}
      controls
      onPlay={() => 
        setActivevideo(video.id)
      }
      className={'w-full ' + height + ' object-cover'}
      />
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
        <h1 className='text-lg font-bold text-white'>
          {title}
        </h1>
      </div>
    </div>
  )
}

export default VideoCard