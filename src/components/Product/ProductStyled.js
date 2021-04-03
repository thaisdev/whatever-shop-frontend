import styled from "styled-components";

export default styled.div`
  .message {
    width: 100%;
    padding: 48px;
    color: #3e3e3e;
  }

  .product {
    .product-title {
      padding: 12px 0;
      color: #3e3e3e;
    }

    .product-image {
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 75vh;
        height: auto;
      }
    }

    .product-info {
      padding: 0 24px;

      .price {
        margin-bottom: 8px;
        color: #3e3e3e;
      }

      .delivery {
        padding: 8px 0;
        color: #333333;
        font-size: 14px;
      }

      .description {
        margin: 16px 0;
        color: #333333;
      }

      .quantity-item-product {
        justify-content: center;
      }
    }
  }
`;
