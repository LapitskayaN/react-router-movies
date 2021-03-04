import React, {useEffect, useState} from "react";
import Card from "../card"

const  initialState = {
    movies: [],
    randomMovie: {},
}

const url = 'https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json'

const MovieList = (props) => {

    const [state, setState] = useState(initialState);
    useEffect(() => {
      getData()
    }, [])

    const getData = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setState({
            ...state,
            movies: data.movies
        }))
    }

    const getMovie =(e) =>{
        const movie = state.movies.find(elem => elem.id == e.target.id);
        setState ({
            ...state,
            randomMovie: movie
        })

        props.history.push({
            pathname: '/movie',
            state: {
                randomMovie: movie
            }
        })

        
    };

    const renderItems = () => 
        state.movies.map((elem) => (
        <Card 
            onClick={getMovie}
            key={elem.id} 
            title={elem.title}
            posterUrl={elem.posterUrl} 
            id={elem.id}
        />
        ))
    

    return (
       <div>
           {
               state.movies &&  renderItems()
           }

       </div>     
    )
}

export default MovieList;