import React, { useEffect } from "react";
import { fetchVideos, fetchPhotos } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
  clearResults,
} from "../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../app/store";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if(!query) return 
    const getData = async () => {
      try {
        dispatch(setLoading())
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url:item.links.html,
          }));
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url:item.url
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message))
      }
    };
    getData();
  }, [query, activeTab]);

  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading...</h1>


  return( 
  <div className="w-full flex justify-center flex-wrap gap-5 overflow-auto px-10">
    {results.map((item,index)=>{
        return <div key={index}>
            <a target="_blank" href={item.url}><ResultCard item = {item}/></a>
        </div>
    })}
  </div>
  )
};

export default ResultGrid;

// Destructuring in JavaScript is a convenient way to extract values from arrays or objects and assign them to variables in a cleaner, shorter syntax.