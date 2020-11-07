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
import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
    const history = useHistory();

    const handleAddToCart = e => {
        console.log(e);
        console.log('add item to cart');
    }

    return (
        <Card className="product-card">
            <CardActionArea onClick={() => 
                history.push(`product/${product.id}`)
            }>
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
    )
}

export default ProductCard;