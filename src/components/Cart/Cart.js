import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
   // const total= cart.reduce( (total, product) => total + product.price, 0);
   let total=0;
   for(let i=0; i<cart.length; i++) {
        const product = cart[i];
        total = total+product.price;
   }
   let shipping = 0;
   if(total>30){
        shipping = 0;
   }
   else if(total>10){
        shipping = 10;
    }
    else if(total>0){
        shipping =20;
    }
    const tax = total/10;
   // const tax = Math.round(total/10);
    //const finalTotal=Math.round(total+shipping + tax);
    const formatNumber = num =>{
        const numString = num.toFixed(2);
        return Number(numString);
    }
    
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {cart.length} </h4>
            <p><small>Total Product Price: ${total}</small></p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tax+Vat:${formatNumber(tax)}</small></p>
            <p><small>Total Price: ${formatNumber(total+shipping+tax)}</small></p>
        </div>
    );
};

export default Cart;