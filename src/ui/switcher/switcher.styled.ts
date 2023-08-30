import styled from 'styled-components';

export const SCheckboxInput = styled.div`
  cursor: pointer;
  position: relative;
  transition: 1s;
  width: 32px;
  height: 18px;
  border: 1px solid var(--bg-border);
  border-radius: 10px;
`;

export const SCheckboxCircle = styled.div<{ isActive: boolean }>`
  transition: 0.4s;
  position: absolute;
  width: 12px;
  height: 12px;
  background: ${({ isActive }) => (isActive ? 'var(--bg-primary)' : '#979a9d')};
  border-radius: 100px;
  left: ${({ isActive }) => (isActive ? '16px' : '2px')};
  transform: translateY(-50%);
  top: 50%;
`;
