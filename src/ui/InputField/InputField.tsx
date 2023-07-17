import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import styles from './InputField.module.css';
import classNames from 'classnames';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IInputFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: any;
  withLabel?: boolean;
  containerStyle?: string;
}

export const InputField: React.FC<IInputFieldProps> = ({
  type,
  value,
  withLabel,
  className,
  containerStyle,
  ...props
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputActive, setInputActive] = useState<boolean>(!!value);

  useEffect(() => {
    if (withLabel) {
      setInputActive(!!value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div
      className={classNames(styles.inputCont, containerStyle)}
      onClick={() => {
        if (withLabel) setInputActive(true);
      }}
      onBlur={() => {
        if (!value && withLabel) {
          setInputActive(false);
        }
      }}
    >
      <input
        value={value}
        type={showPassword ? 'text' : type}
        className={classNames(className, styles.input)}
        {...props}
        placeholder={withLabel ? '' : props.placeholder}
        id={'input'}
      />
      {withLabel && (
        <label
          className={`${styles.input_label} ${
            inputActive && styles.input_label_active
          }`}
          htmlFor="input"
        >
          {props.placeholder}
        </label>
      )}
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
