import { createContext, useState } from 'react';

const AudioContext = createContext()

export { AudioContext };


const AudioProvider = ({ children }) => {

    const [track, setTrack] = useState({
        title: "Blue Pill",
        album: "blabla",
        artist: "foulen",
        imgalbum: "https://covers4.hosting-media.net/jpg343/u3616409637395.jpg",
        preview: "/4LFA - BLUE PILL.mp3",

    });
    return <AudioContext.Provider value={{ track, setTrack }}>{children}  </AudioContext.Provider>;
};


export default AudioProvider