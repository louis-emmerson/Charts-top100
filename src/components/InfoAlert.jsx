import React, { useContext } from "react";
import { SearchContext } from "../context";

function InfoAlert({ infoMsg = "No Results Found" }) {
  const { setSearchInput, setFavoritesToggle } = useContext(SearchContext);
  return (
    <div className="mx-2  my-4 flex max-w-lg flex-col items-center rounded-md bg-gray-200 px-6 py-4 text-lg">
      <div className="flex items-center">
        <svg
          viewBox="0 0 24 24"
          className="text-grey-600 mr-3 h-5 w-5 sm:h-5 sm:w-5"
        >
          <path
            fill="currentColor"
            d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
          ></path>
        </svg>
        <span className="text-grey-800">{infoMsg}</span>
      </div>
      <div className="mt-4">
        <button
          type="button"
          aria-label="Show all albums"
          onClick={() => {
            setSearchInput("");
            setFavoritesToggle(false);
          }}
          className="w-40 rounded-full bg-blue-600 px-5 py-2.5 text-sm text-white transition-all hover:bg-blue-700"
        >
          Show all albums
        </button>
      </div>
    </div>
  );
}

export default InfoAlert;
