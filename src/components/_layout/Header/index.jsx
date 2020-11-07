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

const Header = () => {
    const history = useHistory();

    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Typography variant="h6">
                Whatever Shop
                </Typography>
                <div className="header__cart-button">
                    <IconButton aria-label="show 4 new mails" color="inherit"
                        onClick={() => history.push('/cart')}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;