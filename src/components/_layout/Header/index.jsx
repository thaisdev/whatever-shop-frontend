import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography,
    IconButton,
    Badge
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from "react-router-dom";
import './header.scss';
import { useAppContext } from '../../_context/GlobalContext';

const Header = () => {
    const { cartData } = useAppContext();
    const quantityCartItems = cartData?.reduce((acc, item) => 
        acc + parseInt(item.quantity), 0) || 0;
    const history = useHistory();

    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Typography variant="h6">
                Whatever Shop
                </Typography>
                <div className="header__cart-button">
                    <IconButton aria-label="Abrir carrinho" color="inherit"
                        onClick={() => history.push('/cart')}>
                        <Badge badgeContent={quantityCartItems} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;