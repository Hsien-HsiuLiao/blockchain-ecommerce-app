import React, { useCallback, useEffect, useState } from 'react';
//import axios from 'axios';
import { Button } from '@audius/stems';
import Header from './components/graphics/Header'
import Graphics from './components/graphics/Graphics'
import Playlist from './components/playlist/Playlist'
import Actions from './components/playlist/Actions'
import Controls from './components/Controls'

import PlayerState from './context/PlayerState'


import './main.css'
import './input.css'

function MusicPlayer(props) { 

    return  (        
   /*     <div>
          Music Player
     */     
    <PlayerState>
      <div className="main">
        <div className="top">
          <div className="left">
            <Header song={props.song}/>   
            <Graphics artwork={props.artwork}/>
          </div>
         <div className="right">
            <Actions />
            <Playlist />
           </div>
        </div>
       <Controls audio={props.audio} />
      </div>
       </PlayerState>
 /*
        </div>
        */
    )
}

export default MusicPlayer;