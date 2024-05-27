import styled from 'styled-components';

export const SStatistic = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;
