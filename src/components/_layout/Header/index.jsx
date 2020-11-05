import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = ({ children }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                Whatever Shop
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;