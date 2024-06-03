import styled from "styled-components";
import { Card } from "antd";

export const SColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: grab;
  width: 100%;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const SCard = styled(Card)`
  margin-bottom: 12px;
`;
