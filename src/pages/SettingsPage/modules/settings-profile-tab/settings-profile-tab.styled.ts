import styled, { css } from 'styled-components';

export const SUserBackground = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  background: var(--bg-0);
`;

export const SButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SFileInput = styled.input`
  display: none;
`;

export const SUserAvatarContainer = styled.div`
  top: -80px;
  left: 20px;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  background: var(--bg-100);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -40px;
`;

export const SFileInputButtonStyle = css`
  position: absolute;
  bottom: 5px;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-border);

  &:hover .fileInput__btn > * {
    transform: scale(1.5);
  }
`;

export const FileInputLabel = styled.label`
  ${SFileInputButtonStyle};
  right: 0;
`;

export const FileInputDelete = styled.div`
  ${SFileInputButtonStyle};
  left: 0;
`;
