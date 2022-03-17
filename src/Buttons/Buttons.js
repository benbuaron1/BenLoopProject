import {BsFillPauseFill, BsFillPlayFill, BsFillStopBtnFill} from "react-icons/bs";

import React from "react";

export default function Buttons(props) {
    return (
        <>
            <button className='ButtonPlayer' onClick={props.togglePlayPause}>{props.isPlaying? 'Pause' : 'Play'}</button>
            <button className='ButtonPlayer' onClick={props.togglePause}>Stop</button>
            <button className='ButtonPlayer' onClick={props.toggleLoop}>{props.isLoop?'Loop' : 'UnLoop'}</button><br/>
        </>
    )
}