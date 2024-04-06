import React from 'react'

const ScoreCard = ({scores , xPlaying}) => {

  return (
    <div>
      <p className='text-center font-bold text-2xl '>Its {xPlaying ? <span className='text-green-600'>X</span> : <span className='text-green-600'>O</span>}  turn</p>
    </div>
  )
}

export default ScoreCard
