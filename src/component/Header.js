import React from "react";
import panier from '../img/panier.png';

export default function Header(props) {
    const {countCartItems} = props
    return (
        <header className="row space-between block center">
            <div>
                <a href="#/">
                    <h1>Burger Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    
                    <img src={panier} alt="panier" /> { ' '}
                    {countCartItems ? (
                        <button className="btn badge">{countCartItems}</button>
                    ) : ('')}
                    
                    </a> <a href="#/signin">SignIn</a>
            </div>
        </header>
    )
}