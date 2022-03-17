import './App.css';
import Title from "./Title/Title";
import Audio from "./Audio/Audio";
import React, {useRef, useState} from "react";
import {songsArray} from "./data";
import Buttons from "./Buttons/Buttons";

function App() {
  const [isPlaying, SetIsPlaying] = useState(false)
  const [isStopped, setIsStopped] = useState(false)
  const [isLoop, setIsLoop] = useState(false)
  const audioPlayer = useRef()
  const rangePlayer = useRef()


  const togglePlayPause = () => {
    const prevValue = isPlaying
    SetIsPlaying(!prevValue)
  }

  const toggleLoop = () => {
    setIsLoop(isLoop => !isLoop)
  }

  const togglePause = () => {
    SetIsPlaying(isPlaying => false)
    setIsStopped(isStopped => !isStopped)
  }
  return (
      <div className="App Title">
        <h1 className="Head">Moveo's Audio Player</h1>
        <Title name="Moveo"/>
        <>
          {songsArray.map((value, index) => {
            return <Audio rangePlayer={rangePlayer} audioPlayer={audioPlayer}
                          aud_src={`${process.env.PUBLIC_URL}/LoopFiles/${value.songFileName}.mp3`}
                          name={value.songName} bcolor={value.bcolor} play={isPlaying} stopped={isStopped}
                          loop={isLoop}/>
          })}
          <br/>
          <Buttons togglePlayPause={togglePlayPause} isPlaying={isPlaying} togglePause={togglePause}
                   toggleLoop={toggleLoop} isLoop={isLoop}/>
        </>
      </div>
  );
}

export default App;
