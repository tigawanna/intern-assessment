import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Tfoot,
} from "@chakra-ui/react";
import Footer from "../footer/Footer";
import Navbar from "../homepage/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

interface PostData {
  body: string;
  id: number;
  title: string;
}

export default function PostsPageLayout() {
  const [posts, setPosts] = useState<PostData[]>();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>PostId</Th>
              <Th>Tittle</Th>
              <Th>Body</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts?.map((post, index) => (
              <Tr key={index}>
                <Td>{post.id}</Td>
                <Td>{post.title}</Td>
                <Td>{post.body}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
      <Footer />
    </>
  );
}
