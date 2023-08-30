import styled from 'styled-components';

export const SInputContainer = styled.div`
  margin-top: 10px;
  position: relative;
  height: 46px;
  width: 100%;
`;

export const SInput = styled.input`
  outline: none;
  background: transparent;
  border: 1px solid var(--bg-border);
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 16px 10px 0 10px;
  font-size: 14px;
  color: var(--font-defautl);
`;

export const SInputLabel = styled.label<{ isActive: boolean }>`
  font-size: ${({ isActive }) => (isActive ? '12px' : '14px')};
  transition: 0.1s;
  position: absolute;
  left: ${({ isActive }) => (isActive ? '12px' : '10px')};
  top: ${({ isActive }) => (isActive ? '16px' : '50%')};
  transform: translateY(-50%);
  color: var(--font-gray);
  background: ${({ isActive }) => isActive && 'transparent'};
`;

export const SPasswordIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
