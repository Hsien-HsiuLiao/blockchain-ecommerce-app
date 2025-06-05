// components/MusicSearch.tsx

import React, { useState } from 'react';

interface Song {
    id: number;
    name: string;
    artist: string;
    genre: string;
    streamUrl: string;
}

const MusicSearch: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [songs, setSongs] = useState<Song[]>([]);
    const [playingSong, setPlayingSong] = useState<HTMLAudioElement | null>(null);

    const handleSearch = async () => {
        if (!query) return;

        try {
            const response = await fetch(`https://api.example.com/songs?search=${query}`); // Replace with your API endpoint
            const data = await response.json();
            setSongs(data.songs); // Adjust based on your API response structure
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
                            <th className="border p-2">Song Name</th>
                            <th className="border p-2">Artist</th>
                            <th className="border p-2">Genre</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => (
                            <tr key={song.id}>
                                <td className="border p-2">{song.name}</td>
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
