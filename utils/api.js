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
        data.results.shift()
        return data.results
      })
}



export {getTop100Albums,getAlbumTracks}