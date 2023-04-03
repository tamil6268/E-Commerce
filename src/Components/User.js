import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react';
import axios from 'axios';
export const Register = () => {
  const [data,setData]=useState([]);
  console.log("login response :",data)
  useEffect(()=>{
    axios
         .post("https://e-commerce-tamil.onrender.com/register")
         .then((res)=>{
            console.log(res)
            setData(res);
         })
  },[data])
  return (
    <div id="user">
       <div id="pageLog">
      <h2  id="head">SignUp</h2>
      <form action="https://e-commerce-tamil.onrender.com/register" method="post">
        EMAIL : <input type="email" id="username" name="Username" required />
        <br />
        <br />
        PASSWORD :
        <input type="password" id="password" name="Password" required />
        <br />
        <br />
        <input type="submit" value="Register" id="cart1" />
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
      <form action="https://e-commerce-tamil.onrender.com/login" method="post">
        EMAIL : <input type="email" id="username" name="Username" required />
        <br />
        <br />
        PASSWORD :
        <input type="password" id="password" name="Password" required />
        <br />
        <br />
        <input type="submit" value="Login" id="cart1"/>
        <input type="reset" value="Reset" id="cart"/>
        <div><Link to="/user/register">register</Link> | <Link>forget password</Link></div>
      </form>
    </div></div>
  );
};
const User=()=>{
  const [login,setLogin]=useState(true)
  return(
    <div>
          {login?<Register/>
          :<Login/>}
          {setLogin()}
    </div>
  )
}
export default User;
