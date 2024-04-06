import React from 'react'
import "./SingleBox.css"

const SingleBox = ({value , handleClick}) => {
    const style = value ==="x" ? "box x" : "box o"
  return (
    <button onClick={handleClick} className={`h-28 sm:h-32 border-2 rounded-lg font-bold border-gray-400 text-[40px] ${style}`}>{value}</button>
  )
}

export default SingleBox
