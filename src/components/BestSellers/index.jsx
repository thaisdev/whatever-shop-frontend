import React from 'react';
import ProductCard from '../ProductCard';
import products from './data.json';
import { Grid } from '@material-ui/core';

const BestSellers = () => {
    return (
        <Grid container spacing={3}>
            {
                products?.map((product, index) => (
                    <Grid container item md={3} xs={12}>
                        <ProductCard product={product} key={`product-card--${index}`} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default BestSellers;