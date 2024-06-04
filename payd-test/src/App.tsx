import HomePage from "./components/homepage/HomePageLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPageLayout from "./components/posts/PostsPageLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPageLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
