import URL from "./settings";
import jwt from 'jwt-decode'

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function apiFacade() {


    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }
    const logout = () => {
        localStorage.removeItem("jwtToken");
    }
    const getRoles = () => {
        return jwt(getToken()).roles;
    }
    const getName = () => {
        return jwt(getToken()).username;
    }


    const getJokes = async() => {

        return await fetch(URL + "/api/info/jokes")
            .then(handleHttpErrors)
            // .then(res => ())

    }

    const getRoomMovies = async(roomCode) => {
        return await fetch(URL + "/api/info/roomswipe/" + encodeURIComponent(JSON.stringify({username: getName(), roomcode: roomCode })))
            .then(handleHttpErrors)
    }


    const createRoom = async(roomName) => {
        const options = makeOptions("POST", false,{username: getName(), roomname: roomName });
        return fetch(URL + "/api/info/createroom", options)
    }


    const joinRoom = async (roomCode) => {
        const options = makeOptions("POST", false, {username: getName(), roomcode: roomCode});
        return fetch(URL + "/api/info/addtoroom", options)
    }


    const getUsersByRoomCode = async(roomCode) => {
        return await fetch(URL + "/api/info/usersbyroom/" + roomCode)
            .then(handleHttpErrors)
    }


    const getMyRooms = async() => {

        return await fetch(URL + "/api/info/usersrooms/" + getName())
            .then(handleHttpErrors)
    }


    const getMyMovies = async() => {

        return await fetch(URL + "/api/info/likedmovies/" + getName())
            .then(handleHttpErrors)
    }


    const getMovies = async() => {

        return await fetch(URL + "/api/info/movies")
            .then(handleHttpErrors)

    }

    const getLikedMoviesByRoomCode= async (roomCode)=>{
        return await fetch(URL + "/api/info/roomlikes/"+ roomCode)
            .then(handleHttpErrors)
    }
    const addMovieInteraction = (movieId, userName, isLiked) => {
        const options = makeOptions("POST", false,{movieid: movieId, username: userName, isliked: isLiked });
        return fetch(URL + "/api/info/likeordislike", options)
            // .then(handleHttpErrors)
    }


    const login = (user, password) => {
        const options = makeOptions("POST", true,{username: user, password: password });
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {setToken(res.token) })
    }

    const fetchData = () => {
        const options = makeOptions("GET",true); //True add's the token

        if (getRoles() === "user"){
            return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
        } else if(getRoles() === "admin") {
            return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
        }

    }

    const makeOptions= (method,addToken,body) =>{
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }


    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        getRoles,
        getJokes,
        getName,
        getMovies,
        addMovieInteraction,
        getMyRooms,
        getMyMovies,
        createRoom,
        joinRoom,
        getUsersByRoomCode,
        getLikedMoviesByRoomCode,
        getRoomMovies
    }
}





const facade = apiFacade();
export default facade;
