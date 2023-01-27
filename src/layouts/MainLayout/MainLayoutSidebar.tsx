import React from 'react';
import './MainLayoutSidebar.scss';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faF, faHome, faUser, faGear, faTableColumns, faChartLine} from "@fortawesome/free-solid-svg-icons"

export const MainLayoutSidebar: React.FC = (): JSX.Element => {
  return (
    <div className={'sidebar'}>
        <div className={'d-flex'}>
            <FontAwesomeIcon size={'lg'} icon={faF} />
        </div>
      <ul>
        <li>
          <Link to={'/'}>
              <FontAwesomeIcon size={'lg'} icon={faHome} />
          </Link>
        </li>
          <li>
              <Link to={'/'}>
                  <FontAwesomeIcon size={'lg'} icon={faTableColumns} />
              </Link>
          </li>
          <li>
              <Link to={'/'}>
                  <FontAwesomeIcon size={'lg'} icon={faChartLine} />
              </Link>
          </li>
          <li>
              <Link to={'/'}>
                  <FontAwesomeIcon size={'lg'} icon={faGear} />
              </Link>
          </li>
      </ul>
        <footer>
            <div className={'footer__avatar'}>
                <FontAwesomeIcon size={'xl'} icon={faUser} />
            </div>
        </footer>
    </div>
  );
};
