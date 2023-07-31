import React from 'react';
import styles from './Select.module.css';
import classNames from 'classnames';

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
    <select
      disabled={onlyView}
      className={classNames(styles.select, {
        [styles.select_disabled]: onlyView,
      })}
      defaultValue={defaultValue}
      onClick={changeHandler}
      onChange={changeHandler}
    >
      {optionsArr.map((option: string, index: number) => {
        return (
          <option
            className={styles.option}
            key={`${option}-${index}`}
            value={option}
          >
            {option}
          </option>
        );
      })}
    </select>
  );
};
