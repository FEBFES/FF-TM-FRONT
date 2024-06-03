import styled from "styled-components";
import { Card } from "antd";

export const SMemberCard = styled(Card)`
  border-radius: 0;
`;

export const SMemberContainer = styled.div`
  margin-top: 20px;
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
