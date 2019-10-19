import React from 'react';

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
            <a className="item" href='/mentors'>
                Наставники
            </a>
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