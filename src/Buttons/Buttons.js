
import {FaPlay,FaStop,FaPause,FaArrowsAltH} from 'react-icons/fa'
import {ImLoop} from 'react-icons/im'
import React from "react";

// This component takes the buttons and the relevant function to execute.
export default function Buttons(props) {
    return (
        <>
            <p>Auto Start From 0: {props.stopped?'True':'False'} </p>
            <button className='ButtonPlayer' onClick={props.togglePlayPause}>{props.isPlaying? <FaPause/> : <FaPlay/>}</button>
            <button className='ButtonPlayer' onClick={props.togglePause}><FaStop/></button>

            <button className='ButtonPlayer' onClick={props.toggleLoop}>{props.isLoop?<ImLoop/> : <FaArrowsAltH/>}</button><br/>

        </>
    )
}