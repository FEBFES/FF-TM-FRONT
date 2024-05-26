import styled from 'styled-components';

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
