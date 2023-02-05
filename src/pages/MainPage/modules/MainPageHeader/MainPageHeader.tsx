import React, { useState } from 'react';
import './MainPageHeader.scss';
import { AddNewProjModal } from '../../components/AddNewProjModal/AddNewProjModal';
import { Button } from '../../../../ui/Button/Button';

interface MainPageHeaderProps {}

export const MainPageHeader: React.FC<
  MainPageHeaderProps
> = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <header className={'mainPage__header'}>
      <span className={'page__title'}>Projects</span>
      <Button type={'outline'} onClick={() => setShow(true)}>
        add
      </Button>

      <AddNewProjModal show={show} setShow={setShow} />
    </header>
  );
};
