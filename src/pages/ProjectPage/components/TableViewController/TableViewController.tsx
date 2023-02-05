import React from 'react';
import './TableViewController.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTable } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../../ui/Button/Button';

interface TableViewControllerProps {}

export const TableViewController: React.FC<
  TableViewControllerProps
> = (): JSX.Element => {
  return (
    <div className={'tableViewController'}>
      {/*//todo*/}
      <Button type={'outline'} className={'btn active'}>
        <FontAwesomeIcon size={'sm'} icon={faTable} />
        <span className={'btn_text'}>Kanban</span>
      </Button>
      {/*//todo*/}
      <Button type={'outline'} className={'btn'}>
        <FontAwesomeIcon size={'sm'} icon={faList} />
        <span className={'btn_text'}>List View</span>
      </Button>
    </div>
  );
};
