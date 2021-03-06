import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Welcome from "./routes/welcome";
import UserPage from "./routes/userPage";
import AdminPage from "./routes/adminPage";
import ApiFacade from "./apiFacade";
import Jokes from "./routes/jokes";
import Rooms from "./routes/Rooms";
import LikedMovies from "./routes/LikedMovies";



const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/userpage" element={<UserPage/>}/>
                <Route path="/adminpage" element={<AdminPage/>}/>
                <Route path="/jokes" element={<Jokes/>}/>
                <Route path="/roomspage" element={<Rooms/>}/>
                <Route path="/likedmovies" element={<LikedMovies/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);