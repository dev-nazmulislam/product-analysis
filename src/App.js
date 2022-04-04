import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home.jsx";
import Review from "./components/Review/Review.jsx";
import Deshboard from "./components/Deshboard/Deshboard.jsx";
import Blog from "./components/Blog/Blog.jsx";
import About from "./components/About/About.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import { createContext } from "react";
import useReview from "./Hooks/useLaptop.jsx";
import Footer from "./components/Footer/Footer";
export const ReviewContext = createContext("review");

function App() {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <ReviewContext.Provider value={[reviews, setReviews]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/deshboard" element={<Deshboard />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ReviewContext.Provider>
    </div>
  );
}

export default App;
