/* eslint-disable react/prop-types */
import No_Search from "../assets/no-results.jpg";

export default function Error({ searchItem }) {
  return (
    <div className="error-message flex flex-col gap-4 px-1 items-center max-w-2xl mt-16 mx-auto">
      <img
        src={No_Search}
        alt="Image of searching"
        className="w-[25rem] md:w-[34rem] opacity-80 dark:opacity-50"
      />
      <h2 className="font-bold sm:text-4xl">No Results 🤨</h2>
      <p className="mb-2 text-center w-[18rem] sm:text-3xl sm:w-[25rem] md:w-[34rem]">
        Movie title <span className="italic">{`"${searchItem}"`}</span> was not
        found. Please check internet connection, spellings and try again
      </p>
    </div>
  );
}
