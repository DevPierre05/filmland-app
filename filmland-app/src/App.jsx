/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import DarkLight from "./components/DarkLight";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import Error from "./components/Error";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [searchItem, setSearchItem] = useState("monkey");

  const apiKey = import.meta.env.VITE_FILMLAND_API_KEY;

  const API_URL = `http://www.omdbapi.com?apikey=${apiKey}`;

  const handleChange = (event) => {
    setInputItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchItem(inputItem);
    setInputItem("");
  };

  useEffect(() => {
    const getData = async function (title = "spiderman") {
      const res = await fetch(`${API_URL}&s=${title}`);
      const data = await res.json();
      const { Search } = data;
      setMovieList(Search);
    };
    getData(searchItem);
  }, [searchItem]);

  const movieArray = movieList?.map((movie, i) => {
    return <MovieCard key={i} movie={movie} />;
  });

  console.log(movieArray);

  return (
    <>
      <main className="container max-w-full min-h-screen px-1 bg-white dark:bg-slate-800 dark:text-slate-300">
        <DarkLight />
        <Header />
        <Search
          inputItem={inputItem}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {movieList?.length > 0 ? (
          <div className="movie_grid container mt-16 max-w-7xl mx-auto px-2">
            {movieArray}
          </div>
        ) : (
          <Error searchItem={searchItem} />
        )}
      </main>
    </>
  );
}

export default App;
