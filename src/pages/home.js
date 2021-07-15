import React from "react";
import useFetch from "../hooks/useFecth";

export default function Home(){
    const movies = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=2af4101b9cccb25bbefb90afc3225cd6&language=es-ES&page=1");

    console.log(movies);
    return "Estamos en Home";
}