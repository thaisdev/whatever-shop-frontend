import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { TextField, IconButton } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import useAxios from "axios-hooks";
import { useAppContext } from "../_context/AppContext";
import QuantityItemCartStyled from "./QuantityItemCartStyled";

const QuantityItemCart = ({ product, ...rest }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { refetchCart, showAlertSuccess, showAlertError } = useAppContext();
  const [, updateQuantityCart] = useAxios(
    {
      url: `/cart/${product.id}`,
      method: "PUT",
    },
    { manual: true }
  );

  const prevQtdRef = useRef();

  useEffect(() => {
    prevQtdRef.current = quantity;
    if (prevQtdRef.current && quantity !== product.quantity) {
      setQuantity(product.quantity);
    }
  }, [product]);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setQuantity(value);
    if (value !== "") {
      updateQuantity(value);
    }
  };

  const updateQuantity = (qtd) => {
    updateQuantityCart({
      data: {
        ...product,
        quantity: qtd,
        totalPrice: qtd * product.price,
      },
    })
      .then((resp) => {
        if (resp.status === 200) {
          showAlertSuccess("Quantidade atualizada com sucesso!");
          refetchCart();
        } else {
          showAlertError("Falha ao atualizar quantidade do item no carrinho");
        }
      })
      .catch((err) => {
        showAlertError(
          err?.message || "Falha ao atualizar quantidade do item no carrinho"
        );
      });
  };

  return (
    <QuantityItemCartStyled {...rest}>
      <IconButton
        color="primary"
        aria-label="remove quantity"
        component="span"
        onClick={() => updateQuantity(parseInt(quantity) - 1)}
        disabled={quantity <= 1}
      >
        <Remove />
      </IconButton>
      <TextField
        type="number"
        value={quantity}
        className="quantity-input"
        onChange={handleChangeInput}
        variant="outlined"
      />
      <IconButton
        color="primary"
        aria-label="add quantity"
        component="span"
        onClick={() => updateQuantity(parseInt(quantity) + 1)}
      >
        <Add />
      </IconButton>
    </QuantityItemCartStyled>
  );
};

QuantityItemCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    deliveryDays: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default QuantityItemCart;
