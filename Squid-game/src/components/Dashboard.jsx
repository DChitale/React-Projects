import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Dashboard = () => {
  const character = useRef();
  const logo = useRef();
  const paragraph = useRef();

useGSAP(()=>{
  const tl = gsap.timeline();
  tl.from(character.current,{
    y:200,
    duration:1
  })

  tl.from(logo.current,{
    opacity:0,
    delay:0.5,
    duration:1
  })
  
  tl.from(paragraph.current,{
    opacity:0,
    y:30,
 
  })
});

  return (
    <div className='h-full w-full'>
    <div>
        <img ref={logo} className='absolute top-0 left-15 h-200 w-200'src="https://ik.imagekit.io/dchitale/Squid%20Game/name%20logo.png" alt="" />
    </div>
    <div className=' absolute top-150 left-50 max-w-100 text-justify text-white'>
        <h3 ref={paragraph}>
            Squid Game turns childhood games into a brutal test of survival. Drawn by debt and desperation, players risk everything for one final chance, where each round strips away innocence and reveals the true cost of hope.
        </h3>
    </div>
    <div>
        <img  ref={character}
        className='absolute w-150 right-40' src="https://ik.imagekit.io/dchitale/Squid%20Game/character-Photoroom.png" alt="" />
    </div>
    </div>
  )
}

export default Dashboard