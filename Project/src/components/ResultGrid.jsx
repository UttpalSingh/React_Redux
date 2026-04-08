import React, { useEffect } from 'react'
import { fetchVideos,fetchPhotos } from '../api/mediaApi'
import { setQuery,setLoading,setError,setResults,clearResults } from '../features/searchSlice'
import { useDispatch,useSelector } from 'react-redux'
import { store } from '../app/store'

const ResultGrid = () => {
    const {query,activeTab,results,loading,error} = useSelector((store) => store.search)

    useEffect(()=>{
        const  getData = async () =>{
            let data
            if(activeTab == 'photos'){
                let response = await fetchPhotos(query)
                data = response.results.map((item)=> ({
                    id:item.id,
                    type:'photo',
                    title:item.alt_description,
                    thumbnail:item.urls.small,
                    src:item.urls.full
                }))
            }
            if(activeTab == 'videos'){
                let response = await fetchVideos(query)
                data = response.videos.map((item)=>({
                    id:item.id,
                    type:'video',
                    title: item.user.name || 'video',
                    thumbnail:item.image,
                    src:item.video_files[0].link
                }))
            }
            console.log(data);
        }
        getData()
    },[query,activeTab])



  return (
    <div>
   
    </div>
  )
}

export default ResultGrid
