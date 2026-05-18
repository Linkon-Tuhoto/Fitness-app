import React from 'react'

function VideoCard({ title, video}) {
  return (
    <div className='relative bg-[#1e1e2f] p-4 rounded-lg hover:scale-105 transition-transform duration-300 w-[300px] h-[200px]'>
      <video src="{video}"
      alt={title}
      controls
      className='w-full h-full object-cover'
      ></video>
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
        <h1 className='text-lg font-bold text-white'>
          {title}
        </h1>
      </div>
    </div>
  )
}

export default VideoCard