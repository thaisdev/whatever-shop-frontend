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
            <Grid container item xs={12}>
                <Typography variant="h4">
                    Meu carrinho
                </Typography>
            </Grid>
            <Grid container item xs={8}>
                {
                    cart.map((item, index) => (
                        <Grid container spacing={1} 
                            className="cart__item" key={`cart-item--${index}`}>
                            <Grid container item xs={3}>
                                <img src={item.image} alt={item.name} className="cart__image" />
                            </Grid>
                            <Grid container item xs={6}>
                                <Typography variant="span" className="cart__product-name">
                                    {item.name}
                                </Typography>
                                <Typography className="cart__product-description">
                                    {item.description}
                                </Typography>
                            </Grid>
                            <Grid container item xs={3} className="cart__product-price">
                                <Typography variant="span">
                                    {formatCurrency(item.price)}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid container item xs={4} className="cart__resume">
                <Card className="cart__resume-card">
                    <CardContent>
                        <Typography align="center" className="cart__resume-title">
                            Resumo do pedido
                        </Typography> 
                        <div className="cart__resume-info">
                            <Typography variant="body2" align="center" color="textSecondary" component="p" className="cart__resume-price">
                                {`${formatCurrency(total)} à vista no Boleto`}
                            </Typography>
                            <Typography variant="body2" align="center" color="textSecondary" component="p" className="cart__resume-delivery">
                                Entrega prevista para 23/11/2020
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" className="cart__resume-button"
                            onClick={handleCloseOrder}>
                            Fechar pedido
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Cart;