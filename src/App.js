import "./App.css";
import api from "./client_api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./componenets/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./componenets/home/Home";
import Header from "./componenets/header/Header";
import Trailer from "./componenets/trailer/Trailer";
import Reviews from "./componenets/reviews/Reviews";
import pageNotFound from "./componenets/pageNotFound/pageNotFound";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [movieReview, setMovieReview] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      console.log(response);
      setMovie(singleMovie);
      setMovieReview(singleMovie.reviewIds);
      console.log(movieId);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  },[]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={movieReview}
                setReviews={setMovieReview}
              />
            }
          ></Route>
          <Route path="*" element={<pageNotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
