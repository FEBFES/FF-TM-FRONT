import React from 'react'
import './MainLayoutSidebar.scss'
import {Link} from "react-router-dom";

const MainLayoutSidebar: React.FC = (): JSX.Element => {
    return <div className={'sidebar'}>
        F/F

        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
        </ul>
    </div>
}
export default MainLayoutSidebar