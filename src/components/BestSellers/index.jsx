import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useAxios from "axios-hooks";
import ProductCard from "./ProductCard";
import BestSellersStyled from "./BestSellersStyled";

const BestSellers = () => {
  const [{ data, loading }] = useAxios("/products");

  if (loading) {
    return <Typography>Carregando...</Typography>;
  }

  return (
    <BestSellersStyled>
      <Grid container spacing={3}>
        {data?.map((product, index) => (
          <Grid
            container
            item
            lg={3}
            md={4}
            xs={12}
            key={`product-card--${index}`}
            className="best-seller-item"
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </BestSellersStyled>
  );
};

export default BestSellers;
