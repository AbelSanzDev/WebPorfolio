import { Image, useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ModalProjects from "./ModalProjects";

const PersonalProjects = ({ elementRef4, elementRef5, ref4, ref5 }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [photo, setPhoto] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const onOpenImage = (image) => {
    setPhoto(image);
    onOpen();
  };

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
  // console.log(ref4);
  //600
  // console.log(ref5);
  //500
  return (
    <>
      <div className="mx-[5%] mt-20">
        <div
          className={` transition-all duration-1000 ${
            ref4 < 700 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-center text-5xl md:text-8xl font-thin underline ">
            Projects
          </h1>
          {/* Moaibi */}
          <div className="mt-[5rem]">
            <div className="grid-propio-moaibi ">
              <div>
                <div className="md:flex gap-2 items-center">
                  <h1
                    ref={elementRef4}
                    className="md:text-7xl text-4xl font-thin"
                  >
                    Moaibi
                  </h1>
                  <div className="flex gap-2">
                    <img
                      className="md:w-[4rem] w-[2rem]"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560801/Portfolio/svgTechnologies/d81bfgaubx7sj8yryc21.svg"
                      alt=""
                    />
                    <img
                      className="md:w-[4rem] w-[2rem]"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560801/Portfolio/svgTechnologies/xu7lgqrnkamb4ou4r5gk.svg"
                      alt=""
                    />
                    <img
                      className="md:w-[4rem] w-[2rem] bg-white rounded-full"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560802/Portfolio/svgTechnologies/ktflyw7naz8lpnhit3r4.svg"
                      alt=""
                    />
                    <img
                      className="md:w-[4rem] w-[2rem]"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560802/Portfolio/svgTechnologies/cc6jzzp7ddfddfj2sahb.svg"
                      alt=""
                    />
                    <img
                      className="md:w-[4rem] w-[2rem]"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560802/Portfolio/svgTechnologies/u0ihmupvalerozvysubi.svg"
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="text-xl font-thin">Currently in development</h2>
                <h2 className=" text-2xl md:text-3xl mt-4">What's Moaibi?</h2>
                <p className="text-xl font-thin">
                  Moaibi is a social network that brings college students from
                  around the world together. It's a place where you can connect,
                  share ideas, and build your network. Whether you're looking
                  for your dream job or thinking about starting your own
                  business, Moaibi gives you the resources and community support
                  you need to make it happen. Join us at Moaibi, and let's start
                  shaping your future together!
                </p>
                <div className="mt-10 ">
                  <img
                    className="mask object-cover w-full"
                    src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713561833/Portfolio/jozstulldiph1smvddzb.png"
                    alt=""
                  />

                  <p className=" font-thin text-xl mb-4 md:text-3xl bg-indigo-700 rounded-lg p-2">
                    "We don't make products just to make money. We make products
                    that we want for ourselves, and then we say, 'Hey, we can
                    sell this!'"
                  </p>
                </div>
              </div>
              <div>
                <div className=" grid grid-cols-2 ">
                  <Image
                    isBlurred
                    isZoomed
                    className=" cursor-pointer "
                    src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713559352/Portfolio/zubkzvzqybm9mbubklmm.png"
                    alt="Moaibi"
                    onClick={() => onOpenImage(0)}
                  />
                  <Image
                    isBlurred
                    isZoomed
                    className="cursor-pointer "
                    src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713559352/Portfolio/wp2mpnhznl4qbuiizhlo.png"
                    alt="Moaibi"
                    onClick={() => onOpenImage(1)}
                  />
                </div>
                <div className="  mt-6">
                  <Image
                    isBlurred
                    isZoomed
                    className="cursor-pointer"
                    src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713559351/Portfolio/nfomfzt8wfksuk63baou.png"
                    alt="Moaibi"
                    onClick={() => onOpenImage(2)}
                  />
                </div>
              </div>
              <ModalProjects
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                photo={photo}
              />
            </div>
          </div>
        </div>

        <div
          className={` transition-all duration-1000 ${
            ref5 < 600 ? "opacity-100" : "opacity-0"
          } grid-propio-resmoaibi mt-[2rem] md:mt-[10rem]`}
        >
          <div className="first ">
            <Image
              isBlurred
              isZoomed
              className="cursor-pointer "
              src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713578666/Portfolio/xru0jdoc24aauwclyja7.jpg"
              alt="ResMoaibi"
              onClick={() => onOpenImage(3)}
            />
          </div>
          <div className=" second ">
            <div className=" relatived  ">
              <div className=" absoluted right-1">
                <div className=" md:flex md:gap-4  grid grid-rows-2 ">
                  <div className="first  flex flex-wrap gap-2 h-[32px] md:h-[64px]">
                    <img
                      className="md:w-[4rem] w-[2rem]"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560801/Portfolio/svgTechnologies/d81bfgaubx7sj8yryc21.svg"
                      alt=""
                    />
                    <img
                      className="md:w-[4rem] w-[2rem]"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560801/Portfolio/svgTechnologies/xu7lgqrnkamb4ou4r5gk.svg"
                      alt=""
                    />
                    <img
                      className="md:w-[4rem] w-[2rem]  bg-white rounded-full"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560802/Portfolio/svgTechnologies/ktflyw7naz8lpnhit3r4.svg"
                      alt=""
                    />
                    <img
                      className="md:w-[4rem] w-[2rem]"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713577159/Portfolio/svgTechnologies/pk9ud3cf5wqltyiahpu8.svg"
                      alt=""
                    />
                    <img
                      className="md:w-[4rem] w-[2rem]"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560802/Portfolio/svgTechnologies/cc6jzzp7ddfddfj2sahb.svg"
                      alt=""
                    />
                    <img
                      className="md:w-[4rem] w-[2rem]"
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713560802/Portfolio/svgTechnologies/u0ihmupvalerozvysubi.svg"
                      alt=""
                    />
                  </div>
                  <h1
                    ref={elementRef5}
                    className="second  md:text-7xl text-4xl font-thin"
                  >
                    ResMoaibi
                  </h1>
                </div>

                <h2 className="text-xl   font-thin">
                  Currently in development
                </h2>
                <h2 className="text-2xl md:text-3xl mt-4">What's ResMoaibi?</h2>
                <p className="text-xl font-thin">
                  Resolving one of the biggest problems after finishing college
                  is often the challenge of securing a good job. This difficulty
                  is compounded by the lack of knowledge on how to create an
                  effective resume. However, with the help of ReaMoaibe,
                  crafting a compelling resume becomes remarkably easy and
                  quick.
                </p>
                <img
                  className="mask2 object-cover w-full"
                  src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713578296/Portfolio/pyjxitpn6zvvfi4envlw.png"
                  alt=""
                />
                <p className=" font-thin text-xl mb-4 md:text-3xl bg-white text-indigo-800 rounded-lg p-2">
                  "I have not failed. I've just found 10,000 ways that won't
                  work."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalProjects;
