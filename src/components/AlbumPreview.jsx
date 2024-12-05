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
          <img
            src={album["im:image"][0].label.replace("55x55", "250x250")}
            alt={`${album["im:name"].label} Album Artwork`}
          />
        </div>
        <div className="flex justify-center">
          <h1 className="text-xl">{album["im:name"].label}</h1>
        </div>
        <div className="flex justify-center">
          <h2 className="text-sm">{album["im:artist"].label}</h2>
        </div>
        {!albumTracks ? (
          <ErrorAlert errorMsg="No track previews available" />
        ) : (
          <div>
            <div className="mb-4">
              <AudioPlayer currentTrack={currentTrack} />
            </div>

            <div className="space-y-2 max-h-36 overflow-y-auto overflow-x-hidden">
              <ul className="track-list">
                {albumTracks.map((track) => (
                  <li
                    key={track.trackNumber}
                    className="track-item flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span className="track-number text-sm pr-3">
                        {track.trackNumber}
                      </span>
                      <span className="track-name text-sm ">
                        {track.trackName}
                      </span>
                    </div>
                    <button
                      className="bg-blue-500 text-white text-base pr-4 pl-4 pt-1 pb-1 mb-1 rounded "
                      onClick={(event) => {
                        event.stopPropagation()
                        setCurrentTrack(track.previewUrl)
                      }}
                    >
                      Play
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex justify-center text-center pt-2">
          <p className="text-xs">{album.rights.label}</p>
        </div>
      </div>
    </div>
  )
}

export default AlbumPreview
