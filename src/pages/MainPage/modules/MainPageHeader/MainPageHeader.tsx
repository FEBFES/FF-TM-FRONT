import React, { useState } from 'react';
import styles from './MainPageHeader.module.css';
import { AddNewProjModal } from '../../components/AddNewProjModal/AddNewProjModal';
import { Button } from '../../../../ui/Button/Button';

interface MainPageHeaderProps {}

export const MainPageHeader: React.FC<
  MainPageHeaderProps
> = (): JSX.Element => {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.mainPage__header}>
      <span className={styles.page__title}>Projects</span>
      <Button type={'submit'} onClick={() => setShow(true)}>
        add
      </Button>
      <AddNewProjModal show={show} setShow={setShow} />
    </header>
  );
};
