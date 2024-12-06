import { useContext } from "react";
import countries from "../data/countrys";
import { ToggleSwitch } from "./index";
import { SearchContext } from "../context";
import { useNavigate } from "react-router-dom";

function Header({ countryInput, setCountryInput, nav, setNav }) {
  const navigation = useNavigate();
  const { searchInput, setSearchInput, setFavoritesToggle, favoritesToggle } =
    useContext(SearchContext);
  return (
    <header className="sticky top-0 z-10 shadow-xl">
      <nav className="border-gray-200 bg-gray-800 px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between">
          <a
            onClick={() => {
              setCountryInput("us");
            }}
            className="flex items-center"
          >
            <h1 className="self-center whitespace-nowrap text-xl font-semibold text-white">
              Top 100 Albums
            </h1>
          </a>
          <div
            className={`w-full flex-col items-center gap-1 transition-all duration-300 md:order-2 md:flex md:w-auto md:flex-row ${
              nav
                ? "absolute left-0 top-16 bg-gray-700 p-4 shadow-md md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                : "hidden gap-1 md:flex"
            }`}
          >
            <div className="mx-auto flex max-w-md overflow-hidden rounded-full border bg-white px-1 py-1 font-[sans-serif]">
              <input
                aria-label="search albums"
                placeholder="Search Albums..."
                className="w-full bg-white pl-4 text-sm outline-none"
                value={searchInput}
                onChange={(event) => {
                  setSearchInput(event.target.value);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setSearchInput("");
                }}
                className="w-40 rounded-full bg-blue-600 px-5 py-2.5 text-sm text-white transition-all hover:bg-blue-700"
              >
                {searchInput ? "Clear" : "Search"}
              </button>
            </div>
            <div className={`flex items-center gap-2`}>
              <div
                className={`mx-auto flex h-12 w-52 max-w-md items-center justify-center gap-1 overflow-hidden rounded-full border bg-white font-[sans-serif] ${nav ? "mt-1" : "ml-1"}`}
              >
                <label aria-label="fav-switch" className="text-sm">
                  Show Favorites
                </label>
                <ToggleSwitch />
              </div>
            </div>
            <div className={`flex items-center gap-2`}>
              <div
                className={`mx-auto flex max-w-md overflow-hidden rounded-full border bg-white px-1 py-1 font-[sans-serif] ${nav ? "mt-1 max-w-md" : "ml-1 w-44"}`}
              >
                <select
                  aria-label="select country"
                  className="w-full bg-white px-5 py-2.5 pl-4 text-sm outline-none"
                  value={countryInput}
                  onChange={(event) => {
                    setCountryInput(event.target.value);
                  }}
                >
                  {countries.map((country) => {
                    return (
                      <option key={country[0]} value={country[0]}>
                        {country[1]}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center md:hidden lg:order-1">
            <button
              type="button"
              className="inline-flex items-center p-2"
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Open main menu</span>
              {
                <svg
                  className="size-8 fill-none stroke-white stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" />
                </svg>
              }
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
