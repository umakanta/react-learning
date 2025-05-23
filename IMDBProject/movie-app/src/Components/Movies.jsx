import { useEffect, useState } from "react";
import Spinner from "../Common/Spinner/Spinner";
import axios from "axios";
import MovieCard from "./MovieCard";


function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchMovieData = async()=> {
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=439b69205cd908703eed7d441ac88094");
        let movies = response.data.results;

        setMovies(movies);
        setLoading(false);
    };
    useEffect(()=>{
        fetchMovieData();
    },[])

    if(loading) {
        return <div className="flex justify-center" > <Spinner /> </div>
    }
    return <div className="test-2xl font-bold m-5">
        <h1>Tending Movies</h1>
        <div className="flex flex-wrap gap-8 justify-evenly align-center mt-5">
            {
                movies.map((movieObj) => {
                    return <MovieCard movieObj={movieObj}/>
                })
            }
        </div>
        
    </div>
}

export default Movies;