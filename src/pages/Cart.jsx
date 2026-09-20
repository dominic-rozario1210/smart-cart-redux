import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/CartSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      {
        cartItems.length === 0 ? (
          <p style={{fontSize:"24px"}}>Your Cart is Empty</p>
        ) :
          <>
            {
              cartItems.map((item) => (
                <div key={item.id} className="cart">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                  <h3>{item.title}</h3>
                  <div className="cart-price">
                    <p>
                      ₹{item.price * item.quantity}
                    </p>
                    <div className="cart-button">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>
                        +
                      </button>

                    </div>
                  </div>




                </div>

              ))
            }

            <h2>Cart Total: ₹{cartTotal}</h2>

          </>

      }

    </div>
  );
};

export default Cart;