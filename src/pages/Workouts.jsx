import React from 'react'

function Workouts() {
  return (
    <div  className='ml-64'>
      {/* Header */}
      <div>
      <div>
        <h2>WORKOUTS EXPLORER</h2>
      </div>
      <div>
        <input type="text" placeholder="Search workouts..." />
      </div>
      </div>

      <div>
        <span> 
          <button>Strength</button>
          </span>
        <span> 
          <button>Cardio</button>
          </span>
        <span> 
          <button>Yoga</button>
          </span>
        <span> 
          <button>HIIT</button>
          </span>
        <span> 
          <button>Pilates</button>
          </span>
        <span> 
          <button>CrossFit</button>
          </span>
      </div>

      {/*RECOMENDED FOR YOU */}
      <div>
        <div>
        <h2>RECOMMENDED FOR YOU</h2>
        <button>
          View All
        </button>
        </div>
        <div>
          [/* Workout card videos*/]
          <div>
            <div>
              <video src=""></video>
            </div>
            <div>
              <video src=""></video>
              <video src=""></video>
              <video src=""></video>
              <video src=""></video>
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