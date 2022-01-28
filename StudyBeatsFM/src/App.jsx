import './styles/index.css'
import './styles/audioControl.css'
import { useEffect, useState } from 'react'
import AdditionSettings from './components/additionalInfo'
import sythnWave from './Videos/Electronic-Gems.mp4'
import DreamsScape from './Videos/DreamsScape.mp4'
import LofiGirl from './Videos/LofiGirl.mp4'
import TheJazzHopCafe from './Videos/TheJazzHopCafe.mp4'
import ChilledCow from './Videos/ChilledCow.mp4'
import AstralThrob from './Videos/AstralThrob.mp4'
import AnimeVibe from './Videos/AnimeVibe.mp4'
import HFiveGOne from './Videos/H5G1Music.mp4'
import Intro from './Videos/intro.mp4'
import cloudHop from './Videos/cloudHop.mp4'
import slowReverb from './Videos/slowreverb.mp4'
import ChillHipHop from './Videos/ChillHipHop.mp4'
import triangle from './images/playBtn.png'
import github from './images/github.png'
import ElectronicGemsRadio from './RadioStation/ElectronicGems'
import AnimeVibeStation from './RadioStation/AnimeVibe'
import ChilledCowRadio from './RadioStation/ChilledCow'
import SlowReverbRadio from './RadioStation/SlowReverb'
import DreamScapeRadio from './RadioStation/DreamScape'
import AstralThrobRadio from './RadioStation/AstralThrob'
import LofiGirlRadio from './RadioStation/LofiGirl'
import CloudHopRadio from './RadioStation/CloudHop'
import H5G1Radio from './RadioStation/H5G1'
import ChillHopRadio from './RadioStation/ChillHop'
import play from './images/playBtn.png'
import pauseImg from './images/pause.png'
import skipBack from './images/skipBack.png'
import skipFoward from './images/skipForward.png'
import volumeOn from './images/volumeOn.png'
import mute from './images/mute.png'
import { motion } from "framer-motion"

let lastPlayedVolume = 0;

