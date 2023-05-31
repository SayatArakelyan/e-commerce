import React from 'react';
import clothing01 from "../assets/img/clothing1-removebg-preview.png"
import {useTranslation} from "react-i18next";


function ReasonsToWorkWithUs() {

    const {t} = useTranslation()

    const img = {
        id: 1,
        name: "clothing",
        image: clothing01
    }

    return (
        <section className="reason__to__work">
            <div className="container">
                <div className="row">
                    <div className="img__block">
                        <img src={img.image} alt={img.name} className="img__content"/>
                    </div>
                    <div className="content__block">
                        <h2 className="title">{t("reasonToWork.title")}</h2>
                        <ol>
                            <li className="description">{t("reasonToWork.description1")}</li>
                            <li className="description">{t("reasonToWork.description2")}
                            </li>
                            <li className="description">{t("reasonToWork.description3")}
                            </li>
                            <li className="description">{t("reasonToWork.description4")}
                            </li>
                            <li className="description">{t("reasonToWork.description5")}
                            </li>
                        </ol>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default ReasonsToWorkWithUs;