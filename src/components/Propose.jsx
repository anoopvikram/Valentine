import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaRegCircleStop } from "react-icons/fa6";

export const Propose = () => {
  const bgRef = useRef(null);
  const girlRef = useRef(null);
  const guyRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const audioRef = useRef(null); // 🎵 MUSIC

  const timelineRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    gsap.to(bgRef.current, {
      y: 30,
      x: 20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(girlRef.current, {
      y: 10,
      x: -5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(guyRef.current, {
      y: 3,
      x: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    timelineRef.current = gsap.timeline({ paused: true });

    timelineRef.current.to(videoContainerRef.current, {
      width: "100%",
      height: "30%",
      duration: 10,
      ease: "power2.inOut"
    });

  }, []);

  // ▶ PLAY / ⏸ PAUSE
  const togglePlay = () => {
    if (!isPlaying) {
      videoRef.current.loop = true;
      videoRef.current.play();

      // 🎵 Start music
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {});

      timelineRef.current.play();
    } else {
      videoRef.current.pause();
      audioRef.current.pause();
      timelineRef.current.pause();
    }

    setIsPlaying(!isPlaying);
  };

  // ⏹ STOP
  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;

    // 🎵 Reset music
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    timelineRef.current.pause(0);

    gsap.set(videoContainerRef.current, {
      width: "100%",
      height: "0%"
    });

    setIsPlaying(false);
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden">

      {/* 🎵 MUSIC */}
      <audio ref={audioRef} src="/music.m4a" />

      {/* Background */}
      <img
        ref={bgRef}
        src="/background.webp"
        className="absolute inset-0 scale-110 w-full h-full object-cover z-0"
      />

      {/* Girl */}
      <img
        ref={girlRef}
        src="/girl.webp"
        className="absolute bottom-0 object-contain z-10"
      />

      {/* Guy */}
      <img
        ref={guyRef}
        src="/guy.webp"
        className="absolute scale-110 bottom-0 object-contain z-20"
      />

      {/* 🎬 Video Strip */}
      <div
        ref={videoContainerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 overflow-hidden"
        style={{ width: "100%", height: "0%" }}
      >
        <video
          ref={videoRef}
          src="/valentine_video.mp4"
          className="w-full h-full object-cover"
          muted
        />
      </div>

      {/* 🎮 Controls */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-6 z-40 text-white text-4xl">

        <button onClick={togglePlay}>
          {isPlaying ? <FaRegCirclePause /> : <FaRegCirclePlay />}
        </button>

        <button onClick={stopVideo}>
          <FaRegCircleStop />
        </button>

      </div>
    </div>
  );
};
