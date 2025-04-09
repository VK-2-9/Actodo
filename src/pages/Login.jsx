import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [eusername, setEusername] = useState("");
  const [epassword, setEpassword] = useState("");
  const [ruser, setRuser] = useState(true);
  const users = props.users;
  const setUsers = props.setUsers;

  const navigate=useNavigate()

  const handleUInput = (e) => {
    setEusername(e.target.value);
  };

  const handlePInput = (e) => {
    setEpassword(e.target.value);
  };
  const checkUser = () => {
        var userfound = false;
            users.forEach((item) => {
            if (item.username === eusername && item.password === epassword) {
                setRuser(true);
                userfound = true;
                navigate("/landing",{state:{name:eusername}})
            }
            });

        if (userfound == false) {
        console.log("fail");
        setRuser(false);
        }
      console.log(users)  
    };

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi!</h1>
        {ruser ? (
          <p>I will help you manage activities after you login :)</p>
        ) : (
          <p className="text-red-600 font-medium">
            Please sign up your account
          </p>
        )}

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

          <button
            onClick={checkUser}
            className="bg-[#8272DA] w-24 p-1 rounded-md"
          >
            Login
          </button>

          <p>
            Want to create account?
            <Link to={"/signup"} className="underline">
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
