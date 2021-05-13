import React, { useState } from "react";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useAppContext } from "../../../_context/GlobalContext";
import HeaderCartMenu from "../HeaderCartMenu";

const HeaderCartButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

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
    <>
      <IconButton
        aria-label="Abrir carrinho"
        color="inherit"
        onClick={handleMenu}
      >
        <Badge badgeContent={quantityCartItems} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <HeaderCartMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        cartData={cartData}
      />
    </>
  );
};

export default HeaderCartButton;
