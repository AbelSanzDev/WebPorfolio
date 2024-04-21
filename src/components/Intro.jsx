import { Avatar, Button, Link, User, useDisclosure } from "@nextui-org/react";
import React from "react";
import ModalPhoto from "./ModalPhoto";

const Intro = ({ elementRef, elementRef2, ref1, ref2 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleActiveModalPhoto = () => {
    onOpen();
  };

  return (
    <div>
      <div className=" -z-10 relative">
        <img
          ref={elementRef}
          src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713318699/Portfolio/q0dqw3bucoosggxyrhgi.jpg"
          className={`transition-all duration-1000   ${
            ref1 < 50 ? "h-[30rem]" : "h-[32rem] "
          }  w-full object-cover rounded-lg `}
          alt="Tesla image"
        />
        {ref1 < 50 ? (
          <div className="grid place-items-center ">
            <div className="absolute top-28">
              <h1 className="text-5xl  md:text-8xl font-thin transition-all duration-1000">
                I'm creativity
              </h1>
            </div>
          </div>
        ) : (
          <div className="grid place-items-center ">
            <div className="absolute top-28 ">
              <h1 className="  text-5xl font-thin transition-all duration-1000">
                I'm Innovation
              </h1>
            </div>
          </div>
        )}
      </div>
      <Avatar
        ref={elementRef2}
        isBordered
        color="primary"
        src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713578665/Portfolio/gekycly9fmwcqvs2a59f.png"
        className="  w-28 h-28 -mt-20 cursor-pointer transition-all md:w-40 md:h-40"
        onClick={handleActiveModalPhoto}
      />

      <ModalPhoto isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Intro;
