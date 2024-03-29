import styled from 'styled-components';

export const SInputContainer = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 30px;
  max-height: 30px;
  background: var(--bg-0);
`;

export const SInputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid var(--bg-border);
  border-radius: 6px 0 0 6px;
  color: var(--font-gray);
  height: 100%;
  width: 30px;
  background: transparent;

  &:hover {
    color: var(--bg-primary);
  }
  &:active {
    color: var(--font-defautl);
  }
`;

export const SInputField = styled.input`
  padding-left: 10px;
  border: 2px solid var(--bg-border);
  border-radius: 0;
  color: var(--font-gray);
  outline: none;
  background: transparent;
  height: 100%;
  width: 270px;
  padding-right: 30px;

  &:hover {
    border: 2px solid var(--bg-primary);
  }

  &:active,
  &:focus {
    border: 2px solid var(--bg-primary);
  }
`;

export const SInputClear = styled.div`
  cursor: pointer;
  background: transparent;
  color: var(--font-gray);
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--bg-border);
  border-radius: 0 6px 6px 0;
`;
