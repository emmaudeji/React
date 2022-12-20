import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
// import MovieApp from "./React-Redux-MovieApp/MovieApp";
import Swiper from "./ReactSwiper/Swiper";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import SearchBar from "./SearchBar/SearchBarApp";
import Darkmode from "./Dark mode/Darkmode";
import Form from "./Forms/Form";
import CurConverter from "./Forms/CurConverter";
import SearchBtnTest from "./Forms/SearchBtnTest";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="movie" element={<MovieApp />} /> */}
        <Route path="swipper" element={<Swiper />} />
        <Route path="search_bar" element={<SearchBar />} />
        <Route path="darkmode" element={<Darkmode />} />
        <Route path="form" element={<Form />} />
        <Route path="curconverter" element={<CurConverter />} />
        <Route path="search-btn" element={<SearchBtnTest />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
