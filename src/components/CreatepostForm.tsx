import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
    ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { PostForm } from "./PostForm";
import type { Post } from "./types";
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
      <Button onClick={onOpen} className="flex gap-3 ">
        <AddIcon className="size-10"/>
        Add Post
      </Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} colorScheme="brand">
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
