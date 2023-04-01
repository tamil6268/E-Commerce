import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from '../StaticComp/Loader';
import {useDispatch} from 'react-redux';
import {AddingtoCart} from '../Redux/Slice';
import {useNavigate} from 'react-router-dom';

export const Rating = () => {
  return (
    <div>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
  );
};
export const Ratings = () => {
  return (
    <div>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
    </div>
  );
};

const Ipad = () => {
  const [product, setProduct] = useState([]);
   const [loading,setLoading]=useState(true);
   const dispatch=useDispatch();
   const navigate=useNavigate();

  useEffect(() => {
    setLoading(true)
    axios
      .get("http://localhost:8089/Product")
      .then((resolve) => {
        console.log(resolve.data);
        setProduct(resolve.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const AddtoCart=(item)=>{
    console.log("Passing to the Slice by Action Creator",item)
     dispatch(AddingtoCart(item))
  }
  const handleBuy=(item)=>{
    navigate(`/product/${item.id}`, { state: { item } })
  }
 
 
  return (
    <>
      <div id="section">
        {loading?<Loading/>:product
          .filter((x) => x.Catagory === "ipad")
          .map((item, index) => {
            return (
              <div id="child" key={item.id}>
                <div id="hot">{item.trend}</div>
                  <img
                    src={item.url}
                    alt="404_ERROR"
                    width={160}
                    height={150}
                    id="productImg"
                  />
                  <div style={{ overflow: "hidden" }}>
                    <strong>{item.Name}</strong>
                  </div>
                <div>
                  {item.Rating > 4.5 ? <Rating/> : <Ratings/>}
                </div>
                <br />
                <strong id="price">
                  ${item.New_Price} /-
                  <b id="oprice"> ${item.Old_Price}</b>
                </strong>
                <br />
                <button id="cart1" onClick={()=>AddtoCart(item)}>
                  Add to Cart
                </button>
                <button id="cart" onClick={()=>handleBuy(item)}>
                    Buy Now
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Ipad;
