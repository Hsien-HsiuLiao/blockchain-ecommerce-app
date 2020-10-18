import React, { useCallback, useEffect, useState } from 'react';
//import { ethers } from 'ethers';
//import axios from 'axios';
import './Audius.css';
import { Button } from '@audius/stems';
import MusicPlayer from './MusicPlayer.js';

const selectHost = async () => {
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    const res = await fetch('https://api.audius.co')
    const hosts = await res.json()
    return sample(hosts.data)
  }


function Audius() { 
    
    const [track, setTrack] = useState(null)
    const [host, setHost] = useState(null)
  
    useEffect(() => {
      const fetchTrack = async () => {
        const selectedHost = await selectHost()
        const res = await fetch(`${selectedHost}/v1/tracks/trending?limit=1&timeRange=week`)
        const json = await res.json()
        const topTrack = json.data[0]
        console.log("track2: ",json.data[1]);
        setHost(selectedHost)
        setTrack(topTrack)
      }
      fetchTrack()
    }, [])
  
    const [audio, setAudio] = useState(null);
    useEffect(() => {
      if (track) {
        console.log(track)
        const id = track.id;
        const streamUrl = `${host}/v1/tracks/${id}/stream`
        const audio = new Audio(streamUrl)
        setAudio(audio)
  //      audio.play()
      }
    }, [track])
  
    const onPlay = useCallback(()=> {
      if(audio) {
        audio.play()
      }
    }, [audio])

    const onPause = useCallback(()=> {
        if(audio) {
          audio.pause()
        }
      }, [audio])

    return track && (
        
        <div className="topTrack">
            
      <div className="artwork">
        <img src={track.artwork['150x150']} alt='artwork' />
      </div>
      <div className="title">
        { track.title }
      </div>
      <div className="artist">
        { track.user.name }
      </div>
      <div className="location">
        { track.user.location }
      </div>
      <Button 
        text='Play Track'
        onClick={onPlay} />
            
            <button 
        text='Pause Track'
        onClick={onPause}>
            Pause
            </button>
        <MusicPlayer />

    </div>
    
    )
}

export default Audius;