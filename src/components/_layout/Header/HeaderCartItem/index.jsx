import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { formatCurrency } from "../../../../utils/formatHelper";
import HeaderCartItemStyled from "./HeaderCartItemStyled";

const HeaderCartItem = ({ item }) => {
  const imageUrl = `${window.location.origin}/images/${item.image}`;
  return (
    <HeaderCartItemStyled>
      <Grid container spacing={1}>
        <Grid container item xs={3} justify="center">
          <img src={imageUrl} alt={item.name} className="image" />
        </Grid>
        <Grid container item xs={6}>
          <Typography className="name">{item.name}</Typography>
          <Typography className="quantity">
            {`Quantidade: ${item.quantity}`}
          </Typography>
        </Grid>
        <Grid container item xs={3} justify="center">
          <Typography className="price">
            {formatCurrency(item.totalPrice)}
          </Typography>
        </Grid>
      </Grid>
    </HeaderCartItemStyled>
  );
};

export default HeaderCartItem;
