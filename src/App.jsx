import { useState } from "react"
import Header from "./components/Header"
import Top100Albums from "./pages/Top100Albums"

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [countryInput, setCountryInput] = useState("us")
  return (
    <section>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        countryInput={countryInput}
        setCountryInput={setCountryInput}
      />
      <Top100Albums searchInput={searchInput} setSearchInput={setSearchInput} countryInput={countryInput} />
    </section>
  )
}

export default App
