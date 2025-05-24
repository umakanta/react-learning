import { useEffect, useState } from "react";
import Spinner from "../Common/Spinner/Spinner";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination/Pagination";


function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

    //--------------------------
    const [pageNum, setPageNum] = useState(1)
    const prevPageFn = () => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1)
        }
    }

    const nextPageFn = () => {
        setPageNum(pageNum + 1)

    }
    //----------------------------
    const fetchMovieData = async () => {
        setLoading(true);

        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=439b69205cd908703eed7d441ac88094&page=${pageNum}`);
        let movies = response.data.results;

        setMovies(movies);
        setLoading(false);
    };
    useEffect(() => {
        fetchMovieData();
    }, [pageNum])

    if (loading) {
        return <div className="flex justify-center" > <Spinner /> </div>
    }

    return <div >
        <h1 className="test-2xl font-bold m-5">Tending Movies</h1>
        <div className="flex flex-wrap gap-8 justify-evenly align-center mt-5">
            {
                movies.map((movieObj) => {
                    return <MovieCard key={movieObj.id} movieObj={movieObj} />
                })
            }
        </div>

        <Pagination pageNum={pageNum} prevPageFn={prevPageFn} nextPageFn={nextPageFn} />
    </div>
}

export default Movies;