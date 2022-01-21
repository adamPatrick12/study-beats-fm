import React from "react";
import rain from '../images/rain.png'
import { useEffect, useState } from 'react'
import RainASMR from '../Sounds/rain.mp3'

const AdditionSettings = () => {
   
    const Rain = new Audio(RainASMR)

    const [rainVolume, setRainVolume] = useState(0.2)

    const playRain = () =>{
        Rain.play()
    }
    
    Rain.volume = rainVolume  

    useEffect(() => {       //handle song change 
       
      }, [])


    return (
        <div className="infoContainer">
            <div className="time">
                Time
            </div>
            <div className="songName">
               Song Name
            </div>
            <div className="otherSoundsContainer">
               <div onClick = {playRain}className="allign">
               <input className="rainDial"
              type="range"
              orient="vertical"
              min={0}
              max={1}
              value={rainVolume}
              onChange={event => {
                setRainVolume(event.target.valueAsNumber)
              }}
              step={0.01}
              
            />
               <div className="otherSounds">
                   <img src={rain} className = "imgSizing" alt="" />
               </div>
               <div>
               
               </div>
               
               </div>
               <div className="otherSounds">
                   
               </div>
               <div className="otherSounds">
                   
               </div>
            </div>
        </div>
    )

}

export default AdditionSettings