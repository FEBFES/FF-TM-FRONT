import styled from 'styled-components';

export const SLoaderContainer = styled.div`
  margin-left: 5px;
  animation: 1.4s ease-in-out rotate infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
