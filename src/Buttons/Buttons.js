import {BsFillPauseFill, BsFillPlayFill, BsFillStopBtnFill} from "react-icons/bs";
import {ImLoop} from "react-icons/im";
import {CgArrowsHAlt} from "react-icons/cg";
import React from "react";

export default function Buttons(props) {
    return (
        <>
            <button className='ButtonPlayer' onClick={props.togglePlayPause}>{props.isPlaying? <BsFillPauseFill/> : <BsFillPlayFill/>}</button>
            <button className='ButtonPlayer' onClick={props.togglePause}><BsFillStopBtnFill/></button>
            <button className='ButtonPlayer' onClick={props.toggleLoop}>{props.isLoop?<ImLoop/>  : <CgArrowsHAlt/>}</button><br/>
        </>
    )
}