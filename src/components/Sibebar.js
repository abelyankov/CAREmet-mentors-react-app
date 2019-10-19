import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const sideBarStyle = {
        width: "180px", height: "100%", overflow: "auto", cursor: "pointer"
    };
    return (
        <div className="ui fixed vertical inverted menu"
             style ={sideBarStyle}>
            <a className="item">
                Профиль
            </a>
            <a className="item">
                Наставники
            </a>
            <a className="item" href='/reports'>
                Отчёты
            </a>
            <a className="item" href='/login'>
                Выйти
            </a>   
            {/* <Link to="/login">Logout</Link> */}
        </div>
    );
}

export default Sidebar;