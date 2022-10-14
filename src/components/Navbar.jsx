import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/pizza.png'
import Cart from '../assets/images/shoppingcart.png'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
    const {cartItem} = useContext(CartContext)
  return (
    <>
        <nav className='navbar'>
            <Link to={'/'} className='link'>
            <div className='navbar_container'>
                <div className='navbar_logo'>
                    <img src={ Logo } alt="Pizza icon" width={'20px'} />
                </div>
                <h3>Pizzeria Mamma Mia!</h3>
            </div>
            </Link>
            <div className='navbar_cart'>
                <Link to={'/carrito'} className='link'>
                <div className='navbar_cart_logo'>
                    <img src={Cart} alt="Shopping_cart_icon" width={'25px'} />
                </div>
                </Link>
                <span>${cartItem.reduce((previousValue, currentValue) => previousValue + currentValue.amount * currentValue.price , 0)}</span>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar