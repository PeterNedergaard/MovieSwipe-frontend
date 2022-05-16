import React, {useEffect, useState} from 'react';
import facade from "../apiFacade";
import "../roomViewPage.css";

const RoomViewPage = props => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async() => {
            const fetch = await facade.getUsersByRoomCode(props.roomCode);

            setUsers(fetch);
        }

        fetchUsers();

    },[])


    return (
        <div>
            <div className="roomInfoContainer">
                <h4>Room code: {props.roomCode}</h4>
                <h4>Room name: {props.roomName}</h4>
            </div>

            <div className="membersTableContainer">

            </div>

        </div>
    );
};


export default RoomViewPage;