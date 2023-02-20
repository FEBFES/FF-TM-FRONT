import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';
import styles from './InputField.module.css';
import classNames from 'classnames';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IInputFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value: string;
}

export const InputField: React.FC<IInputFieldProps> = ({
  type,
  label,
  value,
  ...props
}): JSX.Element => {
  const [isFocusOn, setIsFocusOn] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  // useEffect(() => {
  //   const initialValue = value;
  //
  //   return () => {
  //     onChange(initialValue);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className={styles.inputCont}>
      <label
        className={classNames(styles.label, {
          [styles.labelFocus]: isFocusOn || value !== '',
        })}
        htmlFor="input"
      >
        {label}
      </label>
      <input
        {...props}
        onFocus={() => setIsFocusOn(true)}
        onBlur={() => setIsFocusOn(false)}
        value={value}
        type={showPassword ? 'text' : type}
        id={'input'}
        className={styles.input}
      />
      {type === 'password' && value !== '' && (
        <div
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
          className={styles.passwordIcon}
        >
          <FontAwesomeIcon icon={faEye} />
        </div>
      )}
    </div>
  );
};
