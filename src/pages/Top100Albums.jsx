import AlbumsList from "../components/AlbumsList"

function Top100Albums({searchInput,setSearchInput, countryInput}){
    return( 
    <section>
        {searchInput?<h1 className=" text-center text-black font-medium text-2xl pt-4 w-full "> Search results for: {searchInput}</h1>:null}
        <div className="md:flex items-center justify-center">
            <AlbumsList searchInput={searchInput} setSearchInput={setSearchInput} countryInput={countryInput}/>
        </div>
    </section>)
}

export default Top100Albums