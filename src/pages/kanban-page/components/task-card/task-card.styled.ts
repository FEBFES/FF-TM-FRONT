import styled from 'styled-components';
import { Card } from 'antd';

export const STask = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 288px;
  margin-bottom: 10px;
`;

export const STaskMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
