import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Typography } from '@material-ui/core';
import './bestSellers.scss';
import useAxios from 'axios-hooks';

const BestSellers = () => {
    const [{ data, loading }] = useAxios('/products');

    if (loading) {
        return <Typography>Carregando...</Typography>;
    }

    return (
        <Grid container spacing={3} className="best-sellers">
            {data?.map((product, index) => (
                <Grid container item lg={3} md={4} xs={12} key={`product-card--${index}`} className="best-sellers__item">
                    <ProductCard product={product} />
                </Grid>
            )) }
        </Grid>
    )
}

export default BestSellers;