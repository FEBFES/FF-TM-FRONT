import styled from 'styled-components';

export const SMainLayout = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;

export const SPage = styled.div`
  min-height: 100%;
  width: calc(100vw - var(--sideBarWidth));
  margin-left: var(--sideBarWidth);
`;
