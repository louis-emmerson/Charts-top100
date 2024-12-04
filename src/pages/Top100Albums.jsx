import AlbumsList from "../components/AlbumsList"

function Top100Albums({searchInput,setSearchInput,nav}){
    return( 
    <section>
        <div className={`${nav?"pt-40":"p-4"}`}>
        {searchInput?<h1 className= {`text-center text-black font-medium text-2xl w-full`} > Search results for: {searchInput}</h1>:null}
        </div>
        <div className="md:flex items-center justify-center">
            <AlbumsList searchInput={searchInput} setSearchInput={setSearchInput}/>
        </div>
    </section>)
}

export default Top100Albums