
import {FaPlay,FaStop,FaPause,FaArrowsAltH} from 'react-icons/fa'
import {ImLoop} from 'react-icons/im'
import React from "react";

export default function Buttons(props) {
    return (
        <>
            <button className='ButtonPlayer' onClick={props.togglePlayPause}>{props.isPlaying? <FaPause/> : <FaPlay/>}</button>
            <button className='ButtonPlayer' onClick={props.togglePause}><FaStop/></button>
            <button className='ButtonPlayer' onClick={props.toggleLoop}>{props.isLoop?<ImLoop/> : <FaArrowsAltH/>}</button><br/>
        </>
    )
}