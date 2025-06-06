import { useContext } from "react";
import { WatchListContext } from "../App";


function MovieCard(props) {
    const { movieObj } = props;
     const watchListContextValue = useContext(WatchListContext)
    console.log("ContextValue: ", watchListContextValue);

    const { addToWatchLiist, removeFromWatchList, watchList } = watchListContextValue    

   
    // console.log("IsArray: ", Array.isArray(watchList), watchList.length);

    let isMovieInWatchList = watchList.some((wlMov) => {
       return wlMov.id == movieObj.id;
    });
    // console.log("isMovieInWatchList: ", isMovieInWatchList);

    let moviePoster = movieObj.backdrop_path;
    let movieTitle = movieObj.title;

    const moviePosterUrl = `url(https://image.tmdb.org/t/p/original/${moviePoster})`;
    return <div className="h-[30vh] w-[200px] bg-cover bg-center rounded-xl flex flex-col justify-between items-end hover:scale-110 duration-300 hover:cursor-pointer"
        style={{ backgroundImage: moviePosterUrl }}>

        {
            (isMovieInWatchList) ? <div onClick={() => removeFromWatchList(movieObj)} className="m-4 flex items-center justify-end bg-gray-900/60 rounded">
                &#10060; {/* cross */}
            </div>
                :
                <div onClick={() => addToWatchLiist(movieObj)} className="m-4 flex items-center justify-end bg-gray-900/60 rounded">
                    &#128525;  {/* smily */}
                </div>

        }
        <div className="text-xl text-white bg-gray-900 bg-opacity-60 test-center w-full">
            {movieTitle}
        </div>
    </div>
}

export default MovieCard;