import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
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
      <Card className="product-card" data-testid="productCard">
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

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    deliveryDays: PropTypes.number.isRequired,
  }).isRequired,
};

ProductCard.defaultProps = {
  product: {
    id: null,
    name: "",
    image: "",
    price: 0,
    description: "",
    deliveryDays: 0,
  },
};

export default ProductCard;
