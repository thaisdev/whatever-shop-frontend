import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import HeaderStyled from "./HeaderStyled";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <HeaderStyled>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className="link">
            <Typography variant="h6">Whatever Shop</Typography>
          </Link>
          <div className="cart-button">
            <HeaderCartButton />
          </div>
        </Toolbar>
      </AppBar>
    </HeaderStyled>
  );
};

export default Header;
