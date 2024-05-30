import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SColWrap = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  min-width: 290px;
  max-width: 290px;
  border-right: 1px solid #232323;
  height: 100%;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const SColHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 268px;
  margin-bottom: 10px;

  & > svg {
    cursor: pointer;
  }
`;

export const SColumn = styled.div`
  transition: 0.2s;
  height: 100%;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SColAddBtnIcon = styled(FontAwesomeIcon)`
  color: #71737e;
`;
