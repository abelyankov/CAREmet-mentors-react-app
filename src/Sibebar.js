import React from 'react';

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
            <a className="item">
                Отчёты
            </a>
        </div>
    );
}

export default Sidebar;