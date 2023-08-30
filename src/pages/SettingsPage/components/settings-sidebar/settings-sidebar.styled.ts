import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SSidebar = styled.nav`
  padding: 80px 120px;
  display: flex;
  flex-direction: column;
  background: var(--bg-100);

  @media screen and (max-width: 1200px) {
    padding: 80px 50px;
  }

  @media screen and (max-width: 980px) {
    padding: 40px 30px;
  }
`;

export const SSidebarLinkContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
`;

export const SSidebarLinkSubCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SSidebarLink = styled(NavLink)<{ isActive: boolean }>`
  margin-top: 10px;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  color: #575757;
  width: fit-content;

  &::before {
    ${({ isActive }) =>
    isActive
      ? css`
            transition: 0.4s;
            bottom: -2px;
            position: absolute;
            content: "";
            width: 100%;
            height: 1px;
            background: #575757;
          `
      : css`
            transition: 0.4s;
            bottom: -2px;
            position: absolute;
            content: "";
            width: 0;
            height: 1px;
            background: #575757;
          `}
  }

  &:hover::before {
    content: "";
    width: 100%;
  }
`;
