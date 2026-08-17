import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

function Nav() {
  const [navLinksopen, setNavLinkesOpen] = useState(false);

  const links = [
    { text: "Play", link: "/play" },
    { text: "About", link: "/about" },
    { text: "How To Play", link: "/how-to-play" },
  ];
  return (
    <nav className="fixed top-0 right-0 left-0 w-full flex justify-between items-center p-3  pl-12 pr-12 bg-secondary z-50">
      <div className="logo text-3xl font-bold text-white">
        <Link to={"/"}>
          <span className="accent bg-clip-text text-transparent">7</span>arefa
        </Link>
      </div>

      <div className="navLinksToggler hidden max-sm:block">
        <IoMdMenu
          className="text-4xl text-white cursor-pointer"
          onClick={() => {
            setNavLinkesOpen(!navLinksopen);
          }}
        />
      </div>

      <ul className={`nav-links flex max-sm:flex-col max-sm:fixed max-sm:top-15 max-sm:right-0 max-sm:bg-[#0D1117] max-sm:w-auto justify-evenly gap-2 list-none text-xl w-2/3 transition-all duration-300 ease-in-out ${navLinksopen && 'hidden'}`}>
        {links.map((link, index) => (
          <li
            key={index}
            className="text-secondary hover:font-bold hover:text-white max-sm:p-12 max-sm:hover:bg-[#1f2630] transition-all duration-300 ease-in-out"
          >
            <a href={link.link}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
