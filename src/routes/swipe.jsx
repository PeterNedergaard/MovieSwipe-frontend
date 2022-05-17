import React, {useEffect, useState} from 'react';
import "../swipe.css"
import apiFacade from "../apiFacade";

const Swipe = props => {

    const [movieList, setMovieList] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {

        const fetch = async () => {
            const movies = await apiFacade.getMovies();

            setMovieList(movies);
        }

        fetch();

    }, [])


    const incCount = () => {
        if (count < movieList.length - 1) {
            setCount(count + 1)
        }
    }

    const dislike = () => {
        apiFacade.addMovieInteraction(count + 1, apiFacade.getName(), false);

        incCount();
    }

    const like = () => {
        apiFacade.addMovieInteraction(count + 1, apiFacade.getName(), true);

        incCount();
    }

    const getImg = () => {

        if (movieList.length > 0) {
            return (
                <img width="300" src={movieList[count].imgUrl}>
                </img>
            )
        }

    }


    return (
        <div>
            <div className="swipeContainer">
                <div>
                    {getImg()}
                </div>

                <div className="row btnContainer">
                    <div className="col-4">
                        <button onClick={dislike} className="btn btn-danger swipeBtns dislikeBtn">Dislike</button>
                    </div>
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                        <button onClick={like} className="btn btn-success swipeBtns likeBtn">Like</button>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Swipe;