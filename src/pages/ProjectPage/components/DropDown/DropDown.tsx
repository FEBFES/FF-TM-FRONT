import React from 'react';
import styles from './DropDown.module.css';
import { Button } from '../../../../ui/Button/Button';

const DropDown: React.FC = (): JSX.Element => {
  return (
    <div className={styles.dropdown}>
      <Button
        type={'default'}
        children={'delete'}
        className={styles.dropdown__button}
      />
      <Button
        type={'default'}
        children={'change'}
        className={styles.dropdown__button}
      />
    </div>
  );
};

export default DropDown;
