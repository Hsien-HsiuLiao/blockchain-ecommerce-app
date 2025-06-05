// components/MusicSearch.tsx

import React, { useState } from 'react';

interface User {
    name: string;
    location: string;
    profile_picture: {
        '150x150': string;
        '480x480': string;
        '1000x1000': string;
    };
}

interface Song {
    id: string;
    title: string;
    artist: string;
    genre: string;
    streamUrl: string; 
    artwork: {
        '150x150': string;
        '480x480': string;
        '1000x1000': string;
    };
}

const selectHost = async (): Promise<string> => {
    const sample = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    const res = await fetch('https://api.audius.co');
    const hosts = await res.json();
    return sample(hosts.data);
};

const MusicSearch: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [songs, setSongs] = useState<Song[]>([]);
    const [playingSong, setPlayingSong] = useState<HTMLAudioElement | null>(null);

    const handleSearch = async () => {
        if (!query) return;
//https://audiusproject.github.io/api-docs/?javascript#search-tracks
        try {
            const selectedHost = await selectHost(); 
            const response = await fetch(`${selectedHost}/v1/tracks/search?query=${query}`);
            const data = await response.json();

            // Map the response to the Song interface
            const fetchedSongs: Song[] = data.data.map((item: any) => ({
                id: item.id,
                title: item.title,
                artist: item.user.name,
                genre: item.genre,
                streamUrl: `${selectedHost}/v1/tracks/${item.id}/stream`, // Assuming this is the correct stream URL
                artwork: item.artwork,
            }));

            setSongs(fetchedSongs);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    };

    const togglePlay = (song: Song) => {
        if (playingSong) {
            playingSong.pause();
            setPlayingSong(null);
        } else {
            const audio = new Audio(song.streamUrl);
            audio.play();
            setPlayingSong(audio);
        }
    };

    return (
        <div className="p-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for songs..."
                className="border p-2 rounded w-full mb-4"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
                Search
            </button>

            {songs.length > 0 && (
                <table className="min-w-full mt-4 border">
                    <thead>
                        <tr>
                            <th className="border p-2">Artwork</th>
                            <th className="border p-2">Song Name</th>
                            <th className="border p-2">Artist</th>
                            <th className="border p-2">Genre</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => (
                            <tr key={song.id}>
                                <td className="border p-2">
                                    <img src={song.artwork['150x150']} alt={song.title} className="w-16 h-16" />
                                </td>
                                <td className="border p-2">{song.title}</td>
                                <td className="border p-2">{song.artist}</td>
                                <td className="border p-2">{song.genre}</td>
                                <td className="border p-2">
                                    <button
                                        onClick={() => togglePlay(song)}
                                        className="bg-green-500 text-white p-1 rounded"
                                    >
                                        {playingSong ? 'Pause' : 'Play'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MusicSearch;
