import React from 'react';
import Modal from './Modal';
import useModal from './useModal';



 
export default function Product(props) {
    const {onAdd, menuItem} = props
    const {isShowing, toggle} = useModal();

    return (
            <div className="row space-between">
                    {
                        menuItem.map((product) => {       
                        return <div key={product.name}className="product">
                            <Modal product={product} isShowing={isShowing} hide={toggle}/>
                            <button  onClick={toggle} > Description</button>
                            <img className="small" src={product.image} alt={product.name}></img>
                            <h3>{product.name}</h3>
                            <div>€{product.price}</div>
                            <div>
                                <button className="btn btn-product" onClick={() => onAdd(product)}>Add To Cart</button>
                            </div>
                        </div> 
                        })
                    }
                    
            </div>
    )
}
