import { useContext, useEffect, useState } from "react"
import AlbumCard from "./AlbumCard"
import { getTop100Albums } from "../../utils/api"
import ErrorAlert from "./ErrorAlert"
import AlbumCardSkeleton from "./AlbumCardSkeleton"
import InfoAlert from "./InfoAlert"
import CountryContext from "../context/county-context"

function AlbumsList({ searchInput, setSearchInput }) {
  const [albums, setAlbums] = useState(null)
  const [loading, isLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [searchResults, setSearchResults] = useState(null)
  const countryInput = useContext(CountryContext)
  const [userFavorites, setUserFavorites] = useState(null)

  const updateUserFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteAlbumIDs"))
    if (storedFavorites) {
      setUserFavorites(storedFavorites)
    } else {
      const emptyFavorites = []
      setUserFavorites(emptyFavorites)
      localStorage.setItem("favoriteAlbumIDs", JSON.stringify(emptyFavorites))
    }
  }

  useEffect(() => {
    setIsError(false)
    isLoading(true)
    getTop100Albums(countryInput)
      .then((albums) => {
        const modifiedAlbums = albums.map((album, index) => {
          album.chartPosition = index + 1
          return album
        })
        setAlbums(modifiedAlbums)
        updateUserFavorites()
        isLoading(false)
      })
      .catch((error) => {
        setIsError("Failed to fetch albums")
      })
  }, [countryInput])

  useEffect(() => {
    if (!searchInput) setSearchResults(null)
    if (albums) {
      const filteredResults = albums.filter(
        (album) =>
          album["im:artist"].label
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          album["im:name"].label
            .toLowerCase()
            .includes(searchInput.toLowerCase())
      )
      setSearchResults(filteredResults)
    }
  }, [searchInput])

  if (isError) {
    return <ErrorAlert errorMsg={isError} />
  }

  if (loading)
    return (
      <div className="flex flex-wrap gap-4 justify-center p-4 max-w-screen-xl">
        {new Array(50).fill(null).map((album, index) => {
          return <AlbumCardSkeleton key={`skelton-${index}`} />
        })}
      </div>
    )

  if (albums && !searchInput)
    return (
      <div className="flex flex-wrap gap-4 justify-center p-4 max-w-screen-xl">
        {albums.map((album) => {
          return (
            <AlbumCard
              setUserFavorites={setUserFavorites}
              album={album}
              userFavorites={userFavorites}
              key={`album-${album.id.attributes["im:id"]}`}
            />
          )
        })}
      </div>
    )
  
  if (searchInput) {
    return searchResults && searchResults.length > 0 ? (
      <div className="flex flex-wrap gap-4 justify-center p-4 max-w-screen-xl">
        {searchResults.map((album) => (
          <AlbumCard
            setUserFavorites={setUserFavorites}
            album={album}
            userFavorites={userFavorites}
            key={`album-${album.id.attributes["im:id"]}`}
          />
        ))}
      </div>
    ) : (
      <InfoAlert setSearchInput={setSearchInput} />
    )
  }
}

export default AlbumsList
