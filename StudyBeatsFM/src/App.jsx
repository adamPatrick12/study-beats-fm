import './index.css'
import {useEffect, useState} from 'react'
import lofi from "./synthwave.mp4"
import synth from './Music/Synthwave.mp3'
import home from  './Music/HOME - Resonance.mp3'

let songIndex = 0; 

function App() {
  let audio = new Audio(synth)
  let audio2 = new Audio(home)
  let audio3 = new Audio(synth)

  
  const [songIndex, setSongIndex] = useState(0)
  const [song] = useState([audio, audio2, audio3])

  
const start = () => {
  song[songIndex].load()
  song[songIndex].play()
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
}

const previousSong = () => {
  setSongIndex(songIndex+-1)
  stopPlayingLastSong()
 }

useEffect(() => {
  start()
},[songIndex])

  return (
    
  
    <div>
        <video id="vid" autoPlay loop muted>
          <source id="mp4" src= {lofi}  type="video/mp4"/>
        </video>
        <button  className='play' onClick={start}> play</button>
        <button  className='play' onClick={pause}> pause</button>
        <button  className='play' onClick={nextSong}> next</button>
        <button  className='play' onClick={previousSong}> previous</button>
    </div>
      

    
   
  )
}

export default App

