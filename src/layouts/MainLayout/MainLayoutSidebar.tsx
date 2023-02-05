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
        <p className={'sidebar__title'}>Overview</p>
        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faTableColumns} />
          <span>Dashboard</span>
        </Link>

        <Link className={'link active'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faFolder} />
          <span>Projects</span>
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faCalendar} />
          <span>Calendar</span>
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faComments} />
          <span>Message</span>
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faBell} />
          <span>Notifications</span>
        </Link>
      </ul>

      <footer className={'sidebar__footer'}>
        <p className={'sidebar__title'}>General</p>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faCog} />
          <span>Settings</span>
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faCircleExclamation} />
          <span>About</span>
        </Link>

        <Link className={'link'} to={'/'}>
          <FontAwesomeIcon size={'lg'} icon={faRightFromBracket} />
          <span>Logout</span>
        </Link>
      </footer>
    </div>
  );
};
