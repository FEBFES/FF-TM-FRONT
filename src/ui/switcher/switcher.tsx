import React from 'react';
import { SCheckboxInput, SCheckboxCircle } from './switcher.styled';

interface SwitcherProps {
  onClick: () => void;
  isActive: boolean;
  className?: string;
}

export const Switcher: React.FC<SwitcherProps> = ({
  onClick,
  isActive,
  className,
  ...props
}): JSX.Element => {
  return (
    <SCheckboxInput
      onClick={onClick}
      aria-checked={isActive}
      role={'checkbox'}
      aria-disabled={false}
      {...props}
    >
      <SCheckboxCircle className={className} isActive={isActive} />
    </SCheckboxInput>
  );
};
