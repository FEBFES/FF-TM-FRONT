import styled from 'styled-components';

export const SPageContainer = styled.div`
  z-index: 10;
  border-radius: 8px;
  padding: 30px 20px 20px;
  min-width: 400px;
  background: var(--bg-100);
`;

export const SPageContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SPageContainerFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

export const SProjectContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
`;
