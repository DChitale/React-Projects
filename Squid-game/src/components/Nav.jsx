import React, { useRef } from "react";
import { Menu } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
    const logo = useRef();
    const navLink = useRef();
    const menu = useRef();

useGSAP(()=>{
  const tl = gsap.timeline();
  tl.from(logo.current,{
    y:-100,
    duration:0.5
  })
  tl.from(navLink.current.querySelectorAll("h1"),{
    opacity:0,
    y:-10,
    stagger:0.3
  })
tl.from(menu.current,{
  opacity:0,
  duration:0.5
})
})
  return (
    <div className="cursor-pointer relative flex items-center w-screen h-20 pt-10 pl-20 pr-20  text-white">
      
      {/* Left: Logo */}
      <div className="flex items-center cursor-pointer">
        <img
        ref={logo}
          className="w-24"
          src="https://preview.redd.it/qlev5tln9iq71.png?width=640&crop=smart&auto=webp&s=d38a2d4f2005eb2331b02f5b435cdd2050e3fd5f"
          alt="logo"
        />
      </div>

      {/* Center: Nav links */}
      <div ref={navLink} className="absolute  left-1/2 -translate-x-1/2 flex uppercase gap-10 ">
        <h1>About</h1>
        <h1>Games</h1>
        <h1>Actors</h1>
        <h1>History</h1>
      </div>

      {/* Right: Menu */}
      <div ref={menu} className="ml-auto flex items-center gap-2">
        <Menu />
        <h1>Menu</h1>
      </div>

    </div>
  );
};

export default Nav;
