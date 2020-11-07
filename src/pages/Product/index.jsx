import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product';
import DefaultPage from '../../components/_hoc/DefaultPage';

const ProductPage = () => {
    const { id } = useParams();
    return <Product productId={id} />
}

export default DefaultPage(ProductPage);