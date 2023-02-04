import React from 'react';
import './MainLayoutSidebar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faF,
  faCalendar,
  faUser,
  faComments,
  faTableColumns,
} from '@fortawesome/free-solid-svg-icons';

export const MainLayoutSidebar: React.FC = (): JSX.Element => {
  return (
    <div className={'sidebar'}>
      <div className={'d-flex'}>
        <FontAwesomeIcon size={'lg'} icon={faF} />
      </div>
      <ul>
        <li>
          <Link to={'/'}>
            <FontAwesomeIcon size={'sm'} icon={faTableColumns} />
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <FontAwesomeIcon size={'sm'} icon={faCalendar} />
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <FontAwesomeIcon size={'sm'} icon={faComments} />
          </Link>
        </li>
      </ul>

      <footer>
        <div className={'footer__avatar'}>
          <FontAwesomeIcon size={'lg'} icon={faUser} />
        </div>
      </footer>
    </div>
  );
};
