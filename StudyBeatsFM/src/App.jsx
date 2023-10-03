import "./styles/index.css";
import "./styles/audioControl.css";
import { useState } from "react";
import AdditionSettings from "./components/additionalInfo";
import PauseImage from "./components/pauseImage";
import Loading from "./components/loadingImage";
import RadioStations from "./components/radioStations";
import github from "./images/github.png";
import coffee from "./images/coffee.png";
import play from "./images/playBtn.png";
import AudioControls from "./components/audioControl";
import pauseImg from "./images/pause.png";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { setActiveStation } from "./hooks/setActiveStation";

function App() {
  const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);

  const [livestream, playLiveStream] = useState(false);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setLivestream] = useState(
    "https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"
  );

  const [activeStation, setActiveStationState] = useState(false);

  const [stationName, setStationName] = useState("LofiGirl");

  const [youtubeChannal, setYoutubeChannal] = useState("");

  const handlePausePlaySwitch = (e) => {
    let className = e.target.className;

    if (className === "PlayPause" || className === "playBtn") {
      setPlayPause(pauseImg);
      setBtnClass("PlayPause2");
      setBtnClass2("playBtn2");
      start();
    } else if (className === "PlayPause2" || className === "playBtn2") {
      setPlayPause(play);
      setBtnClass("PlayPause");
      setBtnClass2("playBtn");
      pause();
    }
  };

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };

  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };

  const [video, setVideo] = useState(
    `//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1`
  );

  // <------------- Radio Change section -------------->
  const LofiGirlVideo = () => {
    setVideo("//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1");
    setStationName("LofiGirl");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
    setActiveStationState(true);
  };

  const AmbientRenders = (e) => {
    setVideo("//www.youtube.com/embed/hBGbt2CRDpA?autoplay=1&mute=1&start=1");
    setStationName("Ambient Renders");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCXbXfisDHV_gDjawCKTyTIw"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=CoP5wLD9clU&ab_channel=AmbientRenders"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
    setActiveStation(e, stationName);
    setActiveStationState(false);
  };

  const IvyRecords = () => {
    setVideo("//www.youtube.com/embed/F1B9Fk_SgI0?autoplay=1&mute=1&start=10");
    setStationName("Ivy Records");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCv7qaGzuEfLhKxAZf4eZONg"
    );
    setLivestream("https://www.youtube.com/watch?v=05689ErDUdM");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const ChillHiphop = () => {
    setVideo("//www.youtube.com/embed/iEGFFyv0MH4?autoplay=1&mute=1&start=1");
    setStationName("ChillHop Music");
    setYoutubeChannal("https://www.youtube.com/c/Chillhopdotcom/videos");
    setLivestream(
      "https://www.youtube.com/watch?v=7NOSDKb0HlU&ab_channel=ChillhopMusic"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const LofiBoy = () => {
    setVideo("//www.youtube.com/embed/TlWYgGyNnJo?autoplay=1&mute=1&start=19");
    setStationName("LofiBoy");
    setYoutubeChannal("https://www.youtube.com/@LofiGirl");
    setLivestream(
      "https://www.youtube.com/watch?v=4xDzrJKXOOY&ab_channel=LofiGirl"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const ChillAF = () => {
    setVideo("//www.youtube.com/embed/X9fH2VEFgwk?autoplay=1&mute=1&start=1");
    setStationName("ChillAF");
    setYoutubeChannal("https://www.youtube.com/c/CHILLAF");
    setLivestream(
      "https://www.youtube.com/watch?v=7bSlyM1allk&ab_channel=CHILLAF"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const astralThrob = () => {
    setVideo("//www.youtube.com/embed/RJcIzUNKSQk?autoplay=1&mute=1&start=1");
    setStationName("Astral Throb");
    setYoutubeChannal("https://www.youtube.com/c/AstralThrob");
    setLivestream(
      "https://www.youtube.com/watch?v=UedTcufyrHc&ab_channel=NightrideFM"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const chilledCow = () => {
    setVideo("//www.youtube.com/embed/lTRiuFIWV54?autoplay=1&mute=1&start=1");
    setStationName("Chilled Cow");
    setYoutubeChannal("https://www.youtube.com/c/LofiGirl");
    setLivestream(
      "https://www.youtube.com/watch?v=rUxyKA_-grg&ab_channel=LofiGirl"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const theJazzHopCafe = () => {
    setVideo("//www.youtube.com/embed/U8HBZOTZrf0?autoplay=1&mute=1&start=1");
    setStationName("theJazz Cafe");
    setYoutubeChannal("https://www.youtube.com/c/TheJazzHopCaf%C3%A9");
    setLivestream("https://www.youtube.com/watch?v=e3L1PIY1pN8");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const NiceGuys = () => {
    setVideo("//www.youtube.com/embed/3n1aC2TYXIA?autoplay=1&mute=1&start=1");
    setStationName("Nice Guys");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCMmt12UKW571UWtJAgWkWqg"
    );
    setLivestream("https://www.youtube.com/watch?v=AS_x4uR87Kw");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const animeVibe = (e) => {
    setVideo("//www.youtube.com/embed/5B7Rsw0L2r8?autoplay=1&mute=1&start=0");
    setStationName("AnimeVibe");
    setYoutubeChannal("https://www.youtube.com/c/AnimeVibe");
    setLivestream("https://www.youtube.com/watch?v=JWlKA9wmO64");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const collegeMusic = (e) => {
    setVideo("//www.youtube.com/embed/epaP2LCCuVE?autoplay=1&mute=1&start=0");
    setStationName("College Music");
    setYoutubeChannal("https://www.youtube.com/@CollegeMusic");
    setLivestream("https://www.youtube.com/watch?v=epaP2LCCuVE");
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const tokyoTones = () => {
    setVideo("//www.youtube.com/embed/5wRWniH7rt8?autoplay=1&mute=1&start=50");
    setStationName("TOKYO TONES");
    setYoutubeChannal("https://www.youtube.com/@TokyoTones");
    setLivestream(
      "https://www.youtube.com/watch?v=Lcdi9O2XB4E&ab_channel=TOKYOTONES"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };
  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <div className="logo">StudyBeats</div>
        <div className="radioStationsContainer">
          <RadioStations
            Ambient={AmbientRenders}
            Anime={animeVibe}
            Astral={astralThrob}
            College={collegeMusic}
            ChillHop={ChillHiphop}
            Cow={chilledCow}
            Ivy={IvyRecords}
            Boy={LofiBoy}
            Lofi={LofiGirlVideo}
            Chill={ChillAF}
            Jazz={theJazzHopCafe}
            Nice={NiceGuys}
            Tokyo={tokyoTones}
            StationName={stationName}
          />
        </div>
        <div className="socialsContainer2">
          <div className="socials">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open("https://github.com/adamPatrick12");
              }}
              className="link"
            >
              <img className="githubLogo" src={github} alt="" />
              Github
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open("https://www.buymeacoffee.com/adampatricX");
              }}
              className="link"
            >
              <img className="githubLogo" src={coffee} alt="" />
              Buy Me a Coffee
            </motion.div>
          </div>
        </div>
      </div>
      <div className="audioControlContainer">
        <AudioControls
          plauPause={handlePausePlaySwitch}
          buttonClass={BtnClass}
          playPauseImage={playPauseImg}
          buttonClass2={BtnClass2}
          LiveStreamAudio={currentLivestream}
          LiveStreamPlayPause={livestream}
        />
      </div>
      <div className={pauseScreen}>
        <PauseImage />
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
          url={video}
        />
      </div>
    </div>
  );
}

export default App;
