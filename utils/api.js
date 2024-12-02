import axios from "axios";

const api = axios.create({baseURL:"https://itunes.apple.com"})

function getTop100Albums(country = "us"){
    return api.get(`/${country}/rss/topalbums/limit=100/json`)
    .then(({data})=>{
        console.log(data)
        return data.feed.entry
    })
}



export {getTop100Albums}