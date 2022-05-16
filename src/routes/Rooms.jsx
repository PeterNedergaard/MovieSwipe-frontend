import React, {useEffect, useState} from 'react';
import "../rooms.css"
import apiFacade from "../apiFacade";

const Rooms = props => {

    const [rooms, setRooms] = useState([]);
    const [roomNameInput, setRoomNameInput] = useState("");
    const [update, setUpdate] = useState();


    useEffect(() => {

        const fetchRoom = async() => {
            const fetch = await apiFacade.getMyRooms();

            setRooms(fetch);
            console.log(fetch);
        }

        fetchRoom();

    }, [update])



    const joinRoom = (roomCode) => {

    }

    const createRoom = async() => {
        await apiFacade.createRoom(roomNameInput);
        setUpdate(!update);
    }


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
                                    <td>{room.ownerName}</td>
                                </tr>
                            )
                            }

                        )}


                    </tbody>
                </table>
            </div>

            <div className="btnContainerRooms">

                <div className="joinContainer">
                    <input type="text" placeholder="Enter room code"/>
                    <button className="btn btn-primary roomBtns">Join room</button>
                </div>

                <div className="createContainer">
                    <input onChange={event => setRoomNameInput(event.target.value)} type="text" placeholder="Enter room name"/>
                    <button onClick={createRoom} className="btn btn-primary roomBtns">Create room</button>
                </div>

            </div>

        </div>
    );
};


export default Rooms;