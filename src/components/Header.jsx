import countries from "../data/countrys"
import {ToggleSwitch} from "./index"

function Header({
  searchInput,
  setSearchInput,
  countryInput,
  setCountryInput,
  nav,
  setNav,
  favoritesToggle,
  setFavoritesToggle
}) {
  return (
    <header className="sticky top-0 shadow-xl z-10">
      <nav className="bg-gray-800  border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
              Top 100 Albums
            </span>
          </a>
          <div
            className={`flex-col gap-1 md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
              nav
                ? "absolute top-16 left-0  bg-gray-700 shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                : "hidden md:flex gap-1"
            }`}
          >
            <div className="bg-white flex px-1 py-1 rounded-full border  overflow-hidden max-w-md mx-auto font-[sans-serif]">
              <input
                placeholder="Search Albums..."
                className="w-full outline-none bg-white pl-4 text-sm"
                value={searchInput}
                onChange={(event) => {
                  setSearchInput(event.target.value)
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setSearchInput("")
                }}
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5 w-40"
              >
                {searchInput ? "Clear" : "Search"}
              </button>
            </div>
            <div className={`flex items-center gap-2`}>
              <div
                className={`bg-white flex justify-center w-52 h-12 rounded-full border  overflow-hidden max-w-md mx-auto font-[sans-serif] items-center gap-1 ${nav ? "mt-1" : "ml-1"}`}
              >
                Show Favorites
                <ToggleSwitch favoritesToggle={favoritesToggle} setFavoritesToggle={setFavoritesToggle} />
                
              </div>
            </div>
            <div className={`flex items-center gap-2`}>
              <div
                className={`bg-white flex px-1 py-1 rounded-full border  overflow-hidden max-w-md mx-auto font-[sans-serif] ${nav ? "max-w-md mt-1" : "ml-1 w-44"}`}
              >
                <select
                  className=" outline-none bg-white pl-4 text-sm px-5 py-2.5 w-full "
                  value={countryInput}
                  onChange={(event) => {
                    setCountryInput(event.target.value)
                  }}
                >
                  {countries.map((country) => {
                    return (
                      <option key={country[0]} value={country[0]}>
                        {country[1]}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center lg:order-1">
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
                  className="size-8 stroke-2 fill-none stroke-white"
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
  )
}

export default Header
