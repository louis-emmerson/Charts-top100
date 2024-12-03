
import { useState } from "react"
import Header from "./components/Header"
import Top100Albums from "./pages/Top100Albums"

function App() {
  const [searchInput, setSearchInput] = useState("")
  return (
    <section>
      <Header searchInput={searchInput} setSearchInput={setSearchInput}/>
      <Top100Albums searchInput={searchInput}/>
    </section>
  )
}

export default App
