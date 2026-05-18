import React from 'react'

function VideoCard({ title, video, height}) {
  return (
    <div className='relative bg-[#1e1e2f] p-4 rounded-lg hover:scale-105 transition-transform duration-300'>
      <video src={video}
      alt={title}
      controls
      className={'w-full ' + height + ' object-cover'}
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