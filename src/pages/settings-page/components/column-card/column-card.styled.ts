import styled from 'styled-components';
import { Input } from 'antd';

export const SColumn = styled.div<{ isEdit: boolean }>`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: grab;
  margin-top: 10px;
  width: 100%;
  border-radius: 10px;
  height: 60px;
  border: ${({ isEdit }) =>
    isEdit ? '1px solid var(--bg-primary)' : '1px solid var(--bg-border)'};

  &:first-of-type {
    margin-top: 0;
  }
`;

export const SButton = styled.div`
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  border-radius: 5px;
  background: var(--bg-border);
  height: 25px;
  cursor: pointer;
  transition: 0.2s;
`;

export const SInputField = styled(Input)`
  font-size: 16px;
  color: var(--font-defautl);
  border: none;
  padding: 0;
  background: transparent;
`;

export const STrashButton = styled(SButton)`
  &:hover {
    background: #bb5050;
    transform: scale(1.05);
  }
`;

export const SSaveButton = styled(SButton)`
  &:hover {
    background: #61bd65;
    transform: scale(1.05);
  }
`;

export const SEditButton = styled(SButton)`
  &:hover {
    background: gray;
    transform: scale(1.05);
  }
`;
