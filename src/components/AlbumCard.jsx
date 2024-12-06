import { useEffect, useState } from "react";
import HeartIcon from "./HeartIcon";
import { getAlbumTracks } from "../../utils/api";

function AlbumCard({
  album,
  setUserFavorites,
  userFavorites,
  setToggleAlbumPreview,
  setAlbumPreview,
}) {
  const {
    chartPosition,
    "im:image": image,
    "im:artist": artist,
    "im:name": title,
    "im:releaseDate": releaseDate,
  } = album;
  const [albumTracks, setAlbumTracks] = useState([]);
  const marketResults = album.link.attributes.href.match(/\.com\/([a-z]{2})\//);
  const albumMarket = marketResults[1];

  useEffect(() => {
    getAlbumTracks(album.id.attributes["im:id"], albumMarket)
      .then((tracks) => {
        setAlbumTracks(tracks);
      })
      .catch((err) => {
        setAlbumTracks(null);
      });
  }, [album.id]);

  return (
    <div
      className="z-0 h-56 w-full rounded-2xl md:size-72"
      style={{
        backgroundImage:
          image.length > 0
            ? `url(${image[0].label.replace("55x55", "300x300")})`
            : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="flex h-full flex-col justify-end rounded-2xl bg-gradient-to-b from-black/5 to-black/70 p-4"
        onClick={() => {
          setAlbumPreview([album, albumTracks]);
          setToggleAlbumPreview(true);
        }}
      >
        <div className="mb-16 md:mb-32">
          <HeartIcon
            setUserFavorites={setUserFavorites}
            albumID={album.id.attributes["im:id"]}
            userFavorites={userFavorites}
          />
        </div>
        <h2 className="mt-3 truncate text-3xl font-bold text-white drop-shadow-xl">
          {chartPosition}
        </h2>
        <div>
          <h3 className="truncate text-xl font-bold text-white drop-shadow-xl">
            {title.label}
          </h3>
          <p className="overflow-hidden truncate text-sm leading-6 text-white drop-shadow-xl">
            {artist.label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
