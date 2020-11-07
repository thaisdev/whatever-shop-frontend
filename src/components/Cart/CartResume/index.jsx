import React from 'react';
import { 
    Typography, 
    Card,
    CardContent,
    CardActions,
    Button
} from '@material-ui/core';
import { formatCurrency } from '../../../utils/formatHelper';
import './cartResume.scss';

const CartResume = ({total}) => {
    const handleCloseOrder = e => {
        console.log(e);
        console.log('handle close order');
    }

    return (
        <Card className="cart-resume__card">
            <CardContent>
                <Typography align="center" className="cart-resume__title">
                    Resumo do pedido
                </Typography> 
                <div className="cart-resume__info">
                    <Typography variant="body2" align="center" color="textSecondary" component="p" className="cart-resume__price">
                        {`${formatCurrency(total)} à vista no Boleto`}
                    </Typography>
                    <Typography variant="body2" align="center" color="textSecondary" component="p" className="cart-resume__delivery">
                        Entrega prevista para 23/11/2020
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button color="primary" className="cart-resume__button"
                    onClick={handleCloseOrder}>
                    Fechar pedido
                </Button>
            </CardActions>
        </Card>
    )
}

export default CartResume;