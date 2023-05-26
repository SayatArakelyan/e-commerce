import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";

const NestedMenu = () => {
    const {t} = useTranslation();

    const [menuItems, setMenuItems] = useState([
        {
            title: 'menu.title',
            path: '/',
        },
        {
            title: 'menu.title2',
            path: 'services',
        },
        {
            title: 'menu.title3',
            submenu: [
                {title: 'menu.submenu1'},
                {title: 'menu.submenu2'},
            ],
            path: 'gallery',
            submenuOpen: false,
        },
        {
            title: 'menu.title4',
            path: 'Vacancy',
        },
        {
            title: 'menu.title5',
            path: 'Contacts',
        },
    ]);


    const handleMouseEnter = (index) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index].submenuOpen = true;
        setMenuItems(updatedMenuItems);
    };

    const handleMouseLeave = (index) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index].submenuOpen = false;
        setMenuItems(updatedMenuItems);
    };

    return (
        <ul className="nested-menu">
            {menuItems.map((menuItem, index) => (
                <li
                    key={index}
                    className={`nested-menu__item ${menuItem.submenuOpen ? 'nested-menu__item--active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <Link to={menuItem.path} className="nested-menu__link">
                        {t(menuItem.title)}
                    </Link>

                    {menuItem.submenuOpen && menuItem.submenu && (
                        <ul className="nested-menu__submenu">
                            {menuItem.submenu.map((submenuItem, subIndex) => (
                                <li key={subIndex} className="nested-menu__submenu-item">
                                    {submenuItem.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NestedMenu;
