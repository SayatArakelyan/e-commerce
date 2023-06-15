import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";

const NestedMenu = () => {
    const {t} = useTranslation();

    const [menuItems] = useState([
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
            path: 'gallery',

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


    return (
        <ul className="nested-menu">
            {menuItems.map((menuItem, index) => (
                <li
                    key={index}
                    className={`nested-menu__item ${menuItem.submenuOpen ? 'nested-menu__item--active' : ''}`}

                >
                    <Link to={menuItem.path} className="nested-menu__link">
                        {t(menuItem.title)}
                    </Link>


                </li>
            ))}
        </ul>
    );
};

export default NestedMenu;
