import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { formatCurrency } from '../../../utils/formatHelper';
import QuantityItemCart from '../../QuantityItemCart';
import './cartProducts.scss';

const CartProducts = ({ cartItems }) => {
    const imagesPath = `${window.location.origin}/images`;

    return (
        <>
            {cartItems?.map((item, index) => (
                <Grid container spacing={1} 
                    className="cart-item" key={`cart-item--${index}`}>
                    <Grid container item xs={3}>
                        <img src={`${imagesPath}/${item.image}`} alt={item.name} className="cart-item__image" />
                    </Grid>
                    <Grid container item xs={6}>
                        <Typography className="cart-item__name">
                            {item.name}
                        </Typography>
                        <Typography className="cart-item__description">
                            {item.description}
                        </Typography>
                    </Grid>
                    <Grid container item xs={3}>
                        <Grid container spacing={1}>
                            <Grid container item xs={12}>
                                <div className="cart-item__quantity">
                                    <QuantityItemCart product={item} />
                                </div>
                            </Grid>
                            <Grid container item xs={12} className="cart-item__price">
                                <Typography>
                                    {formatCurrency(item.totalPrice)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )) }
        </>
    )
}

export default CartProducts;