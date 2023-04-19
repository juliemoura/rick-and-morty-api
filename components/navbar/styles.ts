import styled from "styled-components";

export const Container = styled.div``;

export const DesktopContainer = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
