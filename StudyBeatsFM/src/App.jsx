import './index.css'
import {useEffect, useState} from 'react'
import synth from './Music/Synthwave.mp3'
import home from  './Music/HOME - Resonance.mp3'
import BackGroundVideo from './components/backgroundVideo'
import BackgroundVideo from './components/backgroundVideo'
import RadioList from './components/radioList'
import AudioControl from './components/audioControls'
import PomodoroTimer from './components/pomodoroTimer'
import AdditionSettings from './components/additionalInfo'

let songIndex = 0; 

function App() {
  let audio = new Audio(synth)
  let audio2 = new Audio(home)
  let audio3 = new Audio(synth)

  
  const [songIndex, setSongIndex] = useState(0)
  const [song] = useState([audio, audio2, audio3])
  const [songChangeCheck, setSongChange] = useState(false)
  const [volume, setVolume] = useState(1)
  

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
    
  
    <div className='interfaceContainer'>
         
          <RadioList/>
          <PomodoroTimer/>
          <AudioControl/>
            <AdditionSettings/>
          
           <BackgroundVideo/>
            
{/* <button  className='play' onClick={start}> play</button>
        <button  className='play' onClick={pause}> pause</button>
        <button  className='play' onClick={nextSong}> next</button>
        <button  className='play' onClick={previousSong}> previous</button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          onChange={event => {
            setVolume(event.target.valueAsNumber)
            (song[songIndex].volume = volume )
          }}
        /> */}
        
    </div>



    
      

    
   
  )
}

export default App

 