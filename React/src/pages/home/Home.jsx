import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner';
import Tranding from './tranding/Tranding';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Tranding />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
