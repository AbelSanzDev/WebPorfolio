import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";

const ModalPhoto = ({ isOpen, onClose }) => {
  return (
    <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader></ModalHeader>
            <ModalBody>
              <img
                src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713578665/Portfolio/gekycly9fmwcqvs2a59f.png"
                alt=""
                className=" rounded-xl object-cover"
              />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalPhoto;
