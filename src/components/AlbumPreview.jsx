import { useState } from "react"
import AudioPlayer from "./AudioPlayer.JSX"
import ErrorAlert from "./ErrorAlert"

function AlbumPreview({ albumPreview, setToggleAlbumPreview }) {
  const album = albumPreview[0]
  const albumTracks = albumPreview[1]
  const [currentTrack, setCurrentTrack] = useState(null)

  
    return (
      <div
        className="fixed inset-0 z-30 flex items-center justify-center bg-black/60"
        onClick={() => setToggleAlbumPreview(false)}
      >
        <div
          className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex justify-center">
            <img src={album["im:image"][0].label.replace("55x55", "250x250")} />
          </div>
          <div className="flex justify-center">
            <h1 className="text-xl">{album["im:name"].label}</h1>
          </div>
          <div className="flex justify-center">
            <h2 className="text-sm">{album["im:artist"].label}</h2>
          </div>
          {!albumTracks ? <ErrorAlert errorMsg="No Previews available"/> : (
            <div>
              <div className="mb-4">
                <AudioPlayer currentTrack={currentTrack} />
              </div>

              <div className="space-y-2 max-h-36 overflow-y-auto">
                {albumTracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded shadow"
                  >
                    <span className="text-sm pr-3">{track.trackNumber}</span>
                    <span className="text-sm truncate">{track.trackName}</span>
                    <button
                      className="bg-blue-500 text-white text-sm px-3 py-1 rounded "
                      onClick={(event) => {
                        event.stopPropagation()
                        setCurrentTrack(track.previewUrl)
                      }}
                    >
                      Play
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center text-center pt-2">
            <h2 className="text-xs">{album.rights.label}</h2>
          </div>
        </div>
      </div>
    )
}

export default AlbumPreview
