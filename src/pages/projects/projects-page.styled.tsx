import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  padding: 0 20px 40px;
  width: 100%;
  overflow: scroll;
`;

export const SCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 12px;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const SButton = styled(Button)`
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const SProjCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 14px;

  @media screen and (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
