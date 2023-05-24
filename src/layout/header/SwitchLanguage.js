import React from 'react';
import {useTranslation} from 'react-i18next';

function SwitchLanguage() {
    const { i18n} = useTranslation();

    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <select className="switchLang" value={i18n.language} onChange={handleChangeLanguage}>
            <option value="en">En</option>
            <option value="ru">Ру</option>
        </select>
    );
}

export default SwitchLanguage;

