import styled from 'styled-components';

export const SRow = styled.div`
  padding-bottom: 40px;
`;

/* //todo change to FLEX and PAddinWrapper ui Component */
export const SRowHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const STaskAlert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--font-gray);
`;
