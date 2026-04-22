//import { BrowserRouter, Routes, Route, Navigation } from "react-router-dom"
//import Home from "./pages/Home.tsx"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Work from "./pages/Work";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Paintings from "./pages/Artworks/Paintings";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ArtworkDetails from "@components/Artwork/ArtworkDetails/ArtworkDetails";
import Drawings from "@pages/Artworks/Drawings";
import BlogDetails from "@components/Blog/BlogDetails/BlogDetails";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <div className="site">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Work />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/paintings" element={<Paintings />}></Route>
            <Route path="/drawings" element={<Drawings />}></Route>
            <Route path="/not-found" element={<NotFound />}></Route>
            <Route
              path="/paintings/:slug"
              element={<ArtworkDetails category="paintings" />}
            ></Route>
            <Route
              path="/drawings/:slug"
              element={<ArtworkDetails category="drawings" />}
            ></Route>
            <Route path="/blog/:slug" element={<BlogDetails />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
