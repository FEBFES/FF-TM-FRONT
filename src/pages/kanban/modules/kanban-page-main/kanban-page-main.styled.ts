import styled from "styled-components";

export const SKanbanMain = styled.div`
  width: 100%;
  height: 100%;
`;

export const SRowContainer = styled.div`
  padding: 40px 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;

  @media (max-width: 580px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const SColumnContainer = styled.div`
  background: var(--bg-100);
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  height: 100%;
`;
