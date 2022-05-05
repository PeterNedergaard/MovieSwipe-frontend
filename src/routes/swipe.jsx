import React, {useEffect, useState} from 'react';
import "./Swipe.css"
import apiFacade from "../apiFacade";

const Swipe = props => {

    const [movieList,setMovieList] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {

        const fetch = async () => {
            const movies = await apiFacade.getMovies();

            setMovieList(movies);
            console.log(movieList[0]);
        }

        fetch();

    }, [])



    const incCount = () => {
        if (count < movieList.length - 1) {
            setCount(count + 1)
        }
    }

    const decCount = () => {

        if (count > movieList.length) {
            setCount(count - 1)
        }
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
                    {/*<img width="300" src="https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg" />*/}
                    {getImg()}
                </div>

                <div className="row btnContainer">
                    <div className="col-4">
                        <button onClick={decCount} className="btn btn-danger swipeBtns dislikeBtn">Dislike</button>
                    </div>
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                        <button onClick={incCount} className="btn btn-success swipeBtns likeBtn">Like</button>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Swipe;