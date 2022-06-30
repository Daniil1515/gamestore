import React from 'react';
import {calcTotalPrice} from "../utils";
import {Button} from "../button";
import './cart-menu.css'
import {CartItem} from "../cart-item";
import {useSelector} from "react-redux";


export const CartMenu = ({onClick}) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    return (
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                {items.length > 0 ? items.map((game) => (<CartItem key={game.title} image={game.image}
                                                                     price={game.price} title={game.title}
                                                                     id={game.id}/> )) : 'Корзина пуста'}
            </div>
            {
                items.length > 0 ?
                    <div className="cart-menu__arrange">
                        <div className="cart-menu__total-price">
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} грн.</span>
                        </div>
                        <Button type="primary" size="m" onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div>
                    : null
            }
        </div>
    );
};

