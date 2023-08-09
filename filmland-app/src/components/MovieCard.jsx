/* eslint-disable react/prop-types */
const MovieCard = function ({ movie }) {
  return (
    <figure className="movie_card mb-5 bg-gray-200 dark:bg-slate-800 drop-shadow-sm  dark:shadow-slate-900 w-[15rem] h-auto sm:w-[18rem] shadow-xl">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt="poster of movie"
        className="movie_poster w-full h-[20rem]"
      />
      <p className="year_movie bg-slate-200 dark:bg-slate-800 px-2 absolute top-1 left-2">{movie.Year}</p>
      <div className="p-4 h-auto">
        <p className="text-gray-400 dark:text">{movie.Type.toUpperCase()}</p>
        <figcaption className="text-gray-900 dark:text-slate-200">
          {movie.Title}
        </figcaption>
      </div>
    </figure>
  );
};

export default MovieCard;
