import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3"

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTBjMmI1MmNkYmVkNGFjYWMzMGEzNTE0MGM4YWUzMyIsInN1YiI6IjY0YjU0NTY3ZTBjYTdmMDEyNTNlNGJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Unfj0v-oexfxZnc2IUoV_3Ds8nzL4beR7BMK6m--KI"

const headers={
    Authorization: "bearer "+TMDB_TOKEN
}

export const fetchDatafromapi= async (url,params)=>{
    try{
        const {data} = await axios.get(BASE_URL+url,{headers,params})
        return data;
    }
    catch(err){
        console.log(err)
        return err;
    }
}