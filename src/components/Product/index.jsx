import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import useAxios from "axios-hooks";
import { formatCurrency } from "../../utils/formatHelper";
import { useAppContext } from "../_context/GlobalContext";
import QuantityItemCart from "../QuantityItemCart";
import ProductStyled from "./ProductStyled";

const Product = ({ productId }) => {
  const imagesPath = `${window.location.origin}/images`;
  const { cartData, addToCart } = useAppContext();
  const [{ data, loading, error }] = useAxios(`products/${productId}`);

  const cartHasItem = cartData?.find((item) => item.id == productId) || false;

  const render = () => {
    if (loading) {
      return (
        <Grid container spacing={1}>
          <Grid container item xs={12}>
            <div className="message">
              <Typography align="center">Carregando...</Typography>
            </div>
          </Grid>
        </Grid>
      );
    }

    if (!data) {
      return (
        <Grid container spacing={1}>
          <Grid container item xs={12}>
            <div className="message">
              <Typography align="center">
                {`Não foi encontrado um produto com o ID ${productId}`}
              </Typography>
            </div>
          </Grid>
        </Grid>
      );
    }

    return (
      <Grid container spacing={1} className="product">
        <Grid container item xs={12}>
          <div className="product-title">
            <Typography variant="h4">{data.name}</Typography>
          </div>
        </Grid>
        <Grid container item md={6} xs={12} className="product-image">
          <img src={`${imagesPath}/${data.image}`} alt={data.name} />
        </Grid>
        <Grid container item md={6} xs={12}>
          <div className="product-info">
            <div className="price">
              <Typography variant="h4">{formatCurrency(data.price)}</Typography>
            </div>
            <div className="delivery">
              <Typography>
                {`Entrega a partir de ${data.deliveryDays} dias úteis`}
              </Typography>
            </div>
            <div className="description">
              <Typography>{data.description}</Typography>
            </div>
            {cartHasItem ? (
              <QuantityItemCart
                product={cartHasItem}
                className="quantity-item-product"
              />
            ) : (
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={() => addToCart(data)}
              >
                Adicionar ao carrinho
              </Button>
            )}
          </div>
        </Grid>
      </Grid>
    );
  };

  return <ProductStyled>{render()}</ProductStyled>;
};

export default Product;
