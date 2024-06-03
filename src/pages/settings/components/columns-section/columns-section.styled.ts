import styled from "styled-components";

//todo change to FLEX and PAddinWrapper ui Component */
export const SColumnContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

// /* //todo change to FLEX and PAddinWrapper ui Component */
export const SColumnContHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

//todo change to FLEX and PAddinWrapper ui Component */
export const SColumnContFooter = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
