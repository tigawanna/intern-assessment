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
          <div key={post.id} className="flex flex-col gap-0.5  p-4 w-full md:w-[44%] lg:w-[30%]">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-sm">{post.body}</p>
            <span>{post.userId}</span>
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
