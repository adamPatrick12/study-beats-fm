import './styles/index.css'
import './styles/audioControl.css'
import {useEffect, useState} from 'react'
// import RadioList from './components/radioList'
import AudioControl from './components/audioControls'
import PomodoroTimer from './components/pomodoroTimer'
import AdditionSettings from './components/additionalInfo'
// import BackgroundVideo from './components/backgroundVideo'
import sythnWave from './Videos/Electronic-Gems.mp4'
import LofiGirl from './Videos/LofiGirl.mp4'
import triangle from './images/playBtn.png'


function App() {
  
  const [video, setVideo] = useState(sythnWave)

 

  const reloadVideo = () => {
    let backGroundVideo = document.getElementById('vid');
    backGroundVideo.pause();
    backGroundVideo.load()
  }

  const LofiGirlRadio = () =>{
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
              <img onClick={LofiGirlRadio} className="triangle" src={triangle} alt="" />
                 Lofi Girl
              </div>
              <div className="station">
              <img className="triangle" src={triangle} alt="" />
                 Chilled Cow
              </div>           
            </div>
        </div>
          <PomodoroTimer/>
          <AudioControl/>
          <AdditionSettings/>
          <video id="vid" autoPlay loop muted>
          <source id="mp4" src= {video}  type="video/mp4"/>
          </video>
            
         
        
    </div>



    
      

    
   
  )
}

export default App

 