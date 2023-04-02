import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react';
import axios from 'axios';
export const Register = () => {
  const [data,setData]=useState([]);
  console.log("login response :",data)
  useEffect(()=>{
    axios
         .post("http://localhost:8089/register")
         .then((res)=>{
            console.log(res)
            setData(res);
         })
  },[data])
  return (
    <div id="pageLog">
      <h2  id="head">SignUp</h2>
      <form action="http://localhost:8089/register" method="post">
        USERNAME : <input type="text" id="username" name="Username" required />
        <br />
        <br />
        PASSWORD :
        <input type="password" id="password" name="Password" required />
        <br />
        <br />
        <input type="submit" value="Register" id="cart1" />
        <input type="reset" value="Reset" id="cart"/>
        <div>If Already Registerd ? <Link>login</Link></div>
      </form>
    </div>
  );
};
export const Login = () => {
  return (
    <div id="pageLog">
      <h2 id="head">SignIn</h2>
      <form action="http://localhost:8089/login" method="post">
        USERNAME : <input type="text" id="username" name="Username" required />
        <br />
        <br />
        PASSWORD :
        <input type="password" id="password" name="Password" required />
        <br />
        <br />
        <input type="submit" value="Login" id="cart1"/>
        <input type="reset" value="Reset" id="cart"/>
        <div><Link>register</Link> | <Link>forget password</Link></div>
      </form>
    </div>
  );
};
const User=()=>{
  return(
    <div id="user">
          <Register/>
          <Login/>
    </div>
  )
}
export default User;
