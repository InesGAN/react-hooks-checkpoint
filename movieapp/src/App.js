import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import FilterMovie from "./components/FilterMovie";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Baby Boss",
      description:
        "Some quick example text to Describe the movie.Some quick example text to Describe the movie.",
      posterUrl:
        "https://bestnetflixshows.com/wp-content/uploads/2019/03/kids-movies-netflix-990x556.jpg",
      rate: 0,
    },
    {
      id: 2,
      title: "Aladin",
      description:
        "Some quick example text to Describe the movie.Some quick example text to Describe the movie.",
      posterUrl:
        "https://cdn3-www.comingsoon.net/assets/uploads/2019/07/Aladdin.jpg",
      rate: 3,
    },
    {
      id: 3,
      title: "Pokemon",
      description:
        "Some quick example text to Describe the movie.Some quick example text to Describe the movie.",
      posterUrl:
        "https://movies-b26f.kxcdn.com/wp-content/uploads/2020/01/Pokemon-Mewtwo-Strikes-Back-Netflix-Premiere-770x470.png",
      rate: 2,
    },
    {
      id: 4,
      title: "Tinker Bell",
      description:
        "Some quick example text to Describe the movie.Some quick example text to Describe the movie.",
      posterUrl:
        "https://ichef.bbci.co.uk/images/ic/640x360/p05r3fx1.jpg",
      rate: 5,
    },
  ]);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  const FilterR = (x) => setMovieRating(x);
  const FilterT = (x) => setMovieTitle(x);
  const AddMovies = (x) => {
    setMovies([...movies, x]);
  };
  return (
    <div className="App">
      <FilterMovie UpdateTitle={FilterT} UpdateRating={FilterR} />
        <div className="Body-Cards">
      <MovieList
        list={movies.filter(
          (el) =>
            el.title.toUpperCase().includes(movieTitle.toUpperCase()) &&
            el.rate >= movieRating
        )}
      />
        </div>
      <AddMovie Updatemovie={AddMovies} />
      
    </div>
  );
}

export default App;
