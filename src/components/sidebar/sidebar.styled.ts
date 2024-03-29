import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--sideBarWidth);
  z-index: var(--z-index-mainLay-sidebar);
  background: var(--bg-0);
  border-right: 1px solid var(--bg-border);
`;

export const SSidebarHeader = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    font-weight: 800;
    font-size: 16px;
  }
`;

export const SSidebarMain = styled.ul`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const SSidebarFooter = styled.footer`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
`;

export const SLink = styled(NavLink)<{ isActive?: boolean }>`
  margin-top: 10px;
  padding: 18px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ isActive }) => (isActive ? 'white' : 'var(--font-gray)')};
  background: ${({ isActive }) =>
    isActive ? 'var(--bg-primary)' : 'transparent'};

  & > svg {
    width: 16px;
    height: 16px;
  }
  & > span {
    margin-left: 8px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const SSidebarToggle = styled.div<{ isFull: boolean }>`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 40px;
  transform: ${({ isFull }) =>
    isFull ? 'translateX(50%) rotate(180deg)' : 'translateX(50%)'};
  width: 24px;
  height: 24px;
  color: white;
  background: var(--bg-border);
  border-radius: 100px;
  border: 1px solid var(--bg-border);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
`;
