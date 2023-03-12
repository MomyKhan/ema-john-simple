import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const { img, name, seller, price, stock } = props.product;
   
    return (
        <div className='product'>
            <div className='pro-img'>
                <img src={img} alt="" />
            </div>
            <div className='pro-name'>
                <h3>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock-order soon</p>
                <button onClick={ ()=>props.handleProduct(props.product)}><FontAwesomeIcon icon={faCartShopping}/> add to cart</button>
            </div>
        </div>

    );
};

export default Product;