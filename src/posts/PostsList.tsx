import { useSuspenseQuery } from "@tanstack/react-query";
interface PostsListProps {}

export function PostsList({}: PostsListProps) {
  const query = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return fetch("https://jsonplaceholder.typicode.com/posts").then(
        (res) => res.json() as Promise<Post[]>
      );
    },
  });
  const data = query.data;
  return (
    <div className="w-full h-full flex flex-wrap justify-center gap-2 p-2">
      {data?.map((post) => {
        return (
          <div
            key={post.id}
            className="flex flex-col gap-0.5  p-5 w-full md:w-[44%] lg:w-[30%] hover:bg-base-300 rounded-lg">
            <h2 className="text-2xl font-bold line-clamp-2">{post.title}</h2>
            <p className="text-sm">{post.body}</p>
            <span>by #{post.userId}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsListSuspenseFallbackProps {
  items?: number;
}

export function PostsListSuspenseFallback({ items = 12 }: PostsListSuspenseFallbackProps) {
  return (
    <div className="w-full h-full flex flex-wrap justify-center gap-2 p-2">
      {Array(items)
        .fill(0)
        .map((_, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
            className="flex bg-base-200  skeleton  flex-col  h-[200px] gap-0.5  p-5 w-full md:w-[44%] lg:w-[30%]  rounded-lg"
          />
        ))}
    </div>
  );
}
