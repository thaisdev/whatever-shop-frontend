import React from 'react';
import { Grid, Typography, Button } from "@material-ui/core";
import './product.scss';
import { formatCurrency } from '../../utils/formatHelper';
import useAxios from 'axios-hooks';
import { useAppContext } from '../_context/GlobalContext';

const Product = ({ productId }) => {
    const { cartData } = useAppContext();
    console.log('product', cartData);

    const [{ data, loading, error }] = useAxios(
        `products/${productId}`
    );

    const imagesPath = `${window.location.origin}/images`;

    const handleAddItemToCart = e => {
        console.log(e);
        console.log('add item to cart');
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error!</p>;
    }

    if (!data && !loading) {
        return <p>Ops!</p>;
    }

    return (
        <Grid container spacing={1} className="product">
            <Grid container item xs={12}>
                <div className="product__title">
                    <Typography variant="h4">
                        {data.name}
                    </Typography>
                </div>
            </Grid>
            <Grid container item md={6} xs={12} className="product__image">
                <img src={`${imagesPath}/${data.image}`} alt={data.name} />
            </Grid>
            <Grid container item md={6} xs={12}>
                <div className="product__info">
                    <div className="product__price">
                        <Typography variant="h4">
                            {formatCurrency(data.price)}
                        </Typography>
                    </div>
                    <div className="product__delivery">
                        <Typography>
                            {`Entrega a partir de ${data.deliveryDays} dias úteis`}
                        </Typography>
                    </div>
                    <div className="product__description">
                        <Typography>
                            {data.description}
                        </Typography>
                    </div>
                    <Button variant="contained" color="primary" 
                        disableElevation onClick={handleAddItemToCart}>
                        Adicionar ao carrinho
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Product;