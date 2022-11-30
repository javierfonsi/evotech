import React from "react";
//import { motion } from "framer-motion";
//import BannerImage from "../common/drone-1.jpg";
import Carrusel from "../common/Carrusel";
import './Home.css'

const Home = () => {
  return (
    //<motion.div
    //  classsName="home"
    //  style={{ backgroundImage: `url(${BannerImage})`, height: 1200 }}
    //  initial={{ with: 0 }}
    //  animate={{ width: "100%" }}
    //  exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    //>
    //  Home
    //</motion.div>
  
    <div className="main-carousel">
      {/*<Carrouselmui/>*/}
      <Carrusel/>
    </div>
  
  );
};

export default Home;
