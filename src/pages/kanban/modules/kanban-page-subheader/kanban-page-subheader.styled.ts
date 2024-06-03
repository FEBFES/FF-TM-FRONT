import styled from "styled-components";
import { Layout } from "antd";

export const SSubHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 18px;
  height: 40px;
  background: #141414;
  font-size: 14px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid var(--bg-border);
`;

export const SIcon = styled.div`
  margin-left: 20px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  border-radius: 100px;
  border: 1px solid var(--bg-border);
  background: var(--bg-0);
  color: var(--font-gray);
`;
