import React from 'react';
import './MessagesPage.module.css';
import { MessagesPageProps } from './MessagesPage.props';

export const MessagesPage: React.FC<MessagesPageProps> = (): JSX.Element => {
  return (
    <div>
      {/* todo i18next */}
      <h1>MessagesPage</h1>
    </div>
  );
};
