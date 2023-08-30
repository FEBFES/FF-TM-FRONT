import styled from 'styled-components';

export const SAvatarGroupContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SAvatarCont = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SOtherMember = styled.div`
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  background: var(--bg-0);
  border-radius: 100%;
  border: 1px solid var(--bg-border);
  width: 24px;
  height: 24px;
  color: var(--font-defautl);
`;
