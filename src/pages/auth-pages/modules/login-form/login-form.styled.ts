import styled from 'styled-components';
import { Button } from '../../../../ui/button/button';

export const SLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  @media screen and (max-width: 580px) {
    width: 80%;
  }
`;

export const SButtonSubmit = styled(Button)`
  margin: 20px 0 0 !important;
`;
