import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import ApiKey from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

// export const searchTitle = "";

const Home = () => {
  const movieTitle = "mission";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await MovieApi.get(
        `?apikey=${ApiKey}&s=${movieTitle}&type=movie`
      ).catch((err) => {
        console.log("Error: ", err);
      });
      const response = data.data;
      console.log("DATA: ", response);
      dispatch(() => addMovies(response));
    };

    fetchMovie();
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
