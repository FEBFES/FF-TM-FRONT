import styled from 'styled-components';
import { InputField } from '../../../../ui';

export const SContainer = styled.div`
  border-radius: 8px;
  border: 1px solid var(--bg-border);
  background: var(--bg-100);
  padding: 22px 14px 0;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SHeaderRight = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    cursor: pointer;
  }
`;

export const SHeaderLeft = styled.div`
  word-wrap: normal;
  font-weight: 700;
  font-size: 16px;
  color: #989898;
  width: 32%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SMainSection = styled.main`
  width: 100%;
  margin-top: 16px;
`;

export const SInputField = styled(InputField)`
  outline: none;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #575757;
  border: none;
  margin: 0;

  &:hover {
    border: none;
  }
`;

export const SAdditionally = styled.div`
  font-size: 14px;
  color: #989898;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const SAdditionallyLeft = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-between;

  & > * {
    display: flex;
    align-items: center;
  }

  & > div > svg,
  & > div > span {
    margin-left: 5px;
  }
`;

export const SAdditionallyRight = styled.div`
  width: 25%;
  justify-content: flex-end;
  align-items: center;
  display: flex;

  & > div > svg {
    margin-left: 3px;
    cursor: pointer;
    transform: translateY(2px);
  }
`;

export const SFooter = styled.footer`
  padding: 10px;
  width: 100%;
  border-top: 1px solid var(--bg-border);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SAssigneeCcontainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const STaskType = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 24px;
`;

export const STaskPriority = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SCheckbox = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
