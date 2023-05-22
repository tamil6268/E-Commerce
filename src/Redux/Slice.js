import {createSlice} from "@reduxjs/toolkit";

const initialState={
    products:localStorage.getItem("Added Items")?JSON.parse(localStorage.getItem("Added Items")):[],
    cartTotalQuantity:0,
    cartTotalAmount:0
}

const Slice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        AddingtoCart:(state,action)=>{
            const productIndex=state.products.findIndex((item)=>item.id===action.payload.id);
            if(productIndex>=0){
                state.products[productIndex].productQuantity+=1;
            }else{
                const temproryProduct={...action.payload,productQuantity:1}
                state.products.push(temproryProduct)
            }
           localStorage.setItem("Added Items",JSON.stringify(state.products))//on top  we are using array so we using here json
        },
        removeFromCart:(state,action)=>{
            const nextCartItem=state.products.filter(
                product=>product.id!==action.payload.id
            )
            state.products=nextCartItem;
            localStorage.setItem("Added Items",JSON.stringify(state.products))
        },
        decreaseQuantity:(state,action)=>{
            const itemIndex=state.products.findIndex(
                (item)=>item.id===action.payload.id
            );

            if(state.products[itemIndex].productQuantity>1){
                state.products[itemIndex].productQuantity-=1
            }
            else if(state.products[itemIndex].productQuantity===1){
                const nextCartItem=state.products.filter(
                    (product)=>product.id !== action.payload.id
                )
                state.products=nextCartItem;
            }
            localStorage.setItem("Added Items",JSON.stringify(state.products))
        },
        clearCart:(state,action)=>{
            state.products=[];
            localStorage.setItem("Added Items",JSON.stringify(state.products))
        },
        getTotals:(state,action)=>{
            let {total,quantity}=state.products.reduce((totalValue,eachValue)=>{
                const { New_Price,productQuantity}=eachValue
                const totalItem=New_Price*productQuantity;

                totalValue.total+=totalItem;
                totalValue.quantity+=productQuantity;
                return totalValue;
            },                         
            {
              total:0,
              quantity:0
            });
            state.cartTotalQuantity=quantity;
            state.cartTotalAmount=total;
        }
    }
})

export const {AddingtoCart,removeFromCart,decreaseQuantity,clearCart,getTotals}=Slice.actions;
export default Slice.reducer;