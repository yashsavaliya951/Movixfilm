import React from 'react'
import { useParams } from 'react-router-dom'
import "./style.scss"
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videoSection/VideoSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'

const Details = () => {
  const {mediaType, id} = useParams();
  const {data , loading } = useFetch(`/${mediaType}/${id}/videos`);
  const {data: credits , loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  const trailer = data?.results?.filter((f)=>
    f.name === "Trailer" || f.name === "Official Trailer" || f.name === "Main Trailer"
  )

  return (
    <div>
      <DetailsBanner video={trailer?.[0] || data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details
