import styled from 'styled-components';

export const SHeader = styled.div`
  display: flex;
  justify-content: start;

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

export const SProjectContainter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const SHeaderRightSection = styled.div`
  display: flex;
  align-items: center;
`;
