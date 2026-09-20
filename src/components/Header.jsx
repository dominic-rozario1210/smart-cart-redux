import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const location = useLocation();
    const navigate = useNavigate();

    const isCartPage = location.pathname === "/cart";

    return (
        <header className='header-container'>

            <h2>Smart Cart</h2>

            <nav>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div
                className='cart-btn'
                onClick={() => {
                    if (isCartPage) {
                        navigate(-1);
                    } else {
                        navigate("/cart");
                    }
                }}
            >
                {isCartPage
                    ? "← Previous"
                    : `🛒 Cart (${cartCount})`
                }
            </div>

        </header>
    )
}

export default Header