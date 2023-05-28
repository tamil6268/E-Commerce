import {Link} from 'react-router-dom'
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
export const Register = () => {
  const [data,setData]=useState([]);
  console.log("login response :",data)
  const navigate=useNavigate();
//   useEffect(()=>{
//     axios
//          .post("https://e-commerce-tamil.onrender.com/register")
//          .then((res)=>{
//             console.log(res)
//             setData(res);
//          })
//   },[data])
  const userData = {};
  const [state, setState] = useState("");
  const [state1, setState1] = useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const handleClick = () => {
    userData.name = state;
    console.log(userData);
    navigate('/user/login')
  };
  const handleCheck = (e) => {
    setState1(e.target.value);
  };
  const handleIn = () => {
    if (userData.name === state1) {
      alert("Successfully logged-in");
    } else {
      alert("Invalid Data");
      navigate('/user/register')
    }
  };
  return (
    <div id="user">
       <div id="pageLog">
      <h2  id="head">SignUp</h2>
      <form action="">
        EMAIL : <input type="email" id="username" name="Username" onChange={handleCheck} required/>
        <br />
        <br />
        PASSWORD :
        <input type="password" id="password" name="Password" required />
        <br />
        <br />
        <input type="submit" value="Register" id="cart1" onClick={handleIn} type="submit"/>
        <input type="reset" value="Reset" id="cart"/>
        <div>If Already Registerd ? <Link to="/user/login">login</Link></div>
      </form>
    </div>
    </div>
  );
};
export const Login = () => {
  return (
    <div id="user">
    <div id="pageLog">
      <h2 id="head">SignIn</h2>
      <form action="">
        EMAIL : <input type="email" id="username" name="Username" onChange={handleChange} required />
        <br />
        <br />
        PASSWORD :
        <input type="password" id="password" name="Password" required />
        <br />
        <br />
        <input type="submit" value="Login" id="cart1" onClick={handleClick}/>
        <input type="reset" value="Reset" id="cart"/>
        <div><Link to="/user/register">register</Link></div>
      </form>
    </div></div>
  );
};
const User=()=>{
  const [login,setLogin]=useState(true)
  useEffect(()=>{
     setLogin()
  },[])
  return(
    <div>
          {login?<Register/>
          :<Login/>}
    </div>
  )
}
export default User;
