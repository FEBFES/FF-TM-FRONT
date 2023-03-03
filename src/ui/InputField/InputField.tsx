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
  value: any;
}

export const InputField: React.FC<IInputFieldProps> = ({
  type,
  value,
  className,
  ...props
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.inputCont}>
      <input
        value={value}
        type={showPassword ? 'text' : type}
        className={classNames(className, styles.input)}
        {...props}
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
