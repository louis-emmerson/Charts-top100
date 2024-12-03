import { useState } from "react"

function Header() {
  const [nav, setNav] = useState(false)

  return (
    <header className="sticky top-0 shadow-xl">
      <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5" >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Itunes Top 100 Albums
            </span>
          </a>

          <div
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
              nav
                ? "absolute top-16 left-0 w-full bg-gray-700 shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                : "hidden md:flex gap-1"
            }`}
          >
            <div className="bg-white flex px-1 py-1 rounded-full border  overflow-hidden max-w-md mx-auto font-[sans-serif]">
              <input
                placeholder="Search Albums..."
                className="w-full outline-none bg-white pl-4 text-sm"
              />
              <button
                type="button"
                onClick={() => setNav(!nav)}
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
              >
                Search
              </button>
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
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    
                  />
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