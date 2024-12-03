import AlbumsList from "../components/AlbumsList"

function Top100Albums({searchInput}){
    return( 
    <section>
        {searchInput?<h1 className=" text-center text-black font-medium text-2xl pt-4"> Search results for: {searchInput}</h1>:null}
        <AlbumsList searchInput={searchInput} />
    </section>)
}

export default Top100Albums