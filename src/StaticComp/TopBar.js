import "./StyleSheet/TopBar.css";
import {useState} from 'react';

const TopBar = () => {
  let time=new Date().toLocaleTimeString();
  const [currentTime,setCurrentTime]=useState(time)
  
  const update=()=>{
    let time=new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(update,1000);

  return (
    <div id="TopBar">
      <div id="left">
        <div id="left-in">
          <select>
            <option>EN</option>
            <option>ER</option>
            <option>TM</option>
            <option>JN</option>
            <option>US</option>
            <option>EU</option>
            <option>KR</option>
            <option>NP</option>
          </select>
          <select>
            <option>$</option>
            <option>€</option>
            <option>£</option>
            <option>¥</option>
            <option>₹</option>
            <option>د. ك</option>
            <option>₣</option>
          </select>
        </div>
      </div>

      <div id="right">
        <div id="right-in">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNubk28tIFP9TvWwSzfs3Ke14tj9entdh-A&usqp=CAU"
            width={30}
            height={30}
            alt="--Icon--"
          />
          <span>SignUp</span>/<span>Login</span>
        </div>
        <div id="right-in">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyewDFUD3bhODb1YY7ibSaJvrQblEhaDuRbPxEZKWST-D-lCTY5mNfXeCloMURx4TL9yQ&usqp=CAU"
            width={35}
            height={35}
            alt="--Icon--"
          />
          Items
        </div>
        <div>
          <strong>
            $<b>99.90</b>
          </strong>
        </div>
        <div id="right-in">
          <a href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuRVmjB1S3lXejNgzjvGKu_isv4hDG4ns9A&usqp=CAU"
              width={35}
              height={25}
              alt="__icon__"
            />
          </a>
          <input type="text" />
        </div>
      </div>
      <div id='time'>
        <div>Time : {currentTime}</div>
      </div>
    </div>
  );
};
export default TopBar;
