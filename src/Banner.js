import React from "react";
import "./Banner.css"

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + "...": string;
    }

    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            // backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__content">
                <h1 className='banner__title'> Movie name </h1>
                <div className="banner__buttons">
                    <button className="banner__button"> Play </button>
                    <button className="banner__button"> My list </button>
                </div> 
                <h1 className="banner__description">
                    {truncate(`This is a test description. If the description is too long I truncate it`,60)}
                </h1>
            </div>

            <div className="banner--fadeButton"/>
        </header>
    )
}

export default Banner
