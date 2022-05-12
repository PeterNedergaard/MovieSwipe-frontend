import React, {useEffect, useState} from 'react';
import "../likedMovies.css"
import apiFacade from "../apiFacade";

const LikedMovies = props => {

    const [movies, setMovies] = useState([]);


    useEffect(() => {

        const fetchMovies = async() => {
            const fetch = await apiFacade.getMyMovies();

            setMovies(fetch);
        }

        fetchMovies();

    }, [])



    return (
        <div>
            <h1>Liked movies</h1>

            <div className="movieTableContainer">
                <table className="movieTable table table-light table-striped table-style table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Release year</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Poster</th>
                    </tr>
                    </thead>
                    <tbody>

                    {movies.map((movie, index) => {
                        return (
                            <tr key={index}>
                                <td>{movie.title}</td>
                                <td>{movie.releaseYear}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.duration}</td>
                                <td><img className="tablePoster" src={movie.imgUrl}/></td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default LikedMovies;