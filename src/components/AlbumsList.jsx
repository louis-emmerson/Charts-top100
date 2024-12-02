import { useEffect, useState } from "react"
import AlbumCard from "./AlbumCard"
import { getTop100Albums } from "../../utils/api"
import ErrorAlert from "./ErrorAlert"
import AlbumCardSkeleton from "./AlbumCardSkeleton"

function AlbumsList() {
  const [albums, setAlbums] = useState(null)
  const [loading, isLoading] = useState(true)
  const [isError, setIsError] =useState(false)

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

  if(isError){
    return <ErrorAlert errorMsg={isError}/>
  }

  if (loading)
    return (
      <div className="flex flex-wrap gap-4 justify-center pr-4 pl-4">
        {new Array(50).fill(null).map((album)=>{
            return <AlbumCardSkeleton/>
        })}
      </div>
    )

  return (
    <div className="flex flex-wrap gap-4 justify-center pr-4 pl-4 bg-c">
      {albums.map((album)=>{
        return <AlbumCard album={album}/>
      })}
    </div>
  )
}

export default AlbumsList
