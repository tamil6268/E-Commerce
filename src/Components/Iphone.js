import { useState, useEffect } from "react";
import axios from "axios";
import Loading from '../StaticComp/Loader';
import {useDispatch} from 'react-redux';
import {AddingtoCart} from '../Redux/Slice';
import {useNavigate} from 'react-router-dom';

const Iphone = () => {
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
  return(
    <>
      <div id="section">
        {loading?<Loading/>:product.filter((x)=>x.Catagory==="iPhone").map((item, index) => {
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
              <div style={{overflow:"hidden"}}>
                <strong>{item.Name}</strong>
              </div>
              <div>StarRating : <b>{item.Rating}</b>/5</div>
              <br />
              <strong id="price">
                ${item.New_Price} /-   
                <b id="oprice">   ${item.Old_Price}</b>
              </strong>
              <br />
              <button id="cart1" onClick={()=>AddtoCart(item)}>Add to Cart</button>
              <button id="cart" onClick={()=>handleBuy(item)}>Buy Now</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Iphone;
