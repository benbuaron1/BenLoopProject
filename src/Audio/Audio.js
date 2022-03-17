import React, {useEffect, useRef, useState} from 'react';


const Audior = React.forwardRef((props,audioPlayer) => {
    <audio ref={audioPlayer} {...props} />
})

const Range = React.forwardRef((props,rangePlayer) => {
    <input ref={rangePlayer} {...props} />
})

export default function Audio (props) {
    const [duration, setDuration] = useState(0)
    const [mute,setMute] = useState(false)
    const [currentTime,setCurrentTime] = useState(0)
    const audioRef = React.useRef()
    const rangeRef = React.useRef()
    const animationRef = useRef()



    useEffect(() => {
        const seconds = Math.floor(audioRef.current.duration);
        setDuration(seconds);
        rangeRef.current.max=seconds

    },[audioRef?.current?.loadedMetadata, audioRef?.current?.readyState])

    const toggleMute = () => {
        console.log()
        setMute(mute => !mute)
    }

    const changeRange = () => {
        audioRef.current.currentTime = rangeRef.current.value;
        changePlayerCurrent()
    }

    const whilePlaying = () => {
        rangeRef.current.value = audioRef.current.currentTime;
        changePlayerCurrent()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const changePlayerCurrent = () => {
        rangeRef.current.style.setProperty('',`${rangeRef.current.value / duration * 100}%`)
        setCurrentTime(rangeRef.current.value)
    }

    useEffect(() => {

        if (props.play) {
            audioRef.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)}
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
            <div className='audioPlayer' style={{backgroundColor:props.bcolor}}>
                <audio loop={props.loop} ref={audioRef} src={props.aud_src} preload='metadata' muted={mute}>Error</audio>
                <button className='ButtonPlayer' onClick={toggleMute} >
                    {mute ?  'Muted' : 'Unmute'}
                </button>
                <p style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{props.name}</p>

            </div>
            <input ref={rangeRef} type='range' onChange={changeRange} /></>)


}