import React from 'react';
import "../rooms.css"

const Rooms = props => {



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
                    <tr>
                        <td>Room name 1</td>
                        <td>Room code 1</td>
                        <td>Room owner 1</td>
                    </tr>
                    <tr>
                        <td>Room name 2</td>
                        <td>Room code 2</td>
                        <td>Room owner 2</td>
                    </tr>
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