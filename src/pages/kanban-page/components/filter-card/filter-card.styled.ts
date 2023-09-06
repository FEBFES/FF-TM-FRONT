import styled from 'styled-components';

export const SContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 5px;
  border: 1px solid var(--bg-border);
  border-radius: 6px;
  min-height: 26px;
`;

export const SFilter = styled.div`
  cursor: pointer;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  margin-right: 5px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const SComponentCont = styled.div`
  min-width: 30px;
`;
