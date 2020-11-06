import React from 'react';
import DefaultPage from '../../components/_layout/DefaultPage';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product';

const ProductPage = () => {
    const { id } = useParams();
    return (
        <DefaultPage>
            <Product productId={id} />
        </DefaultPage>
    )
}

export default ProductPage;