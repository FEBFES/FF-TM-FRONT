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
    80%;
  }
`;

export const SPageCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background: var(--bg-100);
  padding: 40px 20px 50px 0;

  @media (max-width: 980px) {
    width: 100%;
  }
`;
