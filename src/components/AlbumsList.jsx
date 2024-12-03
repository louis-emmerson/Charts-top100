import { useEffect, useState } from "react"
import AlbumCard from "./AlbumCard"
import { getTop100Albums } from "../../utils/api"
import ErrorAlert from "./ErrorAlert"
import AlbumCardSkeleton from "./AlbumCardSkeleton"

function AlbumsList({searchInput}) {
  const [albums, setAlbums] = useState(null)
  const [loading, isLoading] = useState(true)
  const [isError, setIsError] =useState(false)
  const [searchResults, setSearchResults] =useState(null)


  useEffect(() => {
    isLoading(true)
    getTop100Albums().then((albums) => {
        const modifiedAlbums = albums.map((album, index)=>{
            album.chartPosition = index +1
            return album
        })
        setAlbums(modifiedAlbums)
        isLoading(false)
    }).catch((error)=>{
        setIsError("Failed to fetch albums")
    })
  }, [])

  useEffect(()=>{
    if(!searchInput) setSearchResults(null)
    if(albums){
      const filteredResults = albums.filter((album)=> album["im:artist"].label.toLowerCase().includes(searchInput.toLowerCase()) || album["im:name"].label.toLowerCase().includes(searchInput.toLowerCase()))
      setSearchResults(filteredResults)
    }
  },[searchInput])

  if(isError){
    return <ErrorAlert errorMsg={isError}/>
  }

  if (loading)
    return (
      <div className="flex flex-wrap gap-4 justify-center p-4">
        {new Array(50).fill(null).map((album,index)=>{
            return <AlbumCardSkeleton key={`skelton-${index}`}/>
        })}
      </div>
    )

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4 bg-c">
      {searchInput && searchResults? searchResults.map((album)=>{
        return <AlbumCard album={album} key={`album-${album.id.attributes["im:id"]}`}/>
      }):albums.map((album)=>{
        return <AlbumCard album={album} key={`album-${album.id.attributes["im:id"]}`}/>
      })}
      
    </div>
  )
}

export default AlbumsList
