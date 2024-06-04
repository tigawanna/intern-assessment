import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { updateTotalPosts } from "../../slices/pagination";
import { usePagination } from "../../services/usePagination";
import apiClient from "../../services/apiClient";

interface PostData {
  body: string;
  id: number;
  title: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [error, setError] = useState();
  const dispatch: AppDispatch = useDispatch();
  const { currentPage, postsPerPage } = useSelector(
    (store: RootState) => store.paginate
  );

  useEffect(() => {
    apiClient
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
        dispatch(updateTotalPosts(res.data.length));
      })
      .catch((error) => setError(error.message));
  }, []);

  const { firstIndex, lastIndex } = usePagination(currentPage, postsPerPage);
  const paginatedPosts = posts.slice(firstIndex, lastIndex);

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <TableContainer maxW={"90%"} marginX={"auto"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>PostId</Th>
              <Th>Tittle</Th>
              <Th>Body</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedPosts?.map((post, index) => (
              <Tr key={index}>
                <Td>{post.id}</Td>
                <Td>{post.title}</Td>
                <Td>{post.body}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box overflowX="scroll">
        <Pagination />
      </Box>
    </>
  );
}
