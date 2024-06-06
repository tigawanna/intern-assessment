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
import { EditIcon} from "@chakra-ui/icons";
import { PostForm } from "./PostForm";
import { Post } from "./types";
import React from "react";
interface UpdatepostFormProps {
  id: number;
  post: Post;
}

export function UpdatepostForm({ id, post }: UpdatepostFormProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Button onClick={onOpen} className="flex gap-3 ">
        <EditIcon className="size-10" />
      </Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PostForm onClose={onClose} id={id} post={post} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
