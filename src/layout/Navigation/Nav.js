import React, { useState ,useEffect} from 'react';
import {useTranslation} from "react-i18next";

const NestedMenu = () => {
    const {t,i18n} = useTranslation()


    const [menuItems, setMenuItems] = useState([
        {
            title: `${t("menu.title")}`,
            submenu: [
                { title: 'Submenu 1-1' },
                { title: 'Submenu 1-2' },
                { title: 'Submenu 1-3' }
            ],
            submenuOpen: false
        },
        {
            title: 'Menu 2',
            submenu: [
                { title: 'Submenu 2-1' },
                { title: 'Submenu 2-2' },
                { title: 'Submenu 2-3' }
            ],
            submenuOpen: false
        },
        {
            title: 'Menu 3',
            submenu: [
                { title: 'Submenu 3-1' },
                { title: 'Submenu 3-2' },
                { title: 'Submenu 3-3' }
            ],
            submenuOpen: false
        }
    ]);

    useEffect(() => {

        const savedLanguage = localStorage.getItem('i18nextLng');
        console.log(savedLanguage)
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);



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
                    <a href="#" className="nested-menu__link">
                        {menuItem.title}
                    </a>
                    {menuItem.submenuOpen && (
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
