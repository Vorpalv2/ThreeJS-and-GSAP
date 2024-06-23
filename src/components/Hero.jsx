import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";
// console.log(heroVideo);

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", { opacity: 1, ease: "back.inOut", delay: 1.5 });
  }, []);

  return (
    <div className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">IPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12"></div>
        <video
          className="pointer-events-none"
          src={videoSrc}
          autoPlay
          muted
          playsInline={true}
          key={videoSrc}
        ></video>
      </div>
    </div>
  );
};

export default Hero;
