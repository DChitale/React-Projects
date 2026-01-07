import React, { useRef } from 'react'
import Nav from './Nav'
import Dashboard from './Dashboard'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Home = () => {
const bgimg= useRef();

useGSAP(()=>{
  gsap.from(bgimg.current,{
    duration:0.5,
    opacity:0
  })
})
  return (
<div ref={bgimg} className="relative min-h-screen bg-cover bg-top bg-[url(https://ik.imagekit.io/dchitale/Squid%20Game/211004-squid-game-jm-02-d98e90.jpg)]">
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-pink-900/60 via-black/40 to-green/80"></div>

  {/* Content */}
  <div className="relative z-10">
    <Nav />
    <Dashboard />
  </div>

</div>

  )
}
