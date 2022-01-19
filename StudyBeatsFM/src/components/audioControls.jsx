import React from "react";
import {useEffect, useState} from 'react'
import play from '../images/playBtn.png'
import pauseImg from '../images/pause.png'
import skipBack from '../images/skipBack.png'
import skipFoward from '../images/skipForward.png'
import volumeOn from '../images/volumeOn.png'
import synth from '../Music/Synthwave.mp3'
import home from  '../Music/HOME - Resonance.mp3'
import mute from '../images/mute.png'

let lastPlayedVolume


const AudioControl = () => {
    
  let audio = new Audio(synth)
  let audio2 = new Audio(home)
  let audio3 = new Audio(synth)

  const [BtnClass, setBtnClass] = useState("PlayPause")           //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn")
  const [playPauseImg, setPlayPause] = useState(play)

  const [muteCheck, setUnmute] = useState("volumeOn")             //unmute/mute change
  const [muteCheck2, setUnmute2] = useState("audioOnImg")
  const [volumeImg, setVolumeImg] = useState(volumeOn)
  

  
  const [songIndex, setSongIndex] = useState(0)
  const [song] = useState([audio, audio2, audio3])
  const [songChangeCheck, setSongChange] = useState(false)
  const [volume, setVolume] = useState(1)
  const [VolumeThumb, setVolumeThumb] = useState(volume)
 
  song[songIndex].volume = volume   // Volume checker

    const handlePausePlaySwitch = (e) => {
        let className = e.target.className
        console.log(className)


        if(className === "PlayPause" || className === "playBtn"){
            setPlayPause(pauseImg)
            setBtnClass("PlayPause2")
            setBtnClass2("playBtn2")
            start()
        }else if(className === "PlayPause2" || className === "playBtn2"){
            setPlayPause(play)
            setBtnClass("PlayPause")
            setBtnClass2("playBtn")
            pause()
        }
    }

    const handleMute = (e) => {
        let classNameVol = e.target.className
        console.log(classNameVol)


        if(classNameVol === "volumeOn" || classNameVol === "audioOnImg"){
            setVolumeImg(mute)
            setUnmute("volumeOff")
            setUnmute2("audioOffImg")
            lastPlayedVolume = volume
            setVolume(0)
        }else if(classNameVol === "volumeOff" || classNameVol === "audioOffImg"){
            setVolumeImg(volumeOn)
            setUnmute("volumeOn")
            setUnmute2("audioOnImg")
            setVolume(lastPlayedVolume)
        }
    }

const start = () => {

  if(songChangeCheck === true){
    song[songIndex].load()
    song[songIndex].play()
    setSongChange(false)
    song[songIndex].volume = volume
  }else{
    song[songIndex].play()
  }
}

const pause = () => {
  song[songIndex].pause()
}

const stopPlayingLastSong = () =>{
 let lastSongIndex = songIndex;
 song[lastSongIndex].pause()
}

const nextSong = () => {
 setSongIndex(songIndex+1)
 stopPlayingLastSong()
 setSongChange(true)
}

const previousSong = () => {
  setSongIndex(songIndex+-1)
  setSongChange(true)
  stopPlayingLastSong()
 }

useEffect(() => {
  start()
},[songIndex])
    
    return (
        <div className="audioControlContainer">
            <div className="audioControl">
                <div  onClick={previousSong} className="goBackBtn">
                    <img className="audioImgSize2" src={skipBack} alt="" />
                </div>
                <div onClick={nextSong} className="goFowardBtn">
                    <img src={skipFoward} className="audioImgSize" alt="" />
                </div>
                <div onClick={handlePausePlaySwitch} className={BtnClass}>
                  <img src={playPauseImg} className={BtnClass2} alt="" />
                </div>
                <div onClick={handleMute} className={muteCheck}>
                    <img className={muteCheck2} src={volumeImg} alt="" />
                </div>
                <div >
                    <input className="volumeDial"
                        type="range"
                        min={0}
                        max={1}
                        value={volume}
                        step={0.01}
                        onChange={event => {
                            setVolume(event.target.valueAsNumber)   
                                
                        }}
                    />
                </div>
            </div>


        </div>
    )
}

export default AudioControl