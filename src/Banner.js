import axios from "./axios";
import React, {useState, useEffect} from "react";
import "./Banner.css";
import requests from "./Requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                //   set the movie from the array (1 to array length minus one)
                  Math.floor(Math.random() * request.data.results.length -1)  
                ]
            );
            return request;
        }

        fetchDate();
    }, [])

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + "...": string;
    }

    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__content">
                <h1 className='banner__title'> 
                    {movie?.title || movie?.name || movie?.originalName} 
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button"> Play </button>
                    <button className="banner__button"> My list </button>
                </div> 
                <h1 className="banner__description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>

            {/* This is the effect in the botton of banner */}
            <div className="banner--fadeButton"/>
        </header>
    )
}

export default Banner
