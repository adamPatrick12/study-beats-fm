import React from "react";
import { motion } from "framer-motion";
import triangle from "../images/playBtn.png";

const RadioStations = ({
  Ambient,
  Anime,
  Astral,
  ChillHop,
  Cow,
  Spinnin,
  Ivy,
  High,
  Lofi,
  Study,
  Jazz,
  Nice
}) => {
  return (
    <div className="radioList">
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ambient}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Ambient Renders
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Anime}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Anime Vibe
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Astral}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Astral Throb
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={ChillHop}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          ChillHop Music
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Cow}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Chilled Cow
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.65 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ivy}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Ivy Records
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.75 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={High}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          H5G1 Music
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Lofi}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          <span> Lofi Girl </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Nice}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          <span> Nice Guys </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.95 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Spinnin}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Spinnin Records
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.05 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Study}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          StudyMD
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Jazz}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          The Jazz Café
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RadioStations;
