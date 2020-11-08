import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useAppContext } from '../_context/GlobalContext';
import CartProducts from './CartProducts';
import CartResume from './CartResume';
import './cart.scss';

const Cart = () => {
    const { cartData } = useAppContext();
    const total = cartData?.reduce((acc, item) => acc + item.totalPrice, 0) || 0;
    const deliveryDays = cartData?.reduce((acc, item) => 
        acc > item.deliveryDays ? acc : item.deliveryDays, 0
    ) || 0;

    return (
        <Grid container spacing={1} className="cart">
            <Grid container item xs={12}>
                <Typography variant="h4">
                    Meu carrinho
                </Typography>
            </Grid>
            {
                cartData?.length > 0 ?
                <>
                    <Grid container item xs={9}>
                        <CartProducts cartItems={cartData} />
                    </Grid>
                    <Grid container item xs={3} className="cart__resume">
                        <CartResume total={total} deliveryDays={deliveryDays} />
                    </Grid>
                </> :
                <Grid container item xs={12}>
                    <div className="cart__empty">
                        <Typography align="center" className="cart__empty-message">
                            Você não possui produtos no carrinho
                        </Typography>
                    </div>
                </Grid>
            }
        </Grid>
    )
}

export default Cart;