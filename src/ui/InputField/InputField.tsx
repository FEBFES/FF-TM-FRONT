import React, { ChangeEvent, useEffect, useState } from 'react';
import cn from 'classnames';
import './InputField.scss';
import classNames from 'classnames';

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
  const [isFocusOn, setIsFocusOn] = useState<boolean>(false);

  useEffect(() => {
    const initialValue = value;

    return () => {
      onChange(initialValue);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={'input-cont'}>
      <label
        className={classNames('label', {
          'label-focus': isFocusOn || value !== '',
        })}
        htmlFor="input"
      >
        {label}
      </label>
      <input
        onFocus={() => setIsFocusOn(true)}
        onBlur={() => setIsFocusOn(false)}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        type={type}
        id={'input'}
        className={cn('input')}
      />
    </div>
  );
};
