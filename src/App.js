import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
// import MovieApp from "./React-Redux-MovieApp/MovieApp";
import Swiper from "./ReactSwiper/Swiper";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import SearchBar from "./SearchBar/SearchBarApp";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="movie" element={<MovieApp />} /> */}
        <Route path="swipper" element={<Swiper />} />
        <Route path="search_bar" element={<SearchBar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
