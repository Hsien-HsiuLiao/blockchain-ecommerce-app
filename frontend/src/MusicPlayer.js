import React, { useCallback, useEffect, useState } from 'react';
//import axios from 'axios';
import { Button } from '@audius/stems';
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content.js'
import Playbar from './components/Playbar.js'


function MusicPlayer() { 

    return  (        
        <div>
          <Topbar />
          <Sidebar />
          <Content />  
          <Playbar /> 
        </div>
    )
}

export default MusicPlayer;