import { useEffect, useState } from "react";
import PlaceHolder from "../assets/placeholder.png"
import axios from "axios"

function Banner() {

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=439b69205cd908703eed7d441ac88094");
                console.log("response: ", response)
                let random = Math.floor(Math.random() * 10);
                let movie = response.data.results[random];
                
                let moviePoster = movie.backdrop_path;
                let movieTitle = movie.title;

                setBannerImage(`https://image.tmdb.org/t/p/original/${moviePoster}`)
                setMovieTitle(movieTitle)
            } catch (error) {
                console.log("error: ", error)
            }
        }
        fetchData();


    }, [])
    const [bannerImage, setBannerImage] = useState(PlaceHolder)
    const [movieTitle, setMovieTitle] = useState("")

    return <div className="h-[20vh] bg-cover bg-center flex items-end justify-center"
    style={{backgroundImage:`url(${bannerImage})`}}>
        <div className="bg-gray-500 pl-2 pr-2 rounded-md text-white text-2xl">
            {movieTitle}
        </div>
    </div>
}

export default Banner;