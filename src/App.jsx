import { useState } from "react"
import Header from "./components/Header"
import Top100Albums from "./pages/Top100Albums"
import CountryContext from "./context/county-context"

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [countryInput, setCountryInput] = useState("us")
  return (
    <section>
      <CountryContext.Provider value={countryInput}>
        <Header
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          countryInput={countryInput}
          setCountryInput={setCountryInput}
        />
        <Top100Albums
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </CountryContext.Provider>
    </section>
  )
}

export default App
