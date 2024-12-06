import { useContext } from "react";
import { AlbumsList } from "../components";
import { SearchContext } from "../context";

function Top100Albums({ nav }) {
  const { searchInput } = useContext(SearchContext);
  return (
    <section>
      <div className={`${nav ? "pt-44" : null}`}>
        {searchInput ? (
          <h1 className={`w-full text-center text-2xl font-medium text-black`}>
            {" "}
            Search results for: {searchInput}
          </h1>
        ) : null}
      </div>
      <div className="items-center justify-center md:flex">
        <AlbumsList />
      </div>
    </section>
  );
}

export default Top100Albums;
