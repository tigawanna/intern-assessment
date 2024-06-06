import { useState } from "react";
import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { Post } from "./types";
import { Textarea } from "@chakra-ui/react";
interface PostFormProps {
  id?: number;
  post?: Post;
  onClose: () => void;
}

export function PostForm({ id, post, onClose }: PostFormProps) {
  const toast = useToast();
  const qc = useQueryClient();
  const [input, setInput] = useState({
    id: id,
    title: post?.title || "A random post about stuff",
    body: post?.body || "hello world , This is  random post about stuff",
    userId: post?.userId || 4,
  });

  const create_mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      toast({
        title: "Post added.",
        description: "Successfully added your post",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      qc.invalidateQueries({
        queryKey: ["posts"],
      });
      onClose();
    },
    onError() {
      toast({
        title: "Error",
        description: "Failed to add your post",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  const update_mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      toast({
        title: "Post updated.",
        description: "Successfully updated your post",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      qc.invalidateQueries({
        queryKey: ["posts"],
      });
      onClose();
    },
    onError() {
      toast({
        title: "Error",
        description: "Failed to update your post",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submitting ", input);
    if (id) {
      update_mutation.mutate({ post: { ...input, id } });
    } else {
      create_mutation.mutate({ post: input });
    }
  }

  return (
    <div className="w-full h-full flex flex-col p-6 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col items-center justify-center  gap-3 ">
        <FormControl className=" ">
          <FormLabel htmlFor="title" className="italic">
            Title
          </FormLabel>
          <Input
            id="title"
            name="title"
            variant="outline"
            required
            minLength={6}
            type="text"
            placeholder="Title"
            value={input.title}
            onChange={handleChange}
            className="w-full "
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="body" className="italic">
            Body
          </FormLabel>
          <Textarea
            id="body"
            variant="outline"
            minHeight={100}
            name="body"
            required
            minLength={6}
            placeholder="Body"
            value={input.body}
            onChange={handleChange}
            className="w-full "
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="userId" className="italic">
            User Id
          </FormLabel>
          <NumberInput
            defaultValue={1}
            id="userId"
            variant="outline"
            name="userId"
            value={input.userId}
            onChange={(value) => setInput((prev) => ({ ...prev, userId: +value }))}
            min={1}
            className="w-full ">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl className="mt-5 w-full flex justify-center">
          <Button
            isLoading={create_mutation.isPending || update_mutation.isPending}
            disabled={create_mutation.isPending || update_mutation.isPending}
            loadingText="Submitting"
            size={"sm"}
            className="max-w-[90%] w-full btn"
            type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

function addPost({ post }: { post: Omit<Post, "id"> }): Promise<Post> {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json() as Promise<Post>);
}

function updatePost({ post }: { post: Post }): Promise<Post> {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json() as Promise<Post>);
}
