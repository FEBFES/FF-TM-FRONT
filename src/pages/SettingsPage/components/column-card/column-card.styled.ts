import styled from 'styled-components';

export const SColumn = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: grab;
  margin-top: 10px;
  width: 100%;
  border-radius: 10px;
  height: 60px;
  border: 1px solid var(--bg-border);

  &:first-of-type {
    margin-top: 0;
  }
`;
// .column_edit {
//   border: 1px solid var(--bg-primary);
// }

// .title {
//   display: flex;
//   align-items: center;
//   font-size: 16px;
//   color: #575757;
// }

// .subtitle {
//   font-size: 14px;
//   color: #575757;
// }

// .btn {
//   margin-right: 6px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 25px;
//   border-radius: 5px;
//   background: var(--bg-border);
//   height: 25px;
//   cursor: pointer;
//   transition: 0.2s;
// }

// .inputCont {
//   margin-top: 0;
//   height: fit-content;
// }
// .input {
//   font-size: 16px;
//   color: var(--font-defautl);
//   border: none;
//   padding: 0;
//   background: transparent;
// }

// .editBtn:hover {
//   background: gray;
//   transform: scale(1.05);
// }
// .trashBtn:hover {
//   background: #bb5050;
//   transform: scale(1.05);
// }
// .saveBtn:hover {
//   background: #61bd65;
//   transform: scale(1.05);
// }
