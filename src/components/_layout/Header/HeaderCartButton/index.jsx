import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Link,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../../_context/GlobalContext";
import HeaderCartItem from "../HeaderCartItem";
import HeaderCartButtonStyled from "./HeaderCartButtonStyled";

const HeaderCartButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const history = useHistory();

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
        {cartData?.length > 0 ? (
          <>
            {cartData.map((item, index) => (
              <MenuItem
                key={`menu-item--${index}`}
                onClick={() => history.push(`/product/${item.id}`)}
              >
                <HeaderCartItem item={item} />
              </MenuItem>
            ))}
            <MenuItem className="see-my-cart">
              <Link
                component="button"
                variant="body2"
                onClick={() => history.push("/cart")}
              >
                Ver meu carrinho
              </Link>
            </MenuItem>
          </>
        ) : (
          <MenuItem onClick={handleClose}>
            <Typography>Seu carrinho está vazio</Typography>
          </MenuItem>
        )}
      </Menu>
    </HeaderCartButtonStyled>
  );
};

export default HeaderCartButton;
