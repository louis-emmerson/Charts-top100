import HeartIcon from "./HeartIcon";

function AlbumCard({ album }) {
    const {
      chartPosition,
      "im:image": image,
      "im:artist": artist,
      "im:name": title,
      "im:releaseDate": releaseDate,
    } = album;
  
    return (
      <div
        className="w-full h-56 hover:h-80 md:size-72 md:hover:h-72 rounded-2xl"
        style={{
          backgroundImage:
            image.length > 0 ? `url(${image[image.length - 1].label})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* bg-gradient-to-r from-black/25 to-black */}
        <div className="bg-black/25 p-4 h-full rounded-2xl flex flex-col justify-end">
            <div className="mb-16 md:mb-32">
          <HeartIcon/>
            </div>
        
        
          <h2 className="z-10 mt-3 text-3xl font-bold text-white truncate drop-shadow-xl">
            {chartPosition}
          </h2>
          <div>
            <h3 className="z-10 text-xl font-bold text-white truncate drop-shadow-xl">
              {title.label}
            </h3>
            <p className="z-10 overflow-hidden text-sm leading-6 text-white truncate drop-shadow-xl">
              {artist.label}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AlbumCard;
  

