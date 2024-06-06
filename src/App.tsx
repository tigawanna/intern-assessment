import { Suspense } from "react";
import { PostForm } from "./posts/PostForm";
import { PostsList, PostsListSuspenseFallback } from "./posts/PostsList";

function App() {
  return (
    <div>
      <PostForm />
      <Suspense fallback={<PostsListSuspenseFallback />}>
        <PostsList />
      </Suspense>
    </div>
  );
}

export default App;
