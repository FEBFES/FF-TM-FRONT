import styled from 'styled-components';

export const SMemberCard = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid var(--bg-border);
  border-radius: 6px;
`;

// todo change to FLEX and PAddinWrapper ui Component */
export const SMemberCardInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

// todo change to FLEX UI COMP
export const SMemberCardLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const STrashButton = styled.div`
  border: 1px solid var(--bg-border);
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-0);
  border-radius: 6px;
  color: var(--bg-border);

  &:hover {
    background: rgb(207, 69, 69);
    color: white;
    border: 1px solid transparent;
  }
`;
