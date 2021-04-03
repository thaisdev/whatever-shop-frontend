import styled from "styled-components";

export default styled.div`
  .product-card {
    width: 100%;
    height: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;

    .MuiCardMedia-root.card-media {
      height: 140px;
      background-size: contain;
    }

    .add {
      margin-top: auto;

      button {
        width: 100%;
      }
    }
  }
`;
