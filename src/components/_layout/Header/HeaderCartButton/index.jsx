import React, { useState } from "react";
import { Menu, IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useAppContext } from "../../../_context/GlobalContext";
import HeaderCartButtonStyled from "./HeaderCartButtonStyled";
import HeaderCartMenu from "../HeaderCartMenu";

const HeaderCartButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { cartData } = useAppContext();
  const quantityCartItems =
    cartData?.reduce((acc, item) => acc + parseInt(item.quantity), 0) || 0;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderCartButtonStyled>
      <IconButton
        aria-label="Abrir carrinho"
        color="inherit"
        onClick={handleMenu}
      >
        <Badge badgeContent={quantityCartItems} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <HeaderCartMenu handleClose={handleMenu} cartData={cartData} />
      </Menu>
    </HeaderCartButtonStyled>
  );
};

export default HeaderCartButton;
