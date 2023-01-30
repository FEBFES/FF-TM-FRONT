import React, { useState } from 'react';
import './MainPageHeader.scss';
import { AddNewProjModal } from '../../components/AddNewProjModal/AddNewProjModal';

interface MainPageHeaderProps {}

export const MainPageHeader: React.FC<
  MainPageHeaderProps
> = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <header className={'mainPage__header'}>
      <span className={'page__title'}>Projects</span>
      <button className={'page__addBtn'} onClick={() => setShow(true)}>
        add
      </button>

      <AddNewProjModal show={show} setShow={setShow} />
    </header>
  );
};
