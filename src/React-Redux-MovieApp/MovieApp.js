import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./MovieApp.scss";
import { Provider } from "react-redux";
import { store } from "./features/store";

function MovieApp() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header></Header>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:imdbID" element={<MovieDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default MovieApp;
