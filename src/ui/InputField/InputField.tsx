import React, { ChangeEvent, useEffect } from 'react';
import cn from 'classnames';
import './InputField.scss';

type inputValue = string | number;

interface IInputFieldProps {
  type: 'text';
  label: string;
  value: inputValue;
  onChange: (str: inputValue) => void;
}

export const InputField: React.FC<IInputFieldProps> = ({
  type,
  label,
  value,
  onChange,
}): JSX.Element => {
  useEffect(() => {
    const initialValue = value;

    return () => {
      onChange(initialValue);
    };
  }, []);

  return (
    <div className={'input-cont'}>
      <label className={'input-label'} htmlFor="input">
        {label}
      </label>
      <input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        type={type}
        id={'input'}
        className={cn('')}
      />
    </div>
  );
};
