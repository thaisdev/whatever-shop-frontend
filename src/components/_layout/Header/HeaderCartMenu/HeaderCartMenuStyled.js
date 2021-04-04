import styled from "styled-components";

export default styled.div`
  .MuiButtonBase-root.MuiListItem-root.MuiMenuItem-root.see-my-cart.MuiMenuItem-gutters.MuiListItem-gutters.MuiListItem-button {
    justify-content: center;
    padding: 16px;

    &:hover {
      .MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiLink-button.MuiTypography-body2.MuiTypography-colorPrimary {
        text-decoration: underline;
      }
    }
  }

  .MuiGrid-root.cart-total.MuiGrid-container.MuiGrid-spacing-xs-1 {
    padding: 6px 16px;
    background: #dadada;

    .MuiTypography-root.MuiTypography-body1 {
      width: 100%;
      color: #333333;
      font-weight: 600;
    }
  }
`;
