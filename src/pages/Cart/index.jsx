import React from 'react';
import Cart from '../../components/Cart';
import DefaultPage from '../../components/_hoc/DefaultPage';

const CartPage = () => {
    return <Cart />
}

export default DefaultPage(CartPage);