function App() {


  const [BtnClass, setBtnClass] = useState("PlayPause")           //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn")
  const [playPauseImg, setPlayPause] = useState(play)

  const [muteCheck, setUnmute] = useState("volumeOn")             //unmute/mute change
  const [muteCheck2, setUnmute2] = useState("audioOnImg")
  const [volumeImg, setVolumeImg] = useState(volumeOn)


  const [stationName, setStationName] = useState("")

  const [songIndex, setSongIndex] = useState(0)
  const [song, setStation] = useState(CloudHopRadio)     //station 
  const [songChangeCheck, setSongChange] = useState(false)
  const [volume, setVolume] = useState(1)


  const [youtubeChannal, setYoutubeChannal ] = useState('')

  song[songIndex].volume = volume   // Volume checker

  let handleSongChange = window.setInterval(function () {
    if (song[songIndex].ended === true) {
      nextSong()
    }
  }, 5000);


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
    console.log(classNameVol)


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


  const handleRadioChange = () => {
    reloadVideo()
    pause()
    setSongIndex(0)
    setPlayPause(pauseImg)
    setBtnClass("PlayPause2")
    setBtnClass2("playBtn2")
  }

  const start = () => {

    if (songChangeCheck === true) {
      song[songIndex].load()
      song[songIndex].play()
      setSongChange(false)
      song[songIndex].volume = volume
    } else {
      song[songIndex].play()
    }
  }

  const pause = () => {
    song[songIndex].pause()
  }

  const stopPlayingLastSong = () => {
    let lastSongIndex = songIndex;
    song[lastSongIndex].pause()
  }

  const nextSong = () => {
    setSongIndex(songIndex + 1)
    stopPlayingLastSong()
    setSongChange(true)
  }

  const previousSong = () => {
    setSongIndex(songIndex + -1)
    setSongChange(true)
    stopPlayingLastSong()
  }

  useEffect(() => {       //handle song change 
    start()
  }, [songIndex])


  useEffect(() => {       //handle song pause 
    start()
  }, [song])


  const [video, setVideo] = useState(Intro)


  const reloadVideo = () => {
    let backGroundVideo = document.getElementById('vid');
    backGroundVideo.pause();
    backGroundVideo.load()
    radioChange('Lofi')
  }


  // <------------- Radio Change section -------------->

  const LofiGirlVideo = () => {
    setVideo(LofiGirl)
    handleRadioChange()
    setStation(LofiGirlRadio)
    setStationName("LofiGirl")
    setYoutubeChannal('https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow')
  }

  const ElectronicGemsVideo = () => {
    setVideo(sythnWave)
    handleRadioChange()
    setStation(ElectronicGemsRadio)
    setStationName("Electronic Gems")
    setYoutubeChannal('https://www.youtube.com/c/ElectronicGems')
  }

  const DreamscapeVideo = () => {
    setVideo(DreamsScape)
    handleRadioChange()
    setStationName("DreamScape")
    setStation(DreamScapeRadio)
    setYoutubeChannal('https://www.youtube.com/c/dreamscapeyt')
  }

  const ChillHiphop = () => {
    setVideo(ChillHipHop)
    handleRadioChange()
    setStation(ChillHopRadio)
    setStationName("ChillHop Music")
    setYoutubeChannal('https://www.youtube.com/c/Chillhopdotcom/videos')
  }

  const HFiveGOneFunc = () => {
    setVideo(HFiveGOne)
    handleRadioChange()
    setStation(H5G1Radio)
    setStationName("H5G1 Music")
    setYoutubeChannal('https://www.youtube.com/channel/UCIPy2w-XdvaU73L3nAK1-0g')
  }

  const SlowReverb = () => {
    setVideo(slowReverb)
    setStationName("Slowed+Reverb")
    handleRadioChange()
    setStation(SlowReverbRadio)
    setYoutubeChannal('https://www.youtube.com/channel/UCIPy2w-XdvaU73L3nAK1-0g')
  }

  const astralThrob = () => {
    setVideo(AstralThrob)
    handleRadioChange()
    setStationName("Astral Throb")
    setStation(AstralThrobRadio)
    setYoutubeChannal('https://www.youtube.com/channel/UCOikxWuG4kluDgWfpHpqsGg')
  }

  const chilledCow = () => {
    setVideo(ChilledCow)
    handleRadioChange()
    setStationName("Chilled Cow")
    setStation(ChilledCowRadio)
    setYoutubeChannal('https://www.youtube.com/c/LofiGirl')
  }

  const theJazzHopCafe = () => {
    setVideo(TheJazzHopCafe)
    handleRadioChange()
    setStationName("theJazz Cafe")
    setYoutubeChannal('https://www.youtube.com/c/TheJazzHopCaf%C3%A9')
  }

  const CloudHop = () => {
    setVideo(cloudHop)
    handleRadioChange()
    setStationName("CloudHop")
    setStation(CloudHopRadio)
    setYoutubeChannal('https://www.youtube.com/channel/UCWRqPtvnyVUS9zpADA-9oaw')
  }

  const animeVibe = () => {
    setVideo(AnimeVibe)
    handleRadioChange()
    setStation(AnimeVibeStation)
    setStationName("AnimeVibe")
    setYoutubeChannal('https://www.youtube.com/c/AnimeVibe')
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
          <div className='radioList'>

            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={animeVibe}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              Anime Vibe
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={astralThrob}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              Astral Throb
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={ChillHiphop}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              ChillHop Music
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={chilledCow}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              Chilled Cow
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={CloudHop}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              CloudHop Music
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={DreamscapeVideo}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              DreamScape
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={ElectronicGemsVideo}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              Electronic Gems
            </motion.div>


            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={HFiveGOneFunc}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              H5G1 Music
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={LofiGirlVideo}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              <span> Lofi Girl </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={SlowReverb}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              Slow + Reverb
            </motion.div>


            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={theJazzHopCafe}
              className="station">
              <img className="triangle" src={triangle} alt="" />
              The Jazz Café
            </motion.div>



          </div>
          <div>

          </div>
        </div>
        <div className='github'> 
        <img  className = "githubLogo" src={github} alt="" />
        <a className='link' href="https://github.com/adamPatrick12" >Github</a> 
         </div>
      </div>
      <div className="audioControlContainer">
        <div className="audioControl">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={previousSong} className="goBackBtn">
            <img className="audioImgSize2" src={skipBack} alt="" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSong} className="goFowardBtn">
            <img src={skipFoward} className="audioImgSize" alt="" />
          </motion.div>
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
      <AdditionSettings youtube = {youtubeChannal} radio={stationName} />
      <video id="vid" autoPlay loop muted>
        <source id="mp4" src={video} type="video/mp4" />
      </video>

      <div className='loading'>
      <div class="container">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <p>Loading...</p>
        </div>
      </div>
        

    </div>








  )
}

export default App

