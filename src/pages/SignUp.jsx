import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp(props) {

    const users=props.users
    const setUsers=props.setUsers
    const [eusername,setEusername]=useState("")
    const[epassword,setEpassword]=useState("")


    const navigate=useNavigate()


        const handleUInput=(e)=>{
            setEusername(e.target.value)
        }
    
        const handlePInput=(e)=>{
            setEpassword(e.target.value)
        }  
        
     const addUser=()=>{
        setUsers([...users,{username:eusername,password:epassword}])
        console.log(users)
        navigate("/")
     }   


  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi!</h1>
        <p>Sign Up here :)</p>

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent w-52 border border-black rounded-md p-1"
            value={eusername}
            onChange={handleUInput}
          ></input>

          <input
            type="text"
            placeholder="Password"
            className="bg-transparent w-52 border border-black rounded-md p-1"
            value={epassword}
            onChange={handlePInput}
          ></input>

         

           <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button> 

           <p>Already account exists?<Link to={"/"} className="underline"> Login</Link> </p>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
