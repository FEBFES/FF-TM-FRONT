import styled from 'styled-components';

export const SSubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  height: 5%;
  background: var(--bg-0);
  font-size: 14px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid var(--bg-border);
`;

export const SClearFiltersButton = styled.div`
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--font-gray);
  height: 26px;
  border-radius: 4px;
  padding: 0 14px;
  border: 1px dashed var(--font-gray);
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
