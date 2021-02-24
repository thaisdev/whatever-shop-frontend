import styled from "styled-components";

export default styled.div`
  .image {
    width: 100%;
    max-width: 60px;
    height: auto;
    object-fit: contain;
    object-position: center;
  }

  .MuiTypography-root.name.MuiTypography-body1 {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #333;
  }

  .MuiTypography-root.quantity.MuiTypography-body1 {
    font-size: 12px;
    color: #3e3e3e;
  }

  .MuiTypography-root.price.MuiTypography-body1 {
    font-size: 14px;
    color: #3e3e3e;
    font-weight: 600;
  }
`;
