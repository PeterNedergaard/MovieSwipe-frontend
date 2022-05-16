import React, {useEffect, useState} from 'react';
import facade from "../apiFacade";
import "../roomViewPage.css";

const RoomViewPage = props => {

    const [users, setUsers] = useState([]);
    const [commonMovies, setCommonMovies]= useState([])

    useEffect(() => {

        const fetchUsers = async() => {
            const fetch = await facade.getUsersByRoomCode(props.roomCode);

            setUsers(fetch);



        }
        const fetchMovies = async() =>{
            const fetch = await facade.getLikedMoviesByRoomCode(props.roomCode)
            setCommonMovies(fetch)
            console.log(commonMovies)
        }

        fetchUsers();
        fetchMovies();


    },[])


    return (
        <div>
            <div className="roomInfoContainer">
                <h4>Room code: {props.roomCode}</h4>
                <h4>Room name: {props.roomName}</h4>
            </div>

            <div>
                <table className="membersTable table table-light table-striped table-style table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Member name</th>
                    </tr>
                    </thead>
                    <tbody>

                    {users.map((user, index) => {
                        return(
                            <tr key={index}>
                                <td>{users[index]}</td>

                            </tr>
                        )
                    })

                    }

                    </tbody>
                </table>
            </div>
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

                    {commonMovies.map((movie, index) => {
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


export default RoomViewPage;