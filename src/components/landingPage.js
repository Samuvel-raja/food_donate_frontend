import React from "react";
import "../styles/landingPage.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const role = Cookies.get("role");
  return (
    <div className='video-landing-container'>
      <video
        className='video-bg'
        autoPlay
        loop
        muted
        playsInline
        src={
          "https://videos.pexels.com/video-files/1111421/1111421-hd_1920_1080_30fps.mp4"
        }
        type='video/mp4'
      ></video>

      <div className='video-overlay'>
        <h1 className='video-title'>Delicious Meals Delivered to Your Door</h1>
        <p className='video-subtitle'>
          Fresh ingredients. Incredible taste. Start your food journey today!
        </p>
        <Link to={"/loginsignin"} className='video-btn'>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
