import { useState } from "react";
import { Button } from "@chakra-ui/react";
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

interface PostFormProps {}

export function PostForm({}: PostFormProps) {
  const toast = useToast();
  const qc = useQueryClient();
  const [input, setInput] = useState({
    title: "A random post about stuff",
    body: "hello world , This is  random post about stuff",
    userId: 4,
  });
  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: (data) => {
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
    },
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submitting ", input);
    mutation.mutate({ post: input });
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col items-center justify-center p-4 gap-2 bg-base-300">
        <Input
          id="title"
          name="title"
          required
          minLength={6}
          type="text"
          placeholder="Title"
          value={input.title}
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
        />
        <Input
          id="body"
          name="body"
          required
          minLength={6}
          type="text"
          placeholder="Body"
          value={input.body}
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
        />
        <Input
          id="userId"
          name="userId"
          type="number"
          required
          min={1}
          placeholder="User Id"
          value={input.userId}
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
        />
        <NumberInput
          defaultValue={1}
          id="userId"
          name="userId"
          value={input.userId}
          onChange={(value) => setInput((prev) => ({ ...prev, userId: +value }))}
          min={1}
          className="w-full max-w-xs">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Button className="max-w-xs " type="submit">
          Submit
        </Button>
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

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
