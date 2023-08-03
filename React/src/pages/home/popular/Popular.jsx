import React,{useState} from 'react'
// import "./style.scss"
import SwitchTab from '../../../components/switchTab/SwitchTab'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFatch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


  const Popular = () => {

  const [endpoint, setEndpoint] = useState("movie");
    
  const {data , loading} = useFatch(`/${endpoint}/popular`);

  const onTabChange=(tab)=>{
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="contentWrapper">Popular</span>
            <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default Popular
