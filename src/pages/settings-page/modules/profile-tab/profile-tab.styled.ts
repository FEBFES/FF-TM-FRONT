import styled from 'styled-components';

export const SProfileCont = styled.div`
  width: 100%;
`;

export const InfoCont = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 60px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SUserBackground = styled.div<{ bgColor: any }>`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  border-radius: 10px;
  background: ${({ bgColor }) => bgColor};
  margin-bottom: 20px;
`;

/* //todo change to FLEX and PAddinWrapper ui Component */
export const SButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SUserAvatarContainer = styled.div`
  top: -80px;
  left: 20px;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  background: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -40px;
`;

export const SInputCont = styled.div`
  display: grid;
  grid-gap: 10px;
`;
