import { useEffect, useState } from "react";
import genreIdMappings from "../../Configuration/GenreConfig"


function WatchList(props) {
    const { watchList, removeFromWatchList } = props
    const genreSet = new Set();

    const [movies, setMovies] = useState(watchList)
    const [searchValue, setSearchValue] = useState([])

    useEffect(() => {
        setMovies(watchList)
    }, [watchList])

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

    const onSearchInputChange = (e) => {
        const searchFieldVal = e.target.value;
        setSearchValue(searchFieldVal);

        const filteredMovies = watchList.filter((movie) => {
            return movie.title.toLowerCase().startsWith(searchFieldVal.toLowerCase());
        })
        setMovies(filteredMovies)
    }

    const onGenreSelect = (genreVal) => {
        if (genreVal == "All Genres") {
            setMovies(watchList)
        } else {
            const filteredMovies = watchList.filter((movie) => {
                //return movie.title.toLowerCase().startsWith(genreVal.toLowerCase());
                const genreIds = movie.genre_ids;
                for (let i = 0; i < genreIds.length; i++) {
                    if (genreIdMappings[genreIds[i]] == genreVal) {
                        return movie;
                    }
                }


            })
            setMovies(filteredMovies)
        }
    }

    return <div>
        <div className="flex justify-center m-4" >
            {
                genres.map((genre) => {
                    return <div key={genre} onClick={() => onGenreSelect(genre)}
                        className="mx-4 bg-blue-400 h-[3rem] w-[9rem] flex justify-center items-center rounded-xl text-white font-bold"> {genre}</div>
                })
            }
        </div>

        <div className="my-10">
            <input type="test" placeholder="Search Movies" value={searchValue} onChange={onSearchInputChange}
                className="h-[3rem] w-[20rem] border divide-gray-800 px-4"
            />
        </div>

        <div>
            <table className="my-10 w-full">
                <thead>

                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Popularity</th>
                        <th>Genre</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        movies.map((movie) => {
                            return <tr className="">
                                <td className="flex justify-center">
                                    <img className="h-[6rem] w-[10rem] object-fit " src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                </td>

                                <td className="">
                                    {movie.title}
                                </td>

                                <td>
                                    {movie.vote_average}
                                </td>

                                <td>
                                    {movie.popularity}
                                </td>

                                <td>
                                    {genreIdMappings[movie.genre_ids[0]]}
                                </td>

                                <td onClick={() => removeFromWatchList(movie)} className="text-red-500">Delete</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>


    </div>
}

export default WatchList;