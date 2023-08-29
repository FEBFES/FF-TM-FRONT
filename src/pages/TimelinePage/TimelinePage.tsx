import React from 'react';
import { TimelinePageProps } from './TimelinePage.props';
import { Title } from '../../ui/Typography';

export const TimelinePage: React.FC<TimelinePageProps> = (): JSX.Element => {
  return (
    <div>
      {/* todo i18next */}
      <Title>TimelinePage</Title>
    </div>
  );
};
