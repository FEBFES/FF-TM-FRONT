import styled from 'styled-components';

export const STask = styled.div`
  cursor: grab;
  padding: 8px 12px 0 12px;
  display: flex;
  flex-direction: column;
  width: 288px;
  background: var(--bg-0);
  border: 1px solid var(--bg-border);
  /*box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;*/
  margin-bottom: 10px;
  border-radius: 6px;
`;

export const STaskMain = styled.main`
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const STaskFooter = styled.footer`
  min-height: 34px;
  padding-top: 8px;
  padding-bottom: 12px;
  color: var(--font-gray);
  border-top: 1px solid var(--bg-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const STaskAttachments = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  &:last-of-type {
    position: relative;
    margin-right: 0;
    cursor: pointer;
    height: 14px;
  }
`;
