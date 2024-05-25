import styled from 'styled-components';

export const SPageWrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 980px) {
    width: 90%;
  }
`;

export const SPageCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 20px 50px 20px;
`;
