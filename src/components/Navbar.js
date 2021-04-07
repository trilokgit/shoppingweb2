import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Navbar = ({ click }) => {
    
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

    return (
        <nav className="navbar">
            <div className="nav_logo">
                <h2>Mern Shopping Cart</h2>
            </div>
            <ul className="navbar_link">
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                        </span>
                        
                        <span className="cartlogo_badge">{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                       Shop
                    </Link>
                </li>
            </ul>


            <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Navbar
