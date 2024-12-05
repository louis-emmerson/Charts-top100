import { useEffect, useState } from "react"
import HeartIcon from "./HeartIcon"
import { getAlbumTracks } from "../../utils/api"

function AlbumCard({ album, setUserFavorites, userFavorites,setToggleAlbumPreview,setAlbumPreview }) {
  const {
    chartPosition,
    "im:image": image,
    "im:artist": artist,
    "im:name": title,
    "im:releaseDate": releaseDate,
  } = album
  const [albumTracks, setAlbumTracks] = useState([])
  const marketResults = album.link.attributes.href.match(/\.com\/([a-z]{2})\//)
  const albumMarket = marketResults[1]

  useEffect(()=>{
    getAlbumTracks(album.id.attributes["im:id"],albumMarket).then((tracks)=>{
      setAlbumTracks(tracks)
    }
    ).catch((err)=>{
      setAlbumTracks(null)
    })
  },[album.id])

  return (
      
      <div
        className="w-full h-56 md:size-72  rounded-2xl z-0"
        style={{
          backgroundImage:
            image.length > 0 ? `url(${image[0].label.replace("55x55","300x300")})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        
        <div className="bg-gradient-to-b from-black/5 to-black/70 p-4 h-full rounded-2xl flex flex-col justify-end" onClick={()=>{
          setAlbumPreview([album,albumTracks])
          setToggleAlbumPreview(true)
        }}>
          <div className="mb-16 md:mb-32">
            <HeartIcon
              setUserFavorites={setUserFavorites}
              albumID={album.id.attributes["im:id"]}
              userFavorites={userFavorites}
            />
          </div>
          <h2  className="mt-3 text-3xl font-bold text-white truncate drop-shadow-xl">
            {chartPosition}
          </h2>
          <div>
            <h3 className="text-xl font-bold text-white truncate drop-shadow-xl">
              {title.label}
            </h3>
            <p className="overflow-hidden text-sm leading-6 text-white truncate drop-shadow-xl">
              {artist.label}
            </p>
          </div>
        </div>
      </div>
  )
}

export default AlbumCard
