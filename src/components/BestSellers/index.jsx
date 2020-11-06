import React from 'react';
import ProductCard from '../ProductCard';
import products from './data.json';
import { Grid } from '@material-ui/core';
import './bestSellers.scss';

const BestSellers = () => {
    return (
        <Grid container spacing={3} className="best-sellers">
            {
                products?.map((product, index) => (
                    <Grid container item lg={3} md={4} xs={12} key={`product-card--${index}`} className="best-sellers__item">
                        <ProductCard product={product} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default BestSellers;