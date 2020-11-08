import React from 'react';
import { Grid, Typography, Button } from "@material-ui/core";
import './product.scss';
import { formatCurrency } from '../../utils/formatHelper';
import useAxios from 'axios-hooks';
import { useAppContext } from '../_context/GlobalContext';
import QuantityItemCart from '../QuantityItemCart';

const Product = ({ productId }) => {
    const imagesPath = `${window.location.origin}/images`;
    const { cartData, addToCart } = useAppContext();
    const [{ data, loading, error }] = useAxios(
        `products/${productId}`
    );

    const cartHasItem = cartData?.find(item => item.id == productId) || false;

    if (loading) {
        return (
            <Grid container spacing={1}>
                <Grid container item xs={12}>
                    <div className="product__message">
                        <Typography align="center">Carregando...</Typography>  
                    </div>
                </Grid>
            </Grid>
        );
    }

    if (!data) {
        return (
            <Grid container spacing={1}>
                <Grid container item xs={12}>
                    <div className="product__message">
                        <Typography align="center">
                            {`Não foi encontrado um produto com o ID ${productId}`}
                        </Typography>  
                    </div>
                </Grid>
            </Grid>
        );
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
                    {
                        cartHasItem ?
                        <QuantityItemCart product={cartHasItem} />
                        :
                        <Button variant="contained" color="primary" 
                            disableElevation onClick={() => addToCart(data)}>
                            Adicionar ao carrinho
                        </Button>
                    }
                </div>
            </Grid>
        </Grid>
    )
}

export default Product;