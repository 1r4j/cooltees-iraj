import React, { useEffect, useState } from 'react';
import Item from '../components/Common/Item';
import { fetchCarts } from '../reducks/carts/operations';
import { fetchItems } from '../reducks/items/operations';
import { getCarts } from '../reducks/carts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../reducks/users/selectors';
import { getItems } from '../reducks/items/selectors';
import Navbar from '../components/Common/Navbar';

const Cart = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const user = getUsers(selector);
    const items = getItems(selector);

    useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchCarts());
        console.log(carts);
    }, []);

    return (
        <>
            <Navbar />


            <div class="cart-container">
                <h1 id="shop">Shopping List</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Product</td>
                            <td>Size</td>
                            <td>Amount</td>
                            <td>Price</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                (carts,
                                    items &&
                                    carts.map(cart => (
                                        <li>
                                            <Item
                                                cart={cart.item}
                                                cartId={cart.id}
                                                key={cart.item.id}
                                                quantity={cart.quantity}
                                            />
                                        </li>
                                    )))
                            }

                        </tr>
                    </tbody>
                </table>

                <div class="btm-cart">
                    <div class="total">
                        <p>Total Cost</p>
                        <h1>$229</h1>
                    </div>
                    <div class="btns">
                        <button class="continue">Continue Shopping</button>
                        <button class="next">Next Step</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Cart;
