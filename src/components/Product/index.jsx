import React from 'react';
import { Grid, Typography, Button } from "@material-ui/core";
import './product.scss';
import { formatCurrency } from '../../utils/formatHelper';

const Product = ({ productId }) => {
    const product = {
        name: "Nome produto",
        image: "https://uploads.metropoles.com/wp-content/uploads/2020/06/29114618/Cadeira-gamer.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae ipsa, non voluptatum labore id corrupti, asperiores error molestias provident laudantium perferendis, odit harum. Debitis explicabo repudiandae expedita a obcaecati.",
        price: 1000,
        deliveryDays: 15
    }
    const handleAddItemToCart = e => {
        console.log(e);
        console.log('add item to cart');
    }
    return (
        <Grid container spacing={1} className="product">
            <Grid container item xs={12}>
                <div className="product__title">
                    <Typography variant="h4">
                        {product.name}
                    </Typography>
                </div>
            </Grid>
            <Grid container item md={6} xs={12}>
                <img src={product.image} alt={product.name} className="product__image" />
            </Grid>
            <Grid container item md={6} xs={12}>
                <div className="product__info">
                    <div className="product__price">
                        <Typography variant="h4">
                            {formatCurrency(product.price)}
                        </Typography>
                    </div>
                    <div className="product__delivery">
                        <Typography variant="span">
                            {`Entrega a partir de ${product.deliveryDays} dias úteis`}
                        </Typography>
                    </div>
                    <div className="product__description">
                        <Typography>
                            {product.description}
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