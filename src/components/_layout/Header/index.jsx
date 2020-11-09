import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './header.scss';
import { Link } from "react-router-dom";
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Link to="/" className="header__link">
                    <Typography variant="h6">
                        Whatever Shop
                    </Typography>
                </Link>
                <div className="header__cart-button">
                    <HeaderCartButton />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;