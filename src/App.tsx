import { Suspense } from "react";
import { PostsList, PostsListSuspenseFallback } from "./posts/PostsList";

function App() {
  return (
    <div>
      <Suspense fallback={<PostsListSuspenseFallback />}>
        <PostsList />
      </Suspense>
    </div>
  );
}

export default App;
