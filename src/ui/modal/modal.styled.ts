import styled from 'styled-components';

export const SModalWrap = styled.div<{ show: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(5, 5, 5, 0.5);
  z-index: var(--z-index-modalWrap);
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const SModalContainer = styled.div`
  z-index: var(--z-index-modalCont);
  min-width: 300px;
  min-height: 50px;
  border-radius: 14px;
  background: var(--bg-0);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
