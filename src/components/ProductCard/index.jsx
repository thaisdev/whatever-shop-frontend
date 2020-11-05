import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import './productCard.scss';
import { formatCurrency } from '../../utils/formatHelper';

const ProductCard = ({ product }) => {
    const handleAddToCart = e => {
        console.log(e);
        console.log('add item to cart');
    }

    const handleSeeProduct = e => {
        console.log(e);
        console.log('see product');
    }

    return (
        <div className="product-card">
            <Card className="product-card__card">
                <CardActionArea onClick={handleSeeProduct}>
                    <CardMedia
                        className="product-card__card-media"
                        image={product.image}
                        title={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {formatCurrency(product.price)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleAddToCart}>
                        Adicionar ao carrinho
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard;