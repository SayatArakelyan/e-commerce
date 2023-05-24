import React, { useState, useEffect } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsStar } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { VscEllipsis } from 'react-icons/vsc';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';

const SmartPanel = () => {
    const [isHidden, setIsHidden] = useState(JSON.parse(localStorage.getItem('isHidden')) || false);

    const togglePanelVisibility = () => {
        setIsHidden(!isHidden);
    };

    useEffect(() => {
        localStorage.setItem('isHidden', JSON.stringify(isHidden));
    }, [isHidden]);

    return (
        <>
            {!isHidden && (
                <ul className="header__list">
                    <li>{IoMdNotificationsOutline()}</li>
                    <li>{BsStar()}</li>
                    <li>{CiSettings()}</li>
                </ul>
            )}
            <button className="header__button" onClick={togglePanelVisibility}>
                {isHidden ? <IoEllipsisVerticalSharp className="rotate-icon" /> : <VscEllipsis />}
            </button>
        </>
    );
};

export default SmartPanel;
