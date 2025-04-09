import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){

  const[users,setUsers]=useState(
    [
        {
            username:"vk",
            password:"123"
        },
       
      
    ]
)

  return(
    <div>
  <BrowserRouter>

  <Routes>
      <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
      <Route path='/signup' element={<SignUp users={users} setUsers={setUsers}/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App;
