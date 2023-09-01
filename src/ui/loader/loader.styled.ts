import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SLoaderContainer = styled.div`
  margin-left: 5px;
  animation: 1.4s ease-in-out ${rotate} infinite;
`;
