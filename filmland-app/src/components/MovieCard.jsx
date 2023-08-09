/* eslint-disable react/prop-types */
const MovieCard = function ({ movie }) {
  return (
    <figure className="movie_card bg-gray-200 dark:bg-slate-800 drop-shadow-sm  dark:shadow-slate-900 w-[15rem] h-auto sm:w-[18rem] shadow-xl">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt="poster of movie"
        className="movie_poster w-full h-[20rem]"
      />
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
