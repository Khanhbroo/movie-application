import { useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import { movies } from "../movies";
import MovieCard from "./components/MovieCard";

// const API_BASE_URL = "https://moviesdatabase.p.rapidapi.com";

// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// const API_OPTION = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
//     "x-rapidapi-key": API_KEY,
//   },
// };

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // If you're using API to fetch, here's the logic down. Since, there is some problem in verification with TMDB, I'll create my own data named movies.js
  // const [errorMessage, setErrorMessage] = useState("");
  // const [movieList, setmovieList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchMovies = async () => {
  //   setIsLoading(true);
  //   setErrorMessage("");
  //   try {
  //     const endpoint = `${API_BASE_URL}/titles`;

  //     const response = await fetch(endpoint, API_OPTION);

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch movies");
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //     if (data.Response === "False") {
  //       setErrorMessage(data.error || "Failed to fetch movies");
  //       setmovieList([]);
  //       return;
  //     }

  //     setmovieList(data.results || []);
  //   } catch (error) {
  //     console.log("Error fetching movies: ", error);
  //     setErrorMessage("Error fetching movies. Please try again later.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hastle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-[40px]">All movies</h2>

          {/* {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <p key={movie.id} className="text-white">
                  {movie.originalTitleText.text}
                </p>
              ))}
            </ul>
          )} */}

          {
            <ul>
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          }
        </section>
      </div>
    </main>
  );
};

export default App;
