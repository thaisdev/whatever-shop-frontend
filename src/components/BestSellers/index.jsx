import React from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@material-ui/core';
import './bestSellers.scss';
import useAxios from 'axios-hooks';
import { useAppContext } from '../_context/GlobalContext';

const BestSellers = () => {
    const { cartData } = useAppContext();
    console.log('home', cartData);

    const [{ data, loading, error }] = useAxios('/products');

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error!</p>;
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