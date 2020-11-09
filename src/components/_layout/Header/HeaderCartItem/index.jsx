import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { formatCurrency } from '../../../../utils/formatHelper';
import './headerCartItem.scss';

const HeaderCartItem = ({ item }) => {
    const imageUrl = `${window.location.origin}/images/${item.image}`;
    return (
        <Grid container spacing={1} className="header-cart-item">
            <Grid container item xs={3} justify="center">
                <img src={imageUrl} alt={item.name} className="header-cart-item__image"/>
            </Grid>
            <Grid container item xs={6}>
                <Typography className="header-cart-item__name">
                    {item.name}
                </Typography>
                <Typography className="header-cart-item__quantity">
                    {`Quantidade: ${item.quantity}`}
                </Typography>
            </Grid>
            <Grid container item xs={3} justify="center">
                <Typography className="header-cart-item__price">
                    {formatCurrency(item.totalPrice)}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default HeaderCartItem;