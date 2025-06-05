//import { Button } from '@audius/stems'; //https://www.npmjs.com/package/@audius/stems
//import '@audius/stems/dist/stems.css';
import React, { useCallback, useEffect, useState } from 'react';
//import { ethers } from 'ethers';
//import axios from 'axios';

//import MusicPlayer from './musicplayer//MusicPlayer.js';
import MusicSearch from './AudiusSearch';

import './Audius.css';



interface User {
    name: string;
    location: string;
}

interface Track {
    id: number;
    title: string;
    artwork: {
        '150x150': string;
    };
    user: User;
}

const selectHost = async (): Promise<string> => {
    const sample = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    const res = await fetch('https://api.audius.co');
    const hosts = await res.json();
    return sample(hosts.data);
};

const Audius: React.FC = () => {
    const [track, setTrack] = useState<Track | null>(null);
    const [host, setHost] = useState<string | null>(null);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const selectedHost = await selectHost();
                const res = await fetch(`${selectedHost}/v1/tracks/trending?limit=1&timeRange=week`);
                const json = await res.json();
                const topTrack: Track = json.data[0];
                setHost(selectedHost);
                setTrack(topTrack);
            } catch (err) {
                setError('Failed to load track. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchTrack();
    }, []);

    useEffect(() => {
        if (track && host) {
            const id = track.id;
            const streamUrl = `${host}/v1/tracks/${id}/stream`;
            const audio = new Audio(streamUrl);
            setAudio(audio);
        }
    }, [track, host]);

    const onPlay = useCallback(() => {
        if (audio) {
            audio.play();
            setIsPlaying(true);
        }
    }, [audio]);

    const onPause = useCallback(() => {
        if (audio) {
            audio.pause();
            setIsPlaying(false);
        }
    }, [audio]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        track && (
            <div>
                <MusicSearch />

                <div className="topTrack">
                    <h1>Audius</h1>
                    <div className="artwork">
                        <img src={track.artwork['150x150']} alt='artwork' />
                    </div>
                    <div className="title">{track.title}</div>
                    <div className="artist">Artist: {track.user.name}</div>
                    <div className="location">{track.user.location}</div>
                    <div className="controls">
                        <button onClick={onPlay} disabled={isPlaying} aria-label="Play track">
                            {isPlaying ? 'Playing...' : 'Play'}
                        </button>
                        <button onClick={onPause} disabled={!isPlaying} aria-label="Pause track">
                            {isPlaying ? 'Pause' : 'Paused'}
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default Audius;