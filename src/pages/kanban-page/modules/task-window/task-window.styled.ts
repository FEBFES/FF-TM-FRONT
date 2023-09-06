import styled from 'styled-components';

export const STaskWindow = styled.div`
  display: flex;
  flex-direction: column;
  // todo width modal to const
  min-width: 360px;
  width: 360px;
  border-left: 1px solid var(--bg-border);
  background: var(--bg-0);
  max-height: 100vh;
  height: 100vh;
  z-index: 10;
`;

export const STaskWindowHeader = styled.header`
  padding: 0 18px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

export const STaskWindowSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px 30px;
  border-bottom: 1px solid var(--bg-border);
`;

export const SCloseIcon = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 40px;
`;

export const SUsersSection = styled.section`
  height: 5%;
  padding: 0 18px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SPrioritySection = styled.div`
  height: 5%;
  padding: 0 18px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SDescriptionSection = styled.div`
  padding: 0 18px;
  margin-top: 25px;
  margin-bottom: 20px;
  height: 100px;
`;

export const SDescriptionText = styled.textarea`
  height: 100px;
  position: relative;
  width: 100%;
  resize: none;
  background: transparent;
  border: 5px;
  margin-top: 6px;
  font-weight: 400;
  font-size: 14px;
  color: #575757;
  outline: none;
`;

export const SWindowToggle = styled.div`
  margin: 20px 18px 0;
  display: flex;
  border-bottom: 1px solid var(--bg-border);
`;

export const SWindowToggleItem = styled.div`
  cursor: pointer;
  padding: 5px;
  border-top: 1px solid var(--bg-border);
  border-right: 1px solid var(--bg-border);
  border-radius: 0 6px 0 6px;
  font-weight: 600;
  font-size: 14px;
  color: #989898;

  &.windowToggle__item_active {
    color: #000000;
  }
`;

export const SDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: 20px;
`;
