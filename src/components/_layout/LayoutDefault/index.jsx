import { Container } from "@material-ui/core";
import { createGlobalStyle } from "styled-components";
import React from "react";
import ContainerStyled from "./ContainerStyled";
import Header from "../Header";
import Footer from "../Footer";

const GlobalStyle = createGlobalStyle``;

const LayoutDefault = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContainerStyled>
        <Container className="container">{children}</Container>
      </ContainerStyled>
      <Footer />
    </>
  );
};

export default LayoutDefault;
