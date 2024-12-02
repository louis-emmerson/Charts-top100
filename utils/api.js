import axios from "axios";

const api = axios.create({baseURL:"https://rss.applemarketingtools.com/api/v2"})

function getTop100Albums(country = "us"){
    return api.get(`/${country}/music/most-played/100/albums.json`)
    .then(({data})=>{
        return data.feed.results
    })
}



export {getTop100Albums}