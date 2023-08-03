import React,{useState} from 'react'
import "./style.scss"
import SwitchTab from '../../../components/switchTab/SwitchTab'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFatch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


  const Tranding = () => {

  const [endpoint, setEndpoint] = useState("day");
    
  const {data , loading} = useFatch(`/trending/all/${endpoint}`);

  const onTabChange=(tab)=>{
    setEndpoint(tab === "Day" ? "day" : "week");
  }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="contentWrapper">Tranding</span>
            <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Tranding
