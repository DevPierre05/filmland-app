/* eslint-disable react/prop-types */
import SearchIcon from "../assets/icons8-search-50.png";
export default function Search({ inputItem, handleChange, handleSubmit }) {
  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="mt-4 px-1 text-center max-w-full sm:max-w-[70%] mx-auto lg:max-w-[60%]"
    >
      <div className="flex w-full px-2 sm:px-1 bg-gray-100 drop-shadow-sm shadow-md shadow-slate-300  dark:drop-shadow-2xl dark:shadow-md dark:shadow-slate-950 overflow-hidden dark:bg-slate-900 rounded-[8px] justify-between items-center">
        <input
          type="search"
          name="search"
          placeholder="Type movie....."
          onChange={(event) => handleChange(event)}
          value={inputItem}
          className="w-full outline-none p-1 bg-gray-100 dark:bg-slate-900 sm:p-2"
        />
        <button className="pr-2">
          <img
            src={SearchIcon}
            alt="search icon"
            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] cursor-pointer"
          />
        </button>
      </div>
    </form>
  );
}
