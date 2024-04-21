import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWithScreen = () => {
      const currentWidth = window.innerWidth;
      setScreenSize(currentWidth);
    };
    window.addEventListener("resize", handleWithScreen);
    return () => {
      window.removeEventListener("resize", handleWithScreen);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="   container mx-auto grid place-items-center mt-5">
        <nav
          className={`transition-all fixed  ${
            screenSize < 400 ? " bottom-1 mb-2 shadow-sm shadow-white" : ""
          } flex gap-4  p-2 rounded-lg items-center mt-5 z-40 ${
            scrollPosition > 0 ? " bg-[#53515155]" : ""
          } transition-all`}
        >
          <a
            href=""
            className=" hover:bg-indigo-500  text-[.8rem] md:text-xl hover:rounded-lg transition-all p-1"
          >
            Experience
          </a>
          <a
            href=""
            className=" hover:bg-indigo-500 text-[.8rem] md:text-xl hover:rounded-lg transition-all p-1"
          >
            Projects
          </a>
          <a
            href=""
            className=" hover:bg-indigo-500 text-[.8rem] md:text-xl hover:rounded-lg transition-all p-1"
          >
            About Me
          </a>
          <a
            href=""
            className=" hover:bg-indigo-500 text-[.8rem] md:text-xl hover:rounded-lg transition-all p-1"
          >
            Contact
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
