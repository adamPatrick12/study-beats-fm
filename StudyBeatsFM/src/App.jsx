import './styles/index.css'
import './styles/audioControl.css'
import {useEffect, useState} from 'react'
import AudioControl from './components/audioControls'
import PomodoroTimer from './components/pomodoroTimer'
import AdditionSettings from './components/additionalInfo'
import sythnWave from './Videos/Electronic-Gems.mp4'
import LofiGirl from './Videos/LofiGirl.mp4'
import triangle from './images/playBtn.png'
import synth from './Music/Synthwave.mp3'
import home from  './Music/HOME - Resonance.mp3'
import ElectronicGemsRadio from './RadioStation/ElectronicGems'
import LofiGirlRadio from './RadioStation/LofiGirl'

function App() {
  
  const [change, setChange] = useState(false)
  const [radio, radioChange] = useState('retro')
  const [radioPlaylist, setRadioPlaylist] = useState(ElectronicGemsRadio(radio))
  const [video, setVideo] = useState(sythnWave)


  const reloadVideo = () => {
    let backGroundVideo = document.getElementById('vid');
    backGroundVideo.pause();
    backGroundVideo.load()
    radioChange('Lofi')
    setChange(true)
  }

  const LofiGirlVideo = () =>{
    setVideo(LofiGirl)
    reloadVideo()
    
  }
 
  return (
    

    <div className='interfaceContainer'>
         
          
         <div className="radioContainer">
            <div className="logo">
                StudyBeats
            </div>
            <div className="subHeading">
                Stations
            </div>
            <div className="radioStations">
              <div className="station">
              <img onClick={LofiGirlVideo} className="triangle" src={triangle} alt="" />
                 Lofi Girl
              </div>
              <div className="station">
              <img className="triangle" src={triangle} alt="" />
                 Chilled Cow
              </div>           
            </div>
        </div>
          <PomodoroTimer/>
          <AudioControl change = {change} song = {ElectronicGemsRadio(radio)}/>
          <AdditionSettings/>
          <video id="vid" autoPlay loop muted>
          <source id="mp4" src= {video}  type="video/mp4"/>
          </video>
            
         
        
    </div>



    
      

    
   
  )
}

export default App

 