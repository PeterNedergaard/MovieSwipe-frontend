import React, {useEffect, useState} from 'react';
import "../rooms.css"
import apiFacade from "../apiFacade";
import RoomViewPage from "./roomViewPage";


const Rooms = props => {

    const [rooms, setRooms] = useState([]);
    const [roomNameInput, setRoomNameInput] = useState("");
    const [roomCodeInput, setRoomCodeInput] = useState("");
    const [update, setUpdate] = useState();

    const [viewCode, setViewCode] = useState("");
    const [viewName, setViewName] = useState("");
    const [viewOwnerName, setViewOwnerName] = useState("");



    useEffect(() => {

        const fetchRoom = async() => {
            const fetch = await apiFacade.getMyRooms();

            setRooms(fetch);
            console.log(fetch);
        }

        fetchRoom();

    }, [update])



    const joinRoom = async() => {
        await  apiFacade.joinRoom(roomCodeInput)
        setUpdate(!update);
    }

    const createRoom = async() => {
        await apiFacade.createRoom(roomNameInput);
        setUpdate(!update);
    }

    const viewRoom = (ev) => {
        setViewCode(ev.target.id);
        setViewName(ev.target.name);
        setViewOwnerName(ev.target.value);
    }

    const back = () => {
        setViewCode("");
    }


    return (
        <div>

            { viewCode === "" ?
                (
                    <div>
                        <h1>Rooms</h1>

                        <div className="roomTableContainer">
                            <table className="roomTable table table-light table-striped table-style table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">Room name</th>
                                    <th scope="col">Room code</th>
                                    <th scope="col">Room owner</th>
                                    <th scope="col">View</th>
                                </tr>
                                </thead>
                                <tbody>

                                {rooms.map((room,index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{room.roomName}</td>
                                            <td>{room.roomCode}</td>
                                            <td>{room.ownerName}</td>
                                            <td><button onClick={viewRoom} id={room.roomCode} value={room.ownerName} name={room.roomName} className="btn btn-success">View room</button></td>
                                        </tr>
                                    )
                                })

                                }

                                </tbody>
                            </table>
                        </div>

                        <div className="btnContainerRooms">

                            <div className="joinContainer">
                                <input  onChange={event => setRoomCodeInput(event.target.value)} type="text" placeholder="Enter room code"/>
                                <button onClick={joinRoom} className="btn btn-primary roomBtns">Join room</button>
                            </div>

                            <div className="createContainer">
                                <input onChange={event => setRoomNameInput(event.target.value)} type="text" placeholder="Enter room name"/>
                                <button onClick={createRoom} className="btn btn-primary roomBtns">Create room</button>
                            </div>

                        </div>
                    </div>
                )
                :
                (
                    <div>
                        <h1>{viewOwnerName}'s room</h1>
                        <button onClick={back} className="btn btn-danger">Back</button>
                        <RoomViewPage roomCode={viewCode} roomName={viewName} />
                    </div>
                )
            }



        </div>
    );
};


export default Rooms;