import React from "react";
import { Typography } from "@material-ui/core";
import FooterStyled from "./FooterStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <Typography className="footer-text">Whatever Shop</Typography>
    </FooterStyled>
  );
};

export default Footer;
