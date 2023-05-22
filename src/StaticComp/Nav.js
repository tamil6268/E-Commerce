import './StyleSheet/Nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
    <div id="NavBar">
        <Link to="/store" id="Link" >Store</Link>
        <Link to="/ipad" id="Link" className="Link">Ipad</Link>
        <Link to="/iPhone" id="Link" className="Link">iPhone</Link>
        <Link to="/macbook" id="Link"  className="Link">MacBook</Link>
        <Link to="/accessories" id="Link">Accessories</Link>
    </div>
  );
};
export default Nav;
