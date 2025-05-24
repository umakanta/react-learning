import { useState } from "react";
import genreIdMappings from "../../Configuration/GenreConfig"


function WatchList(props) {
    const { watchList } = props
    const genreSet = new Set();

    const [movies, setMovies] = useState(watchList)

    movies.forEach((movie) => {
        const genreIds = movie.genre_ids;
        genreIds.forEach((id) => {
            genreSet.add(genreIdMappings[id]);
        });
    });
    const genres = Array.from(genreSet)
    genres.unshift("All Genres")
    console.log("genreSet: ", genres)

    console.log(movies)
    return <div>
        <div className="flex justify-center m-4" >
            {
                genres.map((genre) => {
                    return <div key={genre} className="mx-4 bg-blue-400 h-[3rem] w-[9rem] flex justify-center items-center rounded-xl text-white font-bold"> {genre}</div>
                })
            }
        </div>
        {
            movies.map((mov) => {
                return <h2> {mov.title}</h2>
            })
        }


    </div>
}

export default WatchList;