import Navbar from "./components/Navbar";
import Dashboard from "./components/dashboard";
import Staff from "./components/staff";
import Signin from "./components/signin";
import Login from "./components/login";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import {useState} from "react";
import Asideblock from "./components/asideblock.jsx";
export default function App(){
  const [isopen , setisopen]=useState(false);

  return (
    <>
       <BrowserRouter>

        <Navbar />
       <Routes>
        <Route path="/" element={ <Dashboard />} /> 
         <Route path="/staff" element={ <Staff />} />
         <Route path="/signin" element={<Signin />} />
         <Route path="/login" element={<Login />} />
       </Routes>
       </BrowserRouter>
    </>
  )
}


//aside block need to toggle by using navbar instructions 