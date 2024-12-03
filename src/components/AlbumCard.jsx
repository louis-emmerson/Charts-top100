import HeartIcon from "./HeartIcon"

function AlbumCard({ album }) {
  const {
    chartPosition,
    "im:image": image,
    "im:artist": artist,
    "im:name": title,
    "im:releaseDate": releaseDate,
  } = album

  return (
    <div
      className="w-full h-56 hover:h-80 md:size-72 md:hover:h-72 rounded-2xl z-0"
      style={{
        backgroundImage:
          image.length > 0 ? `url(${image[image.length - 1].label})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-gradient-to-b from-black/10 to-black/75 p-4 h-full rounded-2xl flex flex-col justify-end">
        {" "}
        <div className="mb-16 md:mb-32">
          <HeartIcon />
        </div>
        <h2 className="mt-3 text-3xl font-bold text-white truncate drop-shadow-xl">
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
