import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />

            <Banner />

            {/* Six rows. Each rows have different props */}
            <Row
                title="NETFLIX ORIGINAL"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            /> 
            <Row  title="Trending now" fetchUrl={requests.fetchTrending} /> 
            <Row  title="Top Rated" fetchUrl={requests.fetchTopRated} /> 
            <Row  title="Action movie" fetchUrl={requests.fetchActionMovie} /> 
            <Row  title="Comedy movie" fetchUrl={requests.fetchComedyMovies} /> 
            <Row  title="Horror movie" fetchUrl={requests.fetchHorrorMovie} /> 
            <Row  title="Romance movie" fetchUrl={requests.fetchRomanceMovie} /> 
            <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries} />            
       
        </div>
    )
}

export default HomeScreen
