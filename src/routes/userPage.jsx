import React from 'react';
import ApiFacade from "../apiFacade";
import Swipe from "./swipe";

const UserPage = props => {
    return (
        <div>
            {ApiFacade.getRoles() === "user" ?
                (
                    <div>
                        <h1 className="title">Swipe</h1>

                        <Swipe/>

                    </div>
                )
                :
                (<h1>You are not a user</h1>)
            }
        </div>
    );
};


export default UserPage;