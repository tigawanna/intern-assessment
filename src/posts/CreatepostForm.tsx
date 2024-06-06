import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { PostForm } from "./PostForm";
import { Post } from "./types";
import React from "react";
interface CreatepostFormProps {
    id?: number;
    post?:Post
}

export function CreatepostForm({id,post}: CreatepostFormProps) {
      const { isOpen, onOpen, onClose } = useDisclosure();
        const finalRef = React.useRef(null);
  return (
    <>
      <Button
        variant={"outline"}
        size={"sm"}
        className="max-w-xs w-full btn  btn-primary"
        onClick={onOpen}>
        Add Post
      </Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PostForm onClose={onClose} id={id} post={post} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
