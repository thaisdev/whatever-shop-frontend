import React from "react";
import LinkRouter from "react-router-dom/Link";
import { Grid, Typography, Link } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import useAxios from "axios-hooks";
import { formatCurrency } from "../../../utils/formatHelper";
import QuantityItemCart from "../../QuantityItemCart";
import { useAppContext } from "../../_context/GlobalContext";
import CartItemStyled from "./CartItemStyled";

const CartItem = ({ item }) => {
  const imagesPath = `${window.location.origin}/images`;
  const { refetchCart, showAlertSuccess, showAlertError } = useAppContext();
  const [{ data, loading }, deleteItemCart] = useAxios(
    {
      url: `/cart/${item.id}`,
      method: "DELETE",
    },
    { manual: true }
  );

  const handleDelete = () => {
    deleteItemCart()
      .then((resp) => {
        if (resp.status === 200) {
          showAlertSuccess("Item removido do carrinho com sucesso!");
          refetchCart();
        } else {
          showAlertError("Falha ao remover item do carrinho");
        }
      })
      .catch((err) => {
        showAlertError(err?.message || "Falha ao remover item do carrinho");
      });
  };

  return (
    <CartItemStyled>
      <Grid container spacing={1} className="cart-item">
        <Grid container item md={3} xs={12}>
          <LinkRouter to={`product/${item.id}`}>
            <img
              src={`${imagesPath}/${item.image}`}
              alt={item.name}
              className="cart-item-image"
            />
          </LinkRouter>
        </Grid>
        <Grid container item md={6} xs={12}>
          <LinkRouter to={`product/${item.id}`} className="cart-item-link">
            <Typography className="cart-item-name">{item.name}</Typography>
            <Typography className="cart-item-description">
              {item.description}
            </Typography>
          </LinkRouter>
        </Grid>
        <Grid container item md={3} xs={12}>
          <Grid container spacing={1}>
            <Grid container item xs={12} justify="center">
              <div className="cart-item-quantity">
                <QuantityItemCart product={item} />
              </div>
            </Grid>
            <Grid
              container
              item
              xs={12}
              className="cart-item-price"
              justify="center"
            >
              <Typography>{formatCurrency(item.totalPrice)}</Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              className="delete-button"
              justify="center"
            >
              <Link component="button" variant="body2" onClick={handleDelete}>
                <DeleteOutlineIcon />
                Remover
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CartItemStyled>
  );
};

export default CartItem;
