import React from 'react';
import './TableViewController.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTable } from '@fortawesome/free-solid-svg-icons';

interface TableViewControllerProps {}

export const TableViewController: React.FC<
  TableViewControllerProps
> = (): JSX.Element => {
  return (
    <div className={'tableViewController'}>
      <button className={'btn active'}>
        <FontAwesomeIcon size={'sm'} icon={faTable} />
        <span className={'btn_text'}>Kanban</span>
      </button>
      <button className={'btn'}>
        <FontAwesomeIcon size={'sm'} icon={faList} />
        <span className={'btn_text'}>List View</span>
      </button>
    </div>
  );
};
