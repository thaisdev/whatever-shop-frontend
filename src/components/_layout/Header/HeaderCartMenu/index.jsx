import React from "react";
import { MenuItem, Link, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import HeaderCartItem from "../HeaderCartItem";
import HeaderCartMenuStyled from "./HeaderCartMenuStyled";
import { formatCurrency } from "../../../../utils/formatHelper";

const HeaderCartMenu = ({ cartData, handleClose }) => {
  const history = useHistory();
  const total = cartData?.reduce((acc, item) => acc + item.totalPrice, 0) || 0;
  return (
    <HeaderCartMenuStyled>
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
          <MenuItem>
            <Grid container spacing={1} className="cart-total">
              <Grid container item xs={9} align="center">
                <Typography>TOTAL</Typography>
              </Grid>
              <Grid container item xs={3} align="end">
                <Typography>{formatCurrency(total)}</Typography>
              </Grid>
            </Grid>
          </MenuItem>
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
    </HeaderCartMenuStyled>
  );
};

export default HeaderCartMenu;
