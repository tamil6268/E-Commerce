import '../App.css';
import React, { useState} from "react";
import Loading from '../StaticComp/Loader'
import { useParams,useLocation } from "react-router-dom";
import {Ratings} from '../StaticComp/StarRating';
import {useDispatch} from 'react-redux';
import {AddingtoCart} from '../Redux/Slice';
import {useNavigate} from 'react-router-dom';
const Products = () => {
   const [loading,setLoading]=useState(false)
   const params=useParams();
   console.log("useParams :",params)
   const location=useLocation()
   console.log("useLocation :",location)
   const data=location.state.item;
   console.log(data)
   const dispatch=useDispatch();
   const navigate=useNavigate();

   const ShowDetailedProduct=()=>{
    setLoading(false)
    const AddtoCart=(item)=>{
      console.log("Passing to the Slice by Action Creator",item)
       dispatch(AddingtoCart(item))
    }
    const handleBuy=(item)=>{
      navigate(`/Orders/${item.id}`, { state: { item } })
    }
    return(
      <div id="prodectDetails">
        <div >
          <img src={data.url} id="DetailsProduct" width={450} height={450} alt="404-ERROR"/>
        </div>
        <div >
            <h2 id="Name">{data.Name}</h2>
            <p>{data.Catagory}</p>
            <div id="Rating"><span>Rating - {<Ratings/>} </span></div>
            <h3 id="OfferPrice"><span style={{color:"red"}}>Offer Price </span>$ {data.New_Price} /-</h3>
            <h3 id="oprice"><span style={{color:"green"}}>Raw Price </span> $ {data.New_Price} /-</h3>
            <div>
            <button id="cart1" onClick={()=>AddtoCart(data)} >Add To Cart</button>
            <button id="cart" onClick={()=>handleBuy(data)}>Buy Now</button>
            </div>
        </div>
      </div>
    )
   }

   
  return (
    <div id="section">
           {loading ? <Loading/> : <ShowDetailedProduct/>}

           <br/>
          <div>
          <button id="cart1" onClick={()=>navigate(-1)} style={{fontSize:"27px"}}>Back</button>
          </div>
    </div>
  );
};

export default Products;
