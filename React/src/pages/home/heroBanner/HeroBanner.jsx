import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import "./style.scss";
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const [query,setQuery]=useState("");
    const [background , setBackground] = useState("")
    const navigate = useNavigate()
    const {url} = useSelector((state)=>state.home)
    const { data,loading } = useFetch("/movie/upcoming")

    useEffect(()=>{
        const bg=url.backdrop+data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg)
    },[data])

    const searchqueryHandler=(event)=>{
        if(event.key==="Enter" && query.length>0){
            navigate(`/search/${query}`);
        }

    }
  return (

    <div className="herobanner">

        {!loading && <div className="backdrop-img">
            <Img src={background} />
        </div>}
        
        <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">Millions of movies, TV shows and people to discover.
                    Explore now.</span>
                    <div className="searchInput">
                        <input type="text"
                            placeholder='search for a movie and TV shows....'
                            onChange={(e)=>setQuery(e.target.value)}
                            onKeyUp={searchqueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
  )
}

export default HeroBanner
