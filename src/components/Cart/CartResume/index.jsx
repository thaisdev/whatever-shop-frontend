import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { formatCurrency, formatDateBr } from "../../../utils/formatHelper";
import { calcDeliveryDate } from "../../../utils/cartUtils";
import CartResumeStyled from "./CartResumeStyled";

const CartResume = ({ total, deliveryDays }) => {
  const handleCloseOrder = (e) => {
    console.log(e);
    console.log("handle close order");
  };
  const deliveryDate = calcDeliveryDate(deliveryDays);

  return (
    <CartResumeStyled>
      <Card className="card">
        <CardContent>
          <Typography align="center" className="title">
            Resumo do pedido
          </Typography>
          <div className="info">
            <Typography
              variant="body2"
              align="center"
              color="textSecondary"
              component="p"
              className="price"
            >
              {`${formatCurrency(total)} à vista no Boleto`}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="textSecondary"
              component="p"
              className="delivery"
            >
              {`Entrega prevista para ${formatDateBr(deliveryDate)}`}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button color="primary" className="button" onClick={handleCloseOrder}>
            Fechar pedido
          </Button>
        </CardActions>
      </Card>
    </CartResumeStyled>
  );
};

export default CartResume;
