import styled from 'styled-components';

export const SPage = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const SPageWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const SPageCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 20px 50px 0;
`;
