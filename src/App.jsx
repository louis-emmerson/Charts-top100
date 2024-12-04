import { useState } from "react"
import Header from "./components/Header"
import Top100Albums from "./pages/Top100Albums"
import { CountryContext, SearchContext } from "./context"
import { Route, Routes } from "react-router"

function App() {

  
  const [countryInput, setCountryInput] = useState("us")

  const [nav, setNav] = useState(false)

  const [searchInput, setSearchInput] = useState("")
  const [favoritesToggle, setFavoritesToggle] = useState(false)
  return (

      <SearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        favoritesToggle,
        setFavoritesToggle,
      }}
      >
        <CountryContext.Provider value={{countryInput,setCountryInput}}>
          <Header
            countryInput={countryInput}
            setCountryInput={setCountryInput}
            setNav={setNav}
            nav={nav}
            />
            <Routes>
              <Route path="/" element={<Top100Albums nav={nav}/>} />
              <Route path="/country/:country" element={<Top100Albums nav={nav}/>} />
            </Routes>
        </CountryContext.Provider>
      </SearchContext.Provider>
  )
}

export default App
