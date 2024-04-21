import React from "react";

const IntroText = ({ elementRef3, ref3 }) => {
  return (
    <>
      <div
        id="about-me"
        className={` transition-all duration-1000 ${
          ref3 < 600 ? "opacity-100" : "opacity-0"
        } `}
      >
        <div className=" relative">
          <div className=" -z-20">
            <img
              className={` transition-all duration-1000 h-[70rem] w-full object-cover mask ${
                ref3 < 48 ? "opacity-25" : ""
              } `}
              src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713486816/Portfolio/eosmzqemzuwoe5zukvgv.jpg"
              alt=""
            />
          </div>

          <div
            className={`transition-all  duration-1000 mx-5  
             lg:mx-[25%] 
         md:mx-[10%] mt-44 absolute top-1  `}
          >
            <div className=" grid place-items-center ">
              <h1
                ref={elementRef3}
                className={`text-6xl text-center md:text-8xl font-thin mt-[5rem]  ${
                  ref3 < 400 ? "animacion opacity-100" : " opacity-0"
                } mb-4 -z-10`}
              >
                Hello <span className="text-indigo-500">I'm</span> Abel
              </h1>
            </div>
            <p
              className={`text-xl md:bg-transparent bg-[#442a859c] md:p-0 p-1 md:rounded-none rounded-lg  1 md:text-3xl font-thin   ${
                ref3 < 400 ? "animacionDerecha opacity-100" : "opacity-0"
              } -z-10`}
            >
              I'm an aspiring{" "}
              <span className="text-indigo-300">full-stack</span> developer
              passionate about literature and dedicated to crafting outstanding
              digital experiences. With expertise in both front-end and back-end
              development, I excel in translating concepts into user-friendly
              applications. Inspired by{" "}
              <span className="text-indigo-300">Steve Jobs' philosophy</span> ,
              I aim to exceed expectations by combining creativity with
              technical skill. Eager to learn and contribute, I'm excited about
              the chance to grow within your team and use my full-stack
              knowledge to tackle challenges and drive innovation.{" "}
              <span className="">Let's collaborate</span> to bring ideas to
              life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroText;
