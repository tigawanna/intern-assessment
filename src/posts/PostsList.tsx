import { useSuspenseQuery } from "@tanstack/react-query";
import type { Post } from "./types";
import { CreatepostForm } from "./CreatepostForm";
import { UpdatepostForm } from "./UpdatepostForm";

interface PostsListProps {
	keyword: string;
}

export function PostsList({ keyword }: PostsListProps) {
	const query = useSuspenseQuery({
		queryKey: ["posts"],
		queryFn: () => {
			return fetch("https://jsonplaceholder.typicode.com/posts").then(
				(res) => res.json() as Promise<Post[]>,
			);
		},
		select(data) {
			if (keyword) {
				return data.filter((post) =>
					post.title.toLowerCase().includes(keyword.toLowerCase()),
				);
			}
			return data;
		},
		staleTime: 1000 * 60 * 5,
	});
	const data = query.data;
	return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      <div className="w-full h-full flex flex-wrap justify-center gap-2 p-2">
        {!query?.isError&&data?.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-col gap-0.5  p-5 w-full md:w-[44%] lg:w-[30%] hover:bg-base-300 rounded-lg relative">
              <h2 className="text-2xl font-bold line-clamp-2">{post.title}</h2>
              <p className="text-sm">{post.body}</p>
              <span>by #{post.userId}</span>
              <hr />
              <div className="flex gap-3 absolute bottom-0 right-0">
                <UpdatepostForm id={post.id} post={post} />
              </div>
            </div>
          );
        })}

        {query.isError && (
          <div className="min-h-[90vh] text-error text-lg flex justify-center items-center">
            {query.error?.message}
          </div>
        )}
        {data.length === 0 && (
          <div className="min-h-[90vh] text-lg flex justify-center items-center">
            No posts found
          </div>
        )}

        <div className="fixed bottom-0 bg-base-200 w-full z-50 p-1">
          <div className="">Total {data?.length}</div>
        </div>
        <div className="fixed bottom-[15%] right-[0%] z-50">
          <CreatepostForm />
        </div>
      </div>
    </div>
  );
}

interface PostsListSuspenseFallbackProps {
	items?: number;
}

export function PostsListSuspenseFallback({
	items = 12,
}: PostsListSuspenseFallbackProps) {
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
