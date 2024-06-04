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
  Skeleton,
  Stack,
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
  const [isLoading, setisLoading] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const { currentPage, postsPerPage } = useSelector(
    (store: RootState) => store.paginate
  );

  useEffect(() => {
    setisLoading(true);
    apiClient
      .get("/posts")
      .then((res) => {
        setisLoading(false);
        setPosts(res.data);
        dispatch(updateTotalPosts(res.data.length));
      })
      .catch((error) => {
        setisLoading(false);
        setError(error.message);
      });
  }, []);

  const { firstIndex, lastIndex } = usePagination(currentPage, postsPerPage);
  const paginatedPosts = posts.slice(firstIndex, lastIndex);

  const [skeletons] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      {isLoading ? (
        <Stack>
          {skeletons.map((skeleton) => (
            <Skeleton height="40px" key={skeleton} />
          ))}
        </Stack>
      ) : (
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
      )}
      <Box overflowX="scroll">
        <Pagination />
      </Box>
    </>
  );
}
