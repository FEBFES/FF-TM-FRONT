import React from 'react';
import styles from './Loader.module.css';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface LoaderProps {
  size?: SizeProp;
}

export const Loader: React.FC<LoaderProps> = ({ size }): JSX.Element => {
  return (
    <div className={styles.loaderCont}>
      <FontAwesomeIcon size={size} icon={faSpinner} />
    </div>
  );
};
