import React from 'react';
import { Typography } from '@material-ui/core';
import './footer.scss';

const Footer = ({ children }) => {
    return (
        <div className="footer">
            <Typography className="footer__text">
                Whatever Shop
            </Typography>
        </div>
    )
}

export default Footer;