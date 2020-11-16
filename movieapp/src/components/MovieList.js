import React from 'react';
import '../App.css';
import MovieCard from './MovieCard';
const MovieList =(props)=>{
    return(
        <div style={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap"}}>
            {props.list.map(el => {return ( <MovieCard card={el}/>)})}
        </div>

    );
}
export default MovieList;