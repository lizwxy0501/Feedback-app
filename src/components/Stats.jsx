import React, { useContext } from 'react'
import Context from './context/Context'

function Stats() {

  const {feedback} = useContext(Context)

  //calcuate rating avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length
  //keep it one decimal and replace 0
  average = average.toFixed(1).replace(/[.,]0$/, '')


  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0:average}</h4>
      </div>
  )
}


export default Stats