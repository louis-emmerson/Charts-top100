import { useState } from "react"
import Header from "./components/Header"
import Top100Albums from "./pages/Top100Albums"
import CountryContext from "./context/county-context"

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [countryInput, setCountryInput] = useState("us")
  const [nav, setNav] = useState(false)
  const [favoritesToggle, setFavoritesToggle] = useState(false)
  return (
    <section>
      <CountryContext.Provider value={countryInput}>
        <Header
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          countryInput={countryInput}
          setCountryInput={setCountryInput}
          setNav={setNav}
          nav={nav}
          favoritesToggle={favoritesToggle}
          setFavoritesToggle={setFavoritesToggle}
        />
        <Top100Albums
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          nav={nav}
          favoritesToggle={favoritesToggle}
        />
      </CountryContext.Provider>
    </section>
  )
}

export default App
