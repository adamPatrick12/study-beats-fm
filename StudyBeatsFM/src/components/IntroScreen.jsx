import React from "react";
import ReactPlayer from "react-player";
import "../styles/introScreen.css"
import logo from '../images/logo.jpeg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <div>
        <div className="heroContainer">
          <div className="videoContainer2">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=TGan48YE9Us&t=1309s&ab_channel=TheJazzHopCaf%C3%A9&start=40"
              width="100%"
              height="100%"
              position="relative"
              overflow="hidden"
              playing={true}
              loop={true}
              muted={true}
            />
          </div>
        </div>
        <div className="titleContainer">
          <img className="heroLogo" src={logo} alt="" />
          <h1 className="tracking-in-expand-fwd">StudyBeats</h1>
          <h3 className="subTitle"> An Online Music Player </h3>
          <div class="note-position-1 note-amination">&#9835;</div>
          <div class="note-position-2 note-amination animation-delay-2">
            &#9833;
          </div>
          <div className="bubbleContainer">
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
          </div>
          <div class="wrap">
            <Link to="/music">
                <button class="button">Start Listening</button>
            </Link>         
          </div>
        </div>
      </div>
    )
}

export default Hero