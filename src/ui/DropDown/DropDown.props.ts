import React from 'react';

export interface DropDownProps {
  children: React.ReactNode;
  setShow: (bool: boolean) => void;
  show: boolean;
}
