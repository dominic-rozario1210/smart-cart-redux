import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/CartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );
  
  const isInCart = cartItems.some(
    (item) => item.id === product.id
  );
  

  return (
    <div className='product-card'>
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      {
        isInCart ? (
          <button style={{backgroundColor:"red"}}
                 onClick={() => dispatch(removeFromCart(product.id)) 
          }>
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart</button>
        )
      }

    </div>
  )
}

export default ProductCard
