import React from 'react';

export interface IModalProps {
  show: boolean;
  setShow: (boolValue: boolean) => void;
  children: React.ReactNode;
  title?: string;
  onSubmit: () => void;
  empty?: boolean;
}
