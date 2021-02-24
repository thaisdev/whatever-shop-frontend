import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { formatCurrency } from "../../../utils/formatHelper";
import { useAppContext } from "../../_context/GlobalContext";
import QuantityItemCart from "../../QuantityItemCart";
import ProductCardStyled from "./ProductCardStyled";

const ProductCard = ({ product }) => {
  const { cartData, addToCart } = useAppContext();
  const cartHasItem = cartData?.find((item) => item.id === product.id) || false;
  const history = useHistory();

  return (
    <ProductCardStyled>
      <Card>
        <CardActionArea onClick={() => history.push(`product/${product.id}`)}>
          <CardMedia
            className="card-media"
            image={`images/${product.image}`}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {formatCurrency(product.price)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="add">
          {cartHasItem ? (
            <QuantityItemCart product={cartHasItem} />
          ) : (
            <Button color="primary" onClick={() => addToCart(product)}>
              Adicionar ao carrinho
            </Button>
          )}
        </CardActions>
      </Card>
    </ProductCardStyled>
  );
};

export default ProductCard;
