import React from "react";
import CV from "../../public/data/CV.pdf";
import { Chip, Link } from "@nextui-org/react";
const DownloadCV = ({ elementRef7, ref7 }) => {
  return (
    <>
      <div
        className={` transition-all duration-1000 
        opacity-100 mt-[5rem]
        `}
      >
        <div className=" relative">
          <div className=" -z-20">
            <img
              className={` transition-all duration-1000  h-[50rem] w-full object-cover mask ${
                ref7 < 792 ? "opacity-50" : "opacity-0"
              }  `}
              src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713594373/Portfolio/kh7azy142fknzrmstqed.jpg"
              alt=""
            />
          </div>

          <div
            className={`transition-all  duration-1000 mx-5  
             lg:mx-[5%] 
         md:mx-[5%] mt-44 absolute -top-[10rem] md:top-1  `}
          >
            <footer className=" mt-[10rem]   2xl:grid 2xl:grid-cols-2">
              <div
                ref={elementRef7}
                className={` md:mb-0 mb-4 ${
                  ref7 < 792 ? "animacionDerecha opacity-100" : "opacity-0"
                }`}
              >
                <h1 className=" text-7xl md:text-[10rem] font-thin md:leading-10 md:mb-3">
                  LET'S
                </h1>
                <h1 className="text-6xl md:text-[10rem] font-thin">CONNECT</h1>
              </div>
              <div
                className={`${
                  ref7 < 792 ? "animacion opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-wrap gap-3">
                  <Chip
                    variant="flat"
                    size="lg"
                    className="text-xl md:text-2xl font-thin"
                  >
                    FRONTEND DEVELOPMENT
                  </Chip>
                  <Chip
                    variant="flat"
                    size="lg"
                    className="text-xl md:text-2xl font-thin"
                  >
                    BACKEND DEVELOPMENT
                  </Chip>
                  <Chip
                    variant="flat"
                    size="lg"
                    className="text-xl md:text-2xl font-thin"
                  >
                    STARTUPS
                  </Chip>
                  <Chip
                    variant="flat"
                    size="lg"
                    className="text-xl md:text-2xl font-thin"
                  >
                    SUSHI
                  </Chip>
                  <Chip
                    variant="flat"
                    size="lg"
                    className="text-xl md:text-2xl font-thin"
                  >
                    JAPAN
                  </Chip>
                  <Chip
                    variant="flat"
                    size="lg"
                    className="text-xl md:text-2xl font-thin"
                  >
                    READ
                  </Chip>
                  <Chip
                    variant="flat"
                    size="lg"
                    className="text-xl md:text-2xl font-thin"
                  >
                    LEARNING NEW THINGS
                  </Chip>{" "}
                </div>
                <div className=" mt-3 text-2xl text-thin">
                  <div>
                    <Link
                      color="warning"
                      className="text-2xl md:text-3xl font-bold underline"
                      href={CV}
                      download
                    >
                      Get resume
                    </Link>
                  </div>
                  <div>
                    <Link
                      color="warning"
                      className="text-2xl md:text-3xl font-bold underline"
                      href="mailto:abelsandev@gmail.com"
                    >
                      abelsandev@gmail.com
                    </Link>
                  </div>
                  <div>
                    <Link
                      color="warning"
                      className="text-2xl md:text-3xl font-bold underline"
                      href="tel:+526691614328"
                    >
                      +52 669 161 43 28
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadCV;
