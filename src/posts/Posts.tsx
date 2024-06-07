import { Suspense } from "react";
import { PostsListSuspenseFallback, PostsList } from "./PostsList";
import { SearchBox } from "./SearchBox";
import { useDebouncedSearch } from "../utils/use-search";

interface PostsProps {}

export function Posts({}: PostsProps) {
  const { debouncedValue, isDebouncing, keyword, setKeyword } = useDebouncedSearch();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      <div className="w-full z-20 bg-base-200 sticky top-0  px-3 flex flex-col  items-center justify-center gap-1">
        <h1 className="text-2xl font-bold bg-base-200/30 p-2">Posts</h1>
        <SearchBox
          inputProps={{
            placeholder: "Search by title",
          }}
          isDebouncing={isDebouncing}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </div>
      <Suspense fallback={<PostsListSuspenseFallback />}>
        <PostsList keyword={debouncedValue} />
      </Suspense>
    </div>
  );
}
