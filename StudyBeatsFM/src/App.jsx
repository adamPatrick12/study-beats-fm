import './styles/index.css'
import './styles/audioControl.css'
import { useState } from 'react'
import AdditionSettings from './components/additionalInfo'
import PauseImage from './components/pauseImage'
import Loading from './components/loadingImage'
import RadioStations from './components/radioStation'
import github from './images/github.png'
import play from './images/playBtn.png'
import pauseImg from './images/pause.png'
import volumeOn from './images/volumeOn.png'
import mute from './images/mute.png'
import { motion } from "framer-motion"
import ReactPlayer from 'react-player'

let lastPlayedVolume = 0;

function App() {


  const [BtnClass, setBtnClass] = useState("PlayPause")           //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn")
  const [playPauseImg, setPlayPause] = useState(play)

  const [muteCheck, setUnmute] = useState("volumeOn")             //unmute/mute change
  const [muteCheck2, setUnmute2] = useState("audioOnImg")
  const [volumeImg, setVolumeImg] = useState(volumeOn)

  const [livestream, playLiveStream] = useState(false)
  const [pauseScreen, setPauseScreen] = useState("pauseScreen")
  const [currentLivestream, setLivestream] = useState('https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl')

  const [stationName, setStationName] = useState("LofiGirl")

 
  const [volume, setVolume] = useState(1)


  const [youtubeChannal, setYoutubeChannal] = useState('')



  const handlePausePlaySwitch = (e) => {
    let className = e.target.className


    if (className === "PlayPause" || className === "playBtn") {
      setPlayPause(pauseImg)
      setBtnClass("PlayPause2")
      setBtnClass2("playBtn2")
      start()
    } else if (className === "PlayPause2" || className === "playBtn2") {
      setPlayPause(play)
      setBtnClass("PlayPause")
      setBtnClass2("playBtn")
      pause()
    }
  }

  const handleMute = (e) => {
    let classNameVol = e.target.className
   
    if (classNameVol === "volumeOn" || classNameVol === "audioOnImg") {
      setVolumeImg(mute)
      setUnmute("volumeOff")
      setUnmute2("audioOffImg")
      lastPlayedVolume = volume
      setVolume(0)
    } else if (classNameVol === "volumeOff" || classNameVol === "audioOffImg") {
      setVolumeImg(volumeOn)
      setUnmute("volumeOn")
      setUnmute2("audioOnImg")
      setVolume(lastPlayedVolume)
    }
  }


  const start = () => {
    playLiveStream(false)
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
  }

  const pause = () => {
    setPauseScreen("pauseScreen")
    playLiveStream(false)
  }

  const [video, setVideo] = useState(`//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1`)



  // <------------- Radio Change section -------------->

  const LofiGirlVideo = () => {
    setVideo("//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1")
    setStationName("LofiGirl")
    setYoutubeChannal('https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow')
    setLivestream('https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const AmbientRenders = () => {
    setVideo("//www.youtube.com/embed/hBGbt2CRDpA?autoplay=1&mute=1&start=1")
    setStationName("Ambient Renders")
    setYoutubeChannal('https://www.youtube.com/channel/UCXbXfisDHV_gDjawCKTyTIw')
    setLivestream('https://www.youtube.com/watch?v=_H2sGS9Q2zA&ab_channel=AmbientRenders')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const IvyRecords = () => {
    setVideo("//www.youtube.com/embed/F1B9Fk_SgI0?autoplay=1&mute=1&start=10")
    setStationName("Ivy Records")
    setYoutubeChannal('https://www.youtube.com/channel/UCv7qaGzuEfLhKxAZf4eZONg')
    setLivestream('https://www.youtube.com/watch?v=aOPGMcLvl6g&ab_channel=CHILLAF')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const ChillHiphop = () => {
    setVideo("//www.youtube.com/embed/iEGFFyv0MH4?autoplay=1&mute=1&start=1")
    setStationName("ChillHop Music")
    setYoutubeChannal('https://www.youtube.com/c/Chillhopdotcom/videos')
    setLivestream('https://www.youtube.com/watch?v=7NOSDKb0HlU&ab_channel=ChillhopMusic')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }


  const HFiveGOneFunc = () => {
    setVideo("//www.youtube.com/embed/lniKA4QHuxg?autoplay=1&mute=1&start=1")
    setStationName("H5G1 Music")
    setYoutubeChannal('https://www.youtube.com/channel/UCIPy2w-XdvaU73L3nAK1-0g')
    setLivestream('https://www.youtube.com/watch?v=-9gEgshJUuY&ab_channel=lofigeek')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const StudyMD = () => {
    setVideo("//www.youtube.com/embed/PcxpLIv4CNU?autoplay=1&mute=1&start=1")
    setStationName("StudyMD")
    setYoutubeChannal('https://www.youtube.com/channel/UC5CRP-6oxYenIgBj17CkBZg')
    setLivestream('https://www.youtube.com/watch?v=uxR_sTZnBtg&ab_channel=StudyMD')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const astralThrob = () => {
    setVideo("//www.youtube.com/embed/dIf_ZQZCSoM?autoplay=1&mute=1&start=1")
    setStationName("Astral Throb")
    setYoutubeChannal('https://www.youtube.com/c/AstralThrob')
    setLivestream('https://www.youtube.com/watch?v=xxgxkjV70Vc&ab_channel=NightrideFM')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const chilledCow = () => {
    setVideo("//www.youtube.com/embed/lTRiuFIWV54?autoplay=1&mute=1&start=1")
    setStationName("Chilled Cow")
    setYoutubeChannal('https://www.youtube.com/c/LofiGirl')
    setLivestream('https://www.youtube.com/watch?v=DWcJFNfaw9c&ab_channel=LofiGirl')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const theJazzHopCafe = () => {
    setVideo("//www.youtube.com/embed/U8HBZOTZrf0?autoplay=1&mute=1&start=1")
    setStationName("theJazz Cafe")
    setYoutubeChannal('https://www.youtube.com/c/TheJazzHopCaf%C3%A9')
    setLivestream('https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const CloudHop = () => {
    setVideo("//www.youtube.com/embed/70NcGd759Bc?autoplay=1&mute=1&start=1")
    setStationName("CloudHop")
    setYoutubeChannal('https://www.youtube.com/channel/UCWRqPtvnyVUS9zpADA-9oaw')
    setLivestream('https://www.youtube.com/watch?v=kgx4WGK0oNU&ab_channel=%E9%98%BF%E9%B2%8DAbao')
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const animeVibe = () => {
    setVideo('//www.youtube.com/embed/zL1gMeoN8bI?autoplay=1&mute=1&start=42')
    setStationName("AnimeVibe")
    setYoutubeChannal('https://www.youtube.com/c/AnimeVibe')
    setLivestream("https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgic")
    playLiveStream(true)
    setPauseScreen("unpauseScreen")
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  return (


    <div className='interfaceContainer'>


      <div className="radioContainer">

        <div className="logo">
          StudyBeats
        </div>
        <div className="subHeading">

        </div>
        <div className="radioStationsContainer">
           
        <RadioStations
        Ambient={AmbientRenders}
        Anime={animeVibe}
        Astral={astralThrob}
        ChillHop={ChillHiphop}
        Cow={chilledCow}
        Cloud={CloudHop}
        Ivy={IvyRecords}
        High={HFiveGOneFunc}
        Lofi={LofiGirlVideo}
        Study={StudyMD}
        Jazz={theJazzHopCafe}

        

        />

        </div>
        <div className='socialsContainer2'>
          <div className='socials'>
            
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => { window.open("https://github.com/adamPatrick12") }}
              className="link">
              <img className="githubLogo" src={github} alt="" />
              Github
            </motion.div>

           
            
          </div>
        </div>
      </div>
      <div className="audioControlContainer">
        <div className="audioControl">

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePausePlaySwitch} className={BtnClass}>
            <img src={playPauseImg} className={BtnClass2} alt="" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.09 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleMute} className={muteCheck}>
            <img className={muteCheck2} src={volumeImg} alt="" />
          </motion.div>
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
      <div className={pauseScreen}>
            <PauseImage/>
        <p style={{ marginTop: "0rem" }}>Music Paused</p>
      </div>
      <AdditionSettings youtube={youtubeChannal} radio={stationName} />
      <div class="videoContainer">
          <ReactPlayer
          className="vid"
          width="140%" 
          height="140%"
          loop="true"
          playing={livestream}
          volume="mute"
          url={video} />
      </div>
 

      <ReactPlayer
        className="liveStreamPlayer"
        playing={livestream}
        volume={volume}
        url={currentLivestream} />

      <Loading/>


    </div>








  )
}

export default App

