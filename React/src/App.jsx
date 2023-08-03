import { useState,useEffect } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { fetchDatafromapi } from './util/api'
import { getApiconfiguration, getGenres } from './store/homeSlice';
import { useSelector,useDispatch } from 'react-redux';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageNotfound from './pages/404/PageNotfound';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import SearchResult from './pages/searchResult/SearchResult';

function App() {

  const dispatch=useDispatch()
  // const {url} = useSelector((state)=>state.home)
  
    useEffect(()=>{ 
      fetchApiconfig();
      genresCall();
    },[])

    const fetchApiconfig =()=>{
      fetchDatafromapi("/configuration")
      .then((res)=>{
        console.log(res)

        const url = {
          backdrop : res.images.secure_base_url + "original",
          poster : res.images.secure_base_url + "original",
          profile : res.images.secure_base_url + "original",
        }
        dispatch(getApiconfiguration(url))
      })
    }

    const genresCall = async ()=>{
      let promises = []
      let endPoint = ["tv" , "movie"]
      let allGenres = {}

      endPoint.forEach((url)=>{
        promises.push(fetchDatafromapi(`/genre/${url}/list`));
      });

      const data = await Promise.all(promises);

      console.log(data);
      data.map(({genres})=>{
        return genres.map((item) => (allGenres[item.id] = item))
      });
      
      dispatch(getGenres(allGenres));
    }

  return (<BrowserRouter>
    <Header /> 
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:mediaType/:id" element={<Details/>} />
        <Route path="/search/:query" element={<SearchResult/>}></Route>
        <Route path="/explore/:mediaType" element={<Explore/>}></Route>
        <Route path="*" element={<PageNotfound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
      
  )
}

export default App
