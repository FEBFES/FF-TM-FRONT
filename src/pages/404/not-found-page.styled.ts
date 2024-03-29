import styled from 'styled-components';
import { Button } from '../../ui/button/button';

/* //todo change to FLEX and PAddinWrapper ui Component */
export const SPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* //todo change to FLEX and PAddinWrapper ui Component */
export const SButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

export const SPrevButton = styled(Button)`
  & > svg {
    margin-right: 10px;
    transform: rotate(90deg);
  }
`;

export const SHomeButton = styled(Button)`
  background: var(--bg-0);
  color: var(--font-default);
`;
