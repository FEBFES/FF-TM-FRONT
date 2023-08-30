import styled from 'styled-components';

export const SDropDownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: var(--bg-0);
  border: 1px solid var(--bg-border);
  padding: 8px 5px;
  border-radius: 8px;

  & > div {
    margin-bottom: 10px;
  }

  & > div:last-of-type {
    margin-bottom: 0;
  }
`;
