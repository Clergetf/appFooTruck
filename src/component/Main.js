import React from "react";
import Product from "./Product";

export default function Main(props) {
const {onAdd, menuItem} = props

    return <main className="block col-2">
        <h2>Products</h2>
        <div>
                <Product  menuItem={menuItem} onAdd={onAdd}></Product>
        </div>
    </main>
}