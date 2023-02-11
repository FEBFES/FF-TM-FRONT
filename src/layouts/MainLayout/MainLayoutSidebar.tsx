import React from 'react';
import './MainLayoutSidebar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faFolder,
  faCircleExclamation,
  faCog,
  faBell,
  faRightFromBracket,
  faComments,
  faTableColumns,
} from '@fortawesome/free-solid-svg-icons';
import { LogoIcon } from '../../assets/icons/LogoIcon';

export const MainLayoutSidebar: React.FC = (): JSX.Element => {
  return (
    <div className={'sidebar'}>
      <div className={'sidebar__header'}>
        <LogoIcon />
      </div>

      <ul className={'sidebar__main'}>
        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faTableColumns} />
        </Link>

        <Link className={'link active'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faFolder} />
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faCalendar} />
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faComments} />
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faBell} />
        </Link>
      </ul>

      <footer className={'sidebar__footer'}>
        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faCog} />
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faCircleExclamation} />
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faRightFromBracket} />
        </Link>
      </footer>
    </div>
  );
};
