import React from 'react';
import { SSelect, SOption } from './select.styled';

interface SelectProps {
  defaultValue: string;
  optionsArr: string[];
  onlyView?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  defaultValue,
  optionsArr,
  onlyView = false,
}): JSX.Element => {
  const changeHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <SSelect
      disabled={onlyView}
      onlyView={onlyView}
      defaultValue={defaultValue}
      onClick={changeHandler}
      onChange={changeHandler}
    >
      {optionsArr.map((option: string, index: number) => {
        return (
          <SOption key={`${option}-${index}`} value={option}>
            {option}
          </SOption>
        );
      })}
    </SSelect>
  );
};
