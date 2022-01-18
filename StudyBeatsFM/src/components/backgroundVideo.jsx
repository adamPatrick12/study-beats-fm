import React from "react";
import sythnWave from '../Videos/Electronic-Gems.mp4'

const BackgroundVideo = () => {
    return (
        <video id="vid" autoPlay loop muted>
        <source id="mp4" src= {sythnWave}  type="video/mp4"/>
       </video>
    ) 
   
}


export default BackgroundVideo