import React from 'react';
import './ProjectPageSubheader.scss';
import { ArrowIcon } from '../../../../assets/icons/UtilsIcons';

interface TableViewControllerProps {}

export const ProjectPageSubheader: React.FC<
  TableViewControllerProps
> = (): JSX.Element => {
  return (
    <div className={'subheader'}>
      <div>
        <span>TimeLine:</span>
        <p>May 9, 2022 - June 9, 2022</p>
        <ArrowIcon />
      </div>

      <div>
        <span>Status:</span>
        <p>Done</p>
        <ArrowIcon />
      </div>

      <div>
        <span>Priority:</span>
        <p>High</p>
        <ArrowIcon />
      </div>

      <div>
        <span>Type:</span>
        <p>Feature</p>
        <ArrowIcon />
      </div>

      <div>
        <span>Assigned:</span>
        <p>Denis Bitaev</p>
        <ArrowIcon />
      </div>
    </div>
  );
};
