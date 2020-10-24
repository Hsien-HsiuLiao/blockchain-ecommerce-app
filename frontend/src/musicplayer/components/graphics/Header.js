import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

function Header(props) {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <header>
      {/*}
      <h3>Now Playing: {songs[currentSong][0]}</h3>
  */}
      <h3>Now Playing: {props.song}</h3>
  
    </header>
  )
}

export default Header