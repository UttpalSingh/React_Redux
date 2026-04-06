import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY


export default async function fetchPhotos(query,page=1,perPage=20){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,perPage},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return response.data 
}

export default async function fetchVideos(query,page=1,perPage=15){
        const response = await axios.get('https://api.pexels.com/v1/videos/search',{
        params:{query,page,perPage},
        headers:{Authorization:PEXELS_KEY}
    })

    console.log(response);
    
}