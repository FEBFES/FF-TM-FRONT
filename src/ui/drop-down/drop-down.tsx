import React from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SDropDownContainer } from './drop-down.styled';

interface DropDownProps {
  children: React.ReactNode;
  setShow: (bool: boolean) => void;
  show: boolean;
}

export const DropDown: React.FC<DropDownProps> = ({
  children,
  setShow,
  show,
}) => {
  const { ref } = useClickOutside(setShow);

  if (!children || !show) {
    return null;
  }

  return (
    <SDropDownContainer
      id={'DropDown'}
      onClick={(e) => {
        e.stopPropagation();
      }}
      ref={ref}
    >
      {children}
    </SDropDownContainer>
  );
};
