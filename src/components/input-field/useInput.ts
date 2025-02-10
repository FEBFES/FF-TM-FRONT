import { useEffect, useState } from 'react';

export type ValidationRule = {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern';
  value?: number | RegExp;
  errorMsg: string;
};

type ValidationRules = ValidationRule[]

const useInput = (currentInputValue: string, validationRules: ValidationRules) => {
  const [error, setError] = useState<string | null>(null)
    const [isValid, setIsValid] = useState<boolean>(true)

    useEffect(() => {
        if (currentInputValue) validate(currentInputValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentInputValue])

  const validate = (value: string): boolean => {
    for (const rule of validationRules) {
      let isValid = true;

      switch (rule.type) {
        case 'required':
          isValid = !!value.trim();
          break;
        case 'minLength':
          isValid = value.length >= (rule.value as number);
          break;
        case 'maxLength':
          isValid = value.length <= (rule.value as number);
          break;
        case 'pattern':
          isValid = (rule.value as RegExp).test(value);
          break;
        default:
          break;
    }

      setIsValid(isValid)
      if (!isValid) {
        setError(rule.errorMsg)
        return false
      }
    }

    setError(null);
    return true;
  };

  const handleBlur = () => {
    validate(currentInputValue);
  };

//   const reset = () => {
//     setValue(currentInputValue);
//     setError(null);
//   };

  return {
    onBlur: handleBlur,
    error,
    isValid
  };
};

export default useInput;