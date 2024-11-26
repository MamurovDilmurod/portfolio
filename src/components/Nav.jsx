import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import NavLinks from "./NavLinks";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const navlinks = [
  { id: 1, title: "Home", path: "home" },
  { id: 2, title: "About", path: "about" },
  { id: 4, title: "Projects", path: "projects" },
  { id: 3, title: "Skills", path: "skills" },
  { id: 5, title: "Contact", path: "contact" },
];

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClose = () => {
    setNavOpen(false); // Mobil menyuni yopish funksiyasi
  };

  return (
    <nav className="fixed top-0 w-full left-0 right-0 z-10 bg-gray-900 bg-opacity-90">
      <div className="flex justify-between items-center py-4 px-4">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800} 
          className="text-4xl text-white font-semibold cursor-pointer"
        >
          Dilmurod
        </ScrollLink>

        <div className="hidden md:flex space-x-8 text-white cursor-pointer">
          {navlinks.map((link) => (
            <NavLinks key={link.id} path={link.path} title={link.title} />
          ))}
        </div>

        <div className="md:hidden block" onClick={() => setNavOpen(!navOpen)}>
          {!navOpen ? (
            <TiThMenu className="text-3xl hover:text-blue-600 hover:scale-105 duration-200" />
          ) : (
            <IoClose className="text-3xl hover:text-red-600 hover:scale-105 duration-200" />
          )}
        </div>
      </div>
      {navOpen && (
        <div className="absolute top-0 left-0 right-0 bg-gray-900 bg-opacity-90 md:hidden">
          <ul className="flex flex-col items-left py-4 cursor-pointer">
            {navlinks.map((link) => (
              <li key={link.id} className=" p-3 mt-2 font-semibold" >
                <ScrollLink
                  to={link.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800} 
                  onClick={handleNavClose} 
                  className="text-white hover:text-blue-500"
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Nav;
