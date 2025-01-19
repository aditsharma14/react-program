import { useState } from "react";
const Movie=()=>{
    const[movie,setMovie]=useState({
        title:"equalizer 3",
        ratings:7,
    });
    const Handleclick=()=>{
        setMovie({...setMovie,ratings:5});
    }
    return(
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.ratings}</p>
            <button onClick={Handleclick}>Change Ratings</button>
        </div>
        );
    
};
export default Movie;
