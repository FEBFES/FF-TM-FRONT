import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SPasswordIcon,
  SInputContainer,
  SInput,
  SInputLabel,
} from './Input-field.styled';

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
  withLabel = true,
  className,
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
    <SInputContainer
      onClick={() => {
        if (withLabel) setInputActive(true);
      }}
      onBlur={() => {
        if (!value && withLabel) {
          setInputActive(false);
        }
      }}
    >
      <SInput
        value={value}
        type={showPassword ? 'text' : type}
        className={className}
        {...props}
        placeholder={withLabel ? '' : props.placeholder}
        id={'input'}
      />
      {withLabel && (
        <SInputLabel isActive={inputActive} htmlFor="input">
          {props.placeholder}
        </SInputLabel>
      )}
      {type === 'password' && value !== '' && (
        <SPasswordIcon
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
        >
          <FontAwesomeIcon icon={faEye} />
        </SPasswordIcon>
      )}
    </SInputContainer>
  );
};
