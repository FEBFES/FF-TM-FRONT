import styled from 'styled-components';

export const SProjectCard = styled.div`
  position: relative;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 18px 12px;
  border-radius: 10px;
  width: 20%;
  min-width: 280px;
  min-height: 100px;
  border: 1px solid var(--bg-border);
  transition: 0.2s;
  background: var(--bg-0);

  &:hover {
    scale: 1.02;
    cursor: pointer;
  }
`;

/* //todo change to FLEX and PAddinWrapper ui Component */
export const SProjectHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

/* //todo change to MarginWrapper ui Component */
export const SProjectMain = styled.main`
  margin-top: -10px;
  margin-bottom: 0;
`;

/* //todo change to FLEX and PAddinWrapper ui Component */
export const SProjectFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SDragDropContainer = styled.div`
  position: relative;
`;
