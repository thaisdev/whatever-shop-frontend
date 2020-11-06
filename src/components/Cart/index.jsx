import React from 'react';
import { 
    Grid, 
    Typography, 
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Button
} from '@material-ui/core';
import cart from './cart.json';
import './cart.scss';
import { formatCurrency } from '../../utils/formatHelper';

const Cart = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const handleCloseOrder = e => {
        console.log(e);
        console.log('handle close order');
    }

    return (
        <Grid container spacing={1} className="cart">
            <Grid container item xs={8}>
                {
                    cart.map((item, index) => (
                        <Grid container spacing={1} 
                            className="cart__item" key={`cart-item--${index}`}>
                            <Grid container item xs={3}>
                                <img src={item.image} alt={item.name} className="cart__image" />
                            </Grid>
                            <Grid container item xs={6}>
                                <Typography>
                                    {item.name}
                                </Typography>
                            </Grid>
                            <Grid container item xs={3}>
                                <Typography>
                                    {formatCurrency(item.price)}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid container item xs={4}>
                <Card className="product-card">
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {formatCurrency(total)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={handleCloseOrder}>
                            Fechar pedido
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Cart;