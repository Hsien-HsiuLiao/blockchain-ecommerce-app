import React from 'react'

function Graphics(props) {
  return (
    <div className="graphics">
      <img alt="graphic" src={props.artwork}></img>
    </div>
  )
}

export default Graphics