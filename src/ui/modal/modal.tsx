import React from 'react';
import { SModalWrap, SModalContainer } from './modal.styled';

export interface IModalProps {
  show: boolean;
  setShow: (boolValue: boolean) => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({
  show,
  setShow,
  children,
}): JSX.Element => {
  return (
    <SModalWrap onClick={() => setShow(false)} show={show}>
      <SModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </SModalContainer>
    </SModalWrap>
  );
};
