import React from "react";
import { Link, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import HeaderCartItem from "../HeaderCartItem";
import HeaderCartMenuStyled from "./HeaderCartMenuStyled";
import { formatCurrency } from "../../../../utils/formatHelper";
import { MuiMenu, MuiMenuItem } from "../../Menu";

const HeaderCartMenu = ({ anchorEl, cartData, handleClose }) => {
  const history = useHistory();
  const total = cartData?.reduce((acc, item) => acc + item.totalPrice, 0) || 0;
  return (
    <MuiMenu
      anchorEl={anchorEl}
      open={!!anchorEl}
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
      <HeaderCartMenuStyled>
        {cartData?.length > 0 ? (
          <>
            {cartData.map((item, index) => (
              <MuiMenuItem
                key={`menu-item--${index}`}
                onClick={() => history.push(`/product/${item.id}`)}
              >
                <HeaderCartItem item={item} />
              </MuiMenuItem>
            ))}
            <MuiMenuItem
              className="see-my-cart"
              onClick={() => history.push("/cart")}
            >
              <Link component="button" variant="body2">
                Ver meu carrinho
              </Link>
            </MuiMenuItem>
            <Grid container spacing={1} className="cart-total">
              <Grid container item xs={3} align="center"></Grid>
              <Grid container item xs={6} align="center">
                <Typography>TOTAL</Typography>
              </Grid>
              <Grid container item xs={3} align="end">
                <Typography>{formatCurrency(total)}</Typography>
              </Grid>
            </Grid>
          </>
        ) : (
          <MuiMenuItem onClick={handleClose}>
            <Typography>Seu carrinho está vazio</Typography>
          </MuiMenuItem>
        )}
      </HeaderCartMenuStyled>
    </MuiMenu>
  );
};

export default HeaderCartMenu;
