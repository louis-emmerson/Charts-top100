import { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import { getTop100Albums } from "../../utils/api";

function AlbumsList(){
    const [albums, setAlbums] = useState(null)

    useEffect(()=>{
        getTop100Albums().then((albums)=>{
            console.log(albums)
            setAlbums(albums)
        })
    },[])

    if(albums) return <div className="flex flex-wrap gap-4 justify-center pr-4 pl-4">
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
        <AlbumCard/>
        </div>
}

export default AlbumsList