import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { formatCurrency } from '../../../utils/formatHelper';
import './cartProducts.scss';

const CartProducts = ({ products }) => {
    return (
        <>
            {products?.map((item, index) => (
                <Grid container spacing={1} 
                    className="cart-item" key={`cart-item--${index}`}>
                    <Grid container item xs={3}>
                        <img src={item.image} alt={item.name} className="cart-item__image" />
                    </Grid>
                    <Grid container item xs={6}>
                        <Typography className="cart-item__name">
                            {item.name}
                        </Typography>
                        <Typography className="cart-item__description">
                            {item.description}
                        </Typography>
                    </Grid>
                    <Grid container item xs={3} className="cart-item__price">
                        <Typography>
                            {formatCurrency(item.price)}
                        </Typography>
                    </Grid>
                </Grid>
            )) }
        </>
    )
}

export default CartProducts;