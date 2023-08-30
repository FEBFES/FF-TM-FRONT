import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { SLoaderContainer } from './loader.styled';

interface LoaderProps {
  size?: SizeProp;
}

export const Loader: React.FC<LoaderProps> = ({ size }): JSX.Element => {
  return (
    <SLoaderContainer>
      <FontAwesomeIcon size={size} icon={faSpinner} />
    </SLoaderContainer>
  );
};
