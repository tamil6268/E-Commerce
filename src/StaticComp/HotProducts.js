import "./StyleSheet/HotProducts.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux';
import {AddingtoCart} from '../Redux/Slice';
import {useNavigate} from 'react-router-dom';

const HotProducts = () => {
  const [data, setData] = useState([]); //to store the product data
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch();
    const navigate=useNavigate();


  useEffect(()=>{
    setLoading(true);
    const getData=async()=>{
      await axios
      .get("https://e-commerce-tamil.onrender.com/Product")
      .then((resolve) => {
        console.log(resolve.data);
        setData(resolve.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    getData()
  },[data])
    
  const Loading = () => {
    return (
      <div id="containerLoad">
        <div id="loading"></div>
        <b id="loadText">Loading.....</b>
      </div>
    );
  };

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
        {loading ? (
          <Loading />
        ) : (
          data
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
                  <div id="starRating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <code>{item.Reviews}</code>
                  <br />
                  <strong id="price">
                    ${item.New_Price} /-
                    <b id="oprice"> ${item.Old_Price}</b>
                  </strong>
                  <br />
                  <button id="cart1" onClick={()=>AddtoCart(item)}>Add to Cart</button>
                  <button id="cart" onClick={()=>handleBuy(item)}>
                      Buy Now
                  </button>
                </div>
              );
            })
        )}
      </div>
      {loading?<div></div>:<div id="load">Load More</div>}
    </>
  );
};
export default HotProducts;
