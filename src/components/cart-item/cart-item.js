import React from 'react';
import './cart-item.css'
import {Button} from "../button";
import {deleteItemFromCart} from "../../redux/cart/reducer";
import {useDispatch} from "react-redux";

export const CartItem = ({
                             title,
                             price,
                             id
                         }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(id));
    }

    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} грн.</span>
            </div>
            <Button type = "delete"
                onClick={handleClick}
            >
                Х
            </Button>
        </div>
    );
};


