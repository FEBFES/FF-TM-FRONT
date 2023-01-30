import React, { ChangeEvent, useEffect } from 'react';
import cn from 'classnames';
import './InputField.scss';

interface IInputFieldProps {
  type: 'text';
  label: string;
  value: string;
  onChange: (str: string) => void;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
