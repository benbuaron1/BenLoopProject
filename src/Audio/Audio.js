import React, {useEffect, useRef, useState} from 'react';
import {GiSpeaker,GiSpeakerOff} from 'react-icons/gi';


// The Audio component - render each song and controls the mute, duration, time etc...
export default function Audio (props) {
    const [duration, setDuration] = useState(0)
    const [mute,setMute] = useState(false)
    const [,setCurrentTime] = useState(0)
    const audioRef = React.useRef()
    const rangeRef = React.useRef()
    const animationRef = useRef()


    // This use effect calculates the time and sets the max time and duration for later use
    useEffect(() => {
        const seconds = Math.floor(audioRef.current.duration);
        setDuration(seconds);
        rangeRef.current.max=seconds
    })

    // Toggles the mute to specific Audio component
    const toggleMute = () => {
        setMute(mute => !mute)
    }
    
    // The function thats takes the ref and changes the time by rangeRef current value.
    const changeRange = () => {
        audioRef.current.currentTime = rangeRef.current.value;
        changePlayerCurrent()
    }
    // I choose to use the requestAnimationFrame instead of the setInterval. Two options thats works. i discovered that
    // requestAnimationFrame worked better in my project
    const whilePlayingMusic = () => {
        rangeRef.current.value = audioRef.current.currentTime;
        changePlayerCurrent()
        animationRef.current = requestAnimationFrame(whilePlayingMusic)
    }
    // This function makes the range input to move while the songs playing
    const changePlayerCurrent = () => {
        rangeRef.current.style.setProperty('',`${rangeRef.current.value / duration * 100}%`)
        setCurrentTime(rangeRef.current.value)
    //    I implemented the option to move one song only forward, unfortunately I could not implement the bonus question due lack of time.
    }
    // This use effect check the props.play and use the audioRef and rangeRef to start/stop/pause and more
    useEffect(() => {
        if (props.play) {
            audioRef.current.play()
            animationRef.current = requestAnimationFrame(whilePlayingMusic)}
        else {
            audioRef.current.pause()
            cancelAnimationFrame(animationRef.current)
            if (props.stopped) {
                audioRef.current.currentTime = 0;
            }
        }
    })
    
    return (
        <>
            <div className='audioPlayer' style={{backgroundColor:props.bcolor,flexWrap:'wrap'}}>
                <audio loop={props.loop} ref={audioRef} src={props.aud_src} preload='auto' muted={mute}>Error</audio>
                <button className='ButtonPlayer' onClick={toggleMute} >
                    {mute ?  <GiSpeakerOff/> : <GiSpeaker/>}
                </button>
                <p style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'1.4vw'}}>{props.name}</p>


            </div>
            <input ref={rangeRef} type='range' onChange={changeRange} /></>)


}