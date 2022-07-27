import Classroom from "./Classroom";
import Faculty from "./Faculty";
import { Route, BrowserRouter, Routes } from "react-router-dom";


export default function App() {
    return ( <BrowserRouter>
        <Routes>
        <Route path = "Classroom/" element = { <Classroom/> }/> 
        <Route path = "Faculty/" element = { <Faculty/> }/> 

        </Routes> 
        </BrowserRouter>

    );
}