import React from "react";
import { GrPlayFill } from 'react-icons/gr';
import skipBack from '../images/skipBack.png'
import skipFoward from '../images/skipForward.png'
import volumeOn from '../images/volumeOn.png'


const AudioControl = () => {
    return (
        <div className="audioControlContainer">
            <div className="audioControl">
                <div className="goBackBtn">
                    <img className="audioImgSize" src={skipBack} alt="" />
                </div>
                <div className="goFowardBtn">
                    <img src={skipFoward} className="audioImgSize" alt="" />
                </div>
                <div className="PlayPause">
                    <GrPlayFill className="playBtn"></GrPlayFill>
                </div>
                <div className="volume">
                    <img className="audioImgSize" src={volumeOn} alt="" />
                </div>
                <div >
                    <input className="volumeDial"
                        type="range"
                        min={0}
                        max={1}
                        step={0.02}
                        onChange={event => {
                            setVolume(event.target.valueAsNumber)
                                (song[songIndex].volume = volume)
                        }}
                    />
                </div>
            </div>


        </div>
    )
}

export default AudioControl