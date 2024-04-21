import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const arrayImages = [
  "https://res.cloudinary.com/dcqvg21nk/image/upload/v1713559352/Portfolio/zubkzvzqybm9mbubklmm.png",
  "https://res.cloudinary.com/dcqvg21nk/image/upload/v1713559352/Portfolio/wp2mpnhznl4qbuiizhlo.png",
  "https://res.cloudinary.com/dcqvg21nk/image/upload/v1713559351/Portfolio/nfomfzt8wfksuk63baou.png",
  "https://res.cloudinary.com/dcqvg21nk/image/upload/v1713578666/Portfolio/xru0jdoc24aauwclyja7.jpg",
];
const ModalProjects = ({ isOpen, onOpenChange, photo }) => {
  const [photoPosition, setPhotoPosition] = useState(photo);

  const nextImage = () => {
    if (photoPosition === 3) {
      setPhotoPosition(0);
    } else {
      setPhotoPosition(photoPosition + 1);
    }
  };
  const nextImageleft = () => {
    if (photoPosition === 0) {
      setPhotoPosition(3);
    } else {
      setPhotoPosition(photoPosition - 1);
    }
  };

  return (
    <>
      <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <div className=" flex gap-2">
                  <Button
                    onClick={() => nextImageleft()}
                    className=" rounded-full"
                  >
                    <img
                      className=" w-6 "
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713572756/Portfolio/arrows/j3irn1uhcatuzjzwsmfi.svg"
                      alt=""
                    />
                  </Button>
                  <Button onClick={() => nextImage()} className=" rounded-full">
                    <img
                      className=" w-6 "
                      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713572756/Portfolio/arrows/e1adihdwkbvmtbkh7tcg.svg"
                      alt=""
                    />
                  </Button>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className=" ">
                  <div className="h-svh grid place-items-center">
                    <img
                      className="md:w-[80%] w-[100%] "
                      src={arrayImages[photoPosition]}
                      alt="Moaibi"
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProjects;
