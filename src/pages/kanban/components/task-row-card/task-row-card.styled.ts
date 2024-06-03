import styled from "styled-components";

export const SCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--bg-border);
  border-radius: 6px;
  padding: 8px 16px;
  margin-bottom: 10px;
  background: var(--bg-0);

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SCardInfo = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 980px) {
    width: 200px;
  }

  @media screen and (max-width: 580px) {
    width: 100px;
  }
`;

export const STaskLabel = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (max-width: 580px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const STaskAttachments = styled.div`
  margin-left: 10px;
  cursor: pointer;
  position: relative;
`;

export const SDeleteButton = styled.p`
  cursor: pointer;
  font-size: 12px;
  color: var(--font-gray);
`;
