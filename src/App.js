import './App.css';
import Title from "./Title/Title";
import Audio from "./Audio/Audio";
import React, {useRef, useState} from "react";
import {songsArray} from "./data";
import Buttons from "./Buttons/Buttons";


// The main component for the site render
function App() {
  const [isPlaying, SetIsPlaying] = useState(false)
  const [isStopped, setIsStopped] = useState(false)
  const [isLoop, setIsLoop] = useState(false)
  const audioPlayer = useRef()
  const rangePlayer = useRef()

    // The func that adjust the play/pause functionality
  const togglePlayPause = () => {
    const prevValue = isPlaying
    SetIsPlaying(!prevValue)
  }
    // The func the changes the loop mode
  const toggleLoop = () => {
    setIsLoop(isLoop => !isLoop)
  }
    // The func that stop the music
  const toggleStop = () => {
      const prevValue = isStopped
    SetIsPlaying(isPlaying => false)
    setIsStopped(isStopped => !prevValue)

  }
  return (
      <div className="App Title">
        <h1 className="Head">Moveo's Audio Player</h1>
        <Title name="Moveo"/><br/>
        <>
          {/* Iterating throgh the array of songs objects and returns the relevant Audio object for each song. {data.js} */}
          {/* The props are inserted to the Audio jsx object and helps the component to render the relevant output for user */}
          {songsArray.map((value, index) => {
            return <Audio key={index} rangePlayer={rangePlayer} audioPlayer={audioPlayer}
                          aud_src={`${process.env.PUBLIC_URL}/LoopFiles/${value.songFileName}.mp3`}
                          name={value.songName} bcolor={value.bcolor} play={isPlaying} stopped={isStopped}
                          loop={isLoop}/>
          })}
          <br/>
          {/*  Buttons component - get the functions and use them as props and functions */}
          <Buttons togglePlayPause={togglePlayPause} isPlaying={isPlaying} togglePause={toggleStop}
                   toggleLoop={toggleLoop} isLoop={isLoop}/>
        </>
      </div>
  );
}

export default App;
