import React, {useState} from 'react';
import {GiCartwheel} from 'react-icons/gi'
import './cart-block.css'
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../utils";
import {CartMenu} from "../cart-menu";
import {ItemsInCart} from "../items-in-cart";


export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            <GiCartwheel size={26} className="cart-block__icon"
                         onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? (<span className="cart-block__total-price">{totalPrice} грн.</span>) : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={() => null}/>}
        </div>
    );
};


