import axios from "axios";

const api = axios.create({baseURL:"https://itunes.apple.com"})

function getTop100Albums(country = "us"){
    return api.get(`/${country}/rss/topalbums/limit=100/json`)
    .then(({data})=>{
        return data.feed.entry
    })
}

function getAlbumTracks(albumId,market){
    return api.get(`/${market}/lookup?id=${albumId}&entity=song`).then(({data})=>{
        if(albumId ===1440985994) console.log(data)
        return data.results
      })
}



export {getTop100Albums,getAlbumTracks}