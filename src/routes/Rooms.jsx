import React, {useEffect, useState} from 'react';
import "../rooms.css"
import apiFacade from "../apiFacade";

const Rooms = props => {
const [rooms, setRooms]= useState([])


    useEffect(() => {

        const fetchRoom = async() => {
            const fetch = await apiFacade.getMyRooms();

            setRooms(fetch);
            console.log(fetch);
        }

        fetchRoom();

    }, [])


    return (
        <div>
            <h1>Rooms</h1>

            <div className="roomTableContainer">
                <table className="roomTable table table-light table-striped table-style table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Room name</th>
                        <th scope="col">Room code</th>
                        <th scope="col">Room owner</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room,index)=> {
                            return(
                                <tr key={index}>
                                    <td>{room.roomName}</td>
                                    <td>{room.roomCode}</td>
                                    <td>{room.ownerId}</td>
                                </tr>
                            )
                            }

                        )}


                    </tbody>
                </table>
            </div>

            <div className="btnContainerRooms">

                <div className="joinContainer">
                    <button className="btn btn-primary roomBtns">Join room</button>
                    <input type="text" placeholder="Enter room code"/>
                </div>

                <div className="createContainer">
                    <button className="btn btn-primary roomBtns">Create room</button>
                    <input type="text" placeholder="Enter room name"/>
                </div>

            </div>

        </div>
    );
};


export default Rooms;