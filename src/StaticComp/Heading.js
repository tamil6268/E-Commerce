import './StyleSheet/Heading.css'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Heading=()=>{
    const {cartTotalQuantity}=useSelector(state=>state.cart)
    console.log("cart value",cartTotalQuantity)
    const navigate=useNavigate();
    const CartList=()=>{
        navigate('/cart')
    }
    return(
        <>
        <div id="body">
            <div><i class="fa-brands fa-apple fa-bounce fa-2xs" style={{color:"CaptionText",position:"relative",top:"10px",width:"50px",fontSize:"45px"}}></i></div>
            <div id="title" className="i">i 
            <b className="shop"> SHOP</b></div>
        </div>
            <div id="btn">
            <button style={{display:"flex",alignItems:"center",justifyContent:"center"}}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTKmyAs2TcnVnfF0qO4HPwBKVP6VorXa8nw&usqp=CAU"} width={30} height={30} alt="404_ERROR" /></button>
            <button style={{display:"flex",alignItems:"center",justifyContent:"center"}} onClick={CartList}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrFXxmNkpIPqUArp-tmDsjrXrmkShAntIRw&usqp=CAU"} width={30} height={30} alt="404_ERROR" /></button><span id="cartcount">{cartTotalQuantity}</span>
            </div>
        <marquee direction="right-left" id="marquee">
        <strong >
        i-Shop from 1000 Indian <span style={{color:'green'}}> online</span> stores with your Shopping Address. Hassle Free <span style={{color:"gold"}}>worldwide shipping</span> from<span style={{color:"Blue"}}>India at 80%</span> lower rates. <span style={{color:"red"}}>3-6 days delivery</span>.100% Assurance If you face any issue, your money is immediately refunded. Sit back shop on. Paytm Trust Your money is yours.<span style={{color:"Blue"}}>Companies often offer 24/7 support </span> through chatbots (like the Zendesk chat bot), a knowledge base,<span style={{color:'green'}}>live chat,<span style={{color:"black"}}> or </span> embedded messaging</span> .
        </strong>
        </marquee>
        </>
    )
}
export default Heading;