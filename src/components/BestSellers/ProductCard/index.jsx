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
import { formatCurrency } from '../../../utils/formatHelper';
import { useHistory } from "react-router-dom";
import { useAppContext } from '../../_context/GlobalContext';
import QuantityItemCart from '../../QuantityItemCart';

const ProductCard = ({ product }) => {
    const { cartData, addToCart } = useAppContext();
    const cartHasItem = cartData?.find(item => item.id === product.id) || false;
    const history = useHistory();

    return (
        <Card className="product-card">
            <CardActionArea onClick={() => 
                history.push(`product/${product.id}`)
            }>
                <CardMedia
                    className="product-card__card-media"
                    image={`images/${product.image}`}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {formatCurrency(product.price)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="product-card__add">
                {
                    cartHasItem ?
                    <QuantityItemCart product={cartHasItem} />
                    : 
                    <Button color="primary" onClick={() => addToCart(product)}>
                        Adicionar ao carrinho
                    </Button>
                }
            </CardActions>
        </Card>
    )
}

export default ProductCard;