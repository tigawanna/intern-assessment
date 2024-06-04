import Footer from "../footer/Footer";
import Navbar from "../homepage/Navbar";
import Posts from "./Posts";

export default function PostsPageLayout() {
  return (
    <>
      <Navbar />
      <Posts />
      <Footer />
    </>
  );
}
