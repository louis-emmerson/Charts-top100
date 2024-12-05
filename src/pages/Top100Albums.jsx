import { useContext } from "react"
import { AlbumsList } from "../components"
import { SearchContext } from "../context"

function Top100Albums({nav}){
    const {searchInput} = useContext(SearchContext)
    return( 
    <section>
        <div className={`${nav?"pt-44":null}`}>
        {searchInput?<h1 className= {`text-center text-black font-medium text-2xl w-full`} > Search results for: {searchInput}</h1>:null}
        </div>
        <div className="md:flex items-center justify-center">
            <AlbumsList/>
        </div>
    </section>)
}

export default Top100Albums