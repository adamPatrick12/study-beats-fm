import React from "react";
import rain from '../images/rain.png'
import { useEffect, useState } from 'react'
import RainASMR from '../Sounds/rain.mp3'
import OceanASMR from '../Sounds/Ocean.mp3'
import waves from '../images/waves.png'
import WhiteNoise from '../images/whiteNoise.png'

const Rain = new Audio(RainASMR)
const Ocean = new Audio(OceanASMR)

const AdditionSettings = () => {

    const [rainVolume, setRainVolume] = useState(0)
    const [oceanVolume, setOceanVolume] = useState(0)
    const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0)

    Ocean.volume = oceanVolume
    Rain.volume = rainVolume

    Rain.play()
    Ocean.play()

    useEffect(() => {

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
                <div className="allign">
                    <input className="soundDial"
                        type="range"
                        orient="vertical"
                        min={0}
                        max={1}
                        value={rainVolume}
                        onChange={event => {
                            setRainVolume(event.target.valueAsNumber)
                        }}
                        step={0.2}

                    />
                    <div className="otherSounds">
                        <img src={rain} className="imgSizing" alt="" />
                    </div>
                </div>
                <div className="allign">
                    <input className="soundDial"
                        type="range"
                        orient="vertical"
                        min={0}
                        max={1}
                        value={oceanVolume}
                        onChange={event => {
                            setOceanVolume(event.target.valueAsNumber)
                        }}
                        step={0.2}

                    />
                    <div className="otherSounds">
                        <img src={waves} className="imgSizing" alt="" />
                    </div>
                </div>
                <div className="allign">
                    <input className="soundDial"
                        type="range"
                        orient="vertical"
                        min={0}
                        max={1}
                        value={oceanVolume}
                        onChange={event => {
                            setOceanVolume(event.target.valueAsNumber)
                        }}
                        step={0.2}

                    />
                    <div className="otherSounds">
                        <img src={WhiteNoise} className="imgSizing" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AdditionSettings