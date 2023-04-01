import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Store from "../Components/Store";
import Ipad from "../Components/Ipad";
import Iphone from "../Components/Iphone";
import MacBook from "../Components/MacBook";
import Accessories from "../Components/Accessories";
// import Signup from '../Components/SignUp';
// import Signin from '../Components/SignIn';
import Error from "../Components/Error";
import Heading from "../StaticComp/Heading";
import Nav from "../StaticComp/Nav";
import FRS from "../StaticComp/FRS";
import Footer from "../StaticComp/Footer";
import SubTitle from "../StaticComp/SubTitle";
import SubNav from "../StaticComp/SubNav";
import HotProducts from "../StaticComp/HotProducts";
import Ads from "../StaticComp/Ads";
import Products from "../Components/Products";
import Cart from "../Components/Cart";

import { useSelector,useDispatch } from "react-redux";
import {  getTotals } from "../Redux/Slice";
import {useEffect} from 'react';
const Routing = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getTotals())
  },[cart])
  return (
    <div id="body1">
      <BrowserRouter>
        <div id="sticky">
          {/* <TopBar /> */}
          <Heading />
          <Nav />
        </div>
        <div id="non-sticky">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iPhone" element={<Iphone />} />
          <Route path="/macbook" element={<MacBook />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
          <SubTitle title="BEST SELLER" />
          <SubNav />
          <HotProducts />
          <Ads />
          <FRS />
          <br />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default Routing;