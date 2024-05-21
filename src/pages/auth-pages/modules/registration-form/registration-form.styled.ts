import styled from 'styled-components';
import { Button } from 'antd';

export const SRegistrationForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
`;

export const SRegButton = styled(Button)`
  align-self: center;
  margin: 20px 0 0 !important;
`;

export const SButtonLingLogin = styled.div`
  margin-top: 30px;
  font-size: 16px;
  color: var(--font-defautl);
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    margin-right: 10px;
  }

  & > a {
    text-decoration: underline;
    color: var(--font-gray);
  }

  @media screen and (max-width: 580px) {
    width: 80%;
  }
`;
