import React from 'react';
import {Link} from "react-router-dom";

function Sidebar() {
    const sideBarStyle = {
        width: "180px", height: "100%", overflow: "auto", cursor: "pointer"
    };
    return (
        <div className="ui fixed vertical inverted menu"
             style ={sideBarStyle}>
            <a className="item" href='/profile'>
                Профиль
            </a>
            <Link to={`/mentorRequests`} className="item">
                Наставники
            </Link>

            <a className="item" href='/reports'>
                Отчёты
            </a>
            <a className="item" href='/login'>
                Выйти
            </a>
        </div>
    );
}

export default Sidebar;