
import {BsSearch} from "react-icons/bs";
import {useTranslation} from "react-i18next";


function HeaderSearch() {

    const {t} = useTranslation()

    return (
        <label className="header__search">
            <span className="header__search__icon"> <BsSearch/> </span>

            <input type="text" className="header__search__filed" placeholder={t("header.filed")}/>
        </label>
    );
}

export default HeaderSearch;