import React from "react";
import { Menu } from "lucide-react";

const Nav = () => {
  return (
    <div className="cursor-pointer relative flex items-center w-screen h-20 pt-10 pl-20 pr-20  text-white">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          className="w-24"
          src="https://preview.redd.it/qlev5tln9iq71.png?width=640&crop=smart&auto=webp&s=d38a2d4f2005eb2331b02f5b435cdd2050e3fd5f"
          alt="logo"
        />
      </div>

      {/* Center: Nav links */}
      <div className="absolute  left-1/2 -translate-x-1/2 flex uppercase gap-10">
        <h1>About</h1>
        <h1>Games</h1>
        <h1>Actors</h1>
        <h1>History</h1>
      </div>

      {/* Right: Menu */}
      <div className="ml-auto flex items-center gap-2">
        <Menu />
        <h1>Menu</h1>
      </div>

    </div>
  );
};

export default Nav;
