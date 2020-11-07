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

const ProductCard = ({ product }) => {
    const { addToCart } = useAppContext();
    const history = useHistory();

    const handleAddToCart = () => {
        addToCart(product);
    }

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
            <CardActions>
                <Button size="small" color="primary" onClick={handleAddToCart}>
                    Adicionar ao carrinho
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;