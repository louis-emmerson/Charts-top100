import { useContext, useEffect, useState } from "react";
import { getTop100Albums } from "../../utils/api";
import AlbumCardSkeleton from "./AlbumCardSkeleton";
import CountryContext from "../context/county-context";
import { ErrorAlert, AlbumCard, InfoAlert, AlbumPreview } from "./index";
import { SearchContext } from "../context";
import { useNavigate } from "react-router-dom";

function AlbumsList() {
  const navigation = useNavigate();
  const { countryInput } = useContext(CountryContext);
  const { searchInput, favoritesToggle } = useContext(SearchContext);
  const [albums, setAlbums] = useState(null);
  const [loading, isLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [userFavorites, setUserFavorites] = useState(null);
  const [toggleAlbumPreview, setToggleAlbumPreview] = useState(false);
  const [albumPreview, setAlbumPreview] = useState(null);

  const updateUserFavorites = () => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favoriteAlbumIDs"),
    );
    if (storedFavorites) {
      setUserFavorites(storedFavorites);
    } else {
      const emptyFavorites = [];
      setUserFavorites(emptyFavorites);
      localStorage.setItem("favoriteAlbumIDs", JSON.stringify(emptyFavorites));
    }
  };

  const renderAlbumCards = (albums) => {
    if (albums.length === 0) {
      if (favoritesToggle)
        return <InfoAlert infoMsg="You have no favorites!" />;
      return <InfoAlert />;
    }
    return albums.map((album) => {
      return (
        <AlbumCard
          setUserFavorites={setUserFavorites}
          album={album}
          userFavorites={userFavorites}
          key={`album-${album.id.attributes["im:id"]}`}
          setToggleAlbumPreview={setToggleAlbumPreview}
          setAlbumPreview={setAlbumPreview}
        />
      );
    });
  };

  useEffect(() => {
    setIsError(false);
    isLoading(true);
    navigation(`/country/${countryInput}`);
    getTop100Albums(countryInput)
      .then((albums) => {
        const modifiedAlbums = albums.map((album, index) => {
          album.chartPosition = index + 1;
          return album;
        });
        setAlbums(modifiedAlbums);
        updateUserFavorites();
        isLoading(false);
      })
      .catch(() => {
        isLoading(false);
        setIsError("Failed to fetch albums");
      });
  }, [countryInput]);

  useEffect(() => {
    if (!searchInput) setSearchResults(null);
    if (albums) {
      const filteredResults = albums.filter(
        (album) =>
          album["im:artist"].label
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          album["im:name"].label
            .toLowerCase()
            .includes(searchInput.toLowerCase()),
      );

      setSearchResults(filteredResults);
    }
  }, [favoritesToggle, searchInput]);

  if (isError) {
    return <ErrorAlert errorMsg={isError} />;
  }

  if (loading)
    return (
      <div className="flex max-w-screen-xl flex-wrap justify-center gap-4 p-4">
        {new Array(50).fill(null).map((album, index) => {
          return <AlbumCardSkeleton key={`skelton-${index}`} />;
        })}
      </div>
    );

  if (albums && !searchInput)
    return (
      <div>
        {toggleAlbumPreview ? (
          <AlbumPreview
            albumPreview={albumPreview}
            setToggleAlbumPreview={setToggleAlbumPreview}
          />
        ) : null}
        <div className="flex max-w-screen-xl flex-wrap justify-center gap-4 p-4">
          {favoritesToggle
            ? renderAlbumCards(
                albums.filter((album) =>
                  userFavorites.includes(album.id.attributes["im:id"]),
                ),
              )
            : renderAlbumCards(albums)}
        </div>
      </div>
    );

  if (searchInput) {
    return searchResults && searchResults.length > 0 ? (
      <div>
        {toggleAlbumPreview ? (
          <AlbumPreview
            albumPreview={albumPreview}
            setToggleAlbumPreview={setToggleAlbumPreview}
          />
        ) : null}
        <div className="flex max-w-screen-xl flex-wrap justify-center gap-4 p-4">
          {favoritesToggle
            ? renderAlbumCards(
                searchResults.filter((album) =>
                  userFavorites.includes(album.id.attributes["im:id"]),
                ),
              )
            : renderAlbumCards(searchResults)}
        </div>
      </div>
    ) : (
      <InfoAlert infoMsg={`No results found matching: ${searchInput}!`} />
    );
  }
}

export default AlbumsList;
