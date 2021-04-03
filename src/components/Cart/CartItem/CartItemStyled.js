import styled from "styled-components";

export default styled.div`
  .cart-item {
    padding: 24px 0;
    border-top: 1px solid #f2f2f2;

    .link {
      text-decoration: none;
      color: #333;
    }

    .image {
      max-width: 100%;
      max-height: 300px;
      object-fit: contain;
    }

    .name {
      font-weight: 500;
      color: #333;
    }

    .MuiTypography-root.cart-item__description.MuiTypography-body1 {
      font-size: 14px;
      color: #3e3e3e;
    }

    .price {
      .MuiTypography-root {
        color: #3e3e3e;
      }
    }

    .quantity {
      height: 50px;

      .MuiFormControl-root.MuiTextField-root.quantity-item-cart__input {
        width: calc(100% - 96px);
      }
    }

    .delete-button {
      .MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiLink-button.MuiTypography-body2.MuiTypography-colorPrimary {
        color: #3e3e3e;
        display: flex;
        align-items: center;
      }
    }
  }
`;
