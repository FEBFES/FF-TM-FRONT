import styled from 'styled-components';

export const SHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  background: var(--bg-0);
  border-radius: 0 0 5px 5px;
  border-bottom: 1px solid var(--bg-border);
`;

export const SFavoriteButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 43px;
`;
