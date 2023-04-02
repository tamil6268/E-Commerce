import "../App.css";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart,decreaseQuantity,AddingtoCart,clearCart, getTotals } from "../Redux/Slice";
import {useEffect} from 'react';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getTotals())
  },[cart,dispatch])
  const removeItem=(item)=>{
    dispatch(removeFromCart(item))
  }
  const decreaseItem=(item)=>{
    dispatch(decreaseQuantity(item))
  }
  const increaseItem=(item)=>{
    dispatch(AddingtoCart(item))
  }
  const clearAllItems=(item)=>{
    dispatch(clearCart(item))
  }
  return (
    <div id="cartItems">
      <h2 id="Shopheading">CART-DETAILS</h2>
      {cart.products.length === 0 ? (
        <div id="cartContainer">
          <code id="Cartlist">Cart is Currently Empty</code>
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzibBVD9w_go7Ofo5BK44_ufJf_y7qQAoPKg&usqp=CAU"} alt="404_ERROR"/>
          <div id="reboot">
            <Link to="/store" id="linkStore">
              <span >Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div >
         <hr/>
            <div id="cartbox">
              <div id="sn"><h3>S.NO</h3></div>
              <div><h3>PRODUCT</h3></div>
              <div><h3>PRICE</h3></div>
              <div><h3>QUANTITY</h3></div>
              <div><h3>TOTAL</h3></div>
            </div>
            <hr/>
            <div >
              {cart.products?.map((item,index) => (
                <div key={item.id} id="cartbox2">
                  <div id="sn">{index+1}</div>
                  <div id="productdetails">
                    <img src={item.url} width={180} height={180} alt="404_ERROR" />
                    <div>
                      <h4>{item.Name}</h4>
                      <div>{item.Catagory}</div>
                      <div>{item.Rating}</div>
                      <button id="remove" onClick={()=>removeItem(item)}>Remove</button>
                    </div>
                  </div>
                  <div>
                    <div className="amount1">$ {item.New_Price}</div>
                  </div>
                  <div id="cartQuantity">
                      <div><button className="nutton" onClick={()=>decreaseItem(item)}>-</button></div>
                      <div className="amount">{item.productQuantity}</div>
                      <div><button className="nutton1"  onClick={()=>increaseItem(item)}>+</button></div>
                  </div>

                  <div className="amount2">
                    ${item.New_Price*item.productQuantity}
                  </div>
                </div>
              ))}
            </div>
            <hr/>
            <h4 className="amountTotal">Total Amount : <h2><span>$</span>{cart.cartTotalAmount}</h2></h4>
            <div id="btnthree">
                <button onClick={()=>clearAllItems()}>Clear Cart</button>
                <button>Continue Shopping</button>
                <button>Proceed to Payment</button>
            </div>
          </div>

        </>
      )}
    </div>
  );
};
export default Cart;
