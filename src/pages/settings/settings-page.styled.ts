import styled from "styled-components";

export const SPageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SPageCont = styled.div<{ sizeXs?: boolean }>`
  display: flex;
  flex-direction: ${({ sizeXs }) => (sizeXs ? "column" : "row")};
  gap: 50px;
  justify-content: center;
  align-items: start;
  margin: 40px 20px 50px 20px;
  padding: 0 40px;

  @media screen and (max-width: 480px) {
    padding: 0 0;
  }
`;
