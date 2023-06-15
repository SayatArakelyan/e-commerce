import React  from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";



function AboutVacancy() {
    const {titleEn, id} = useParams()
    const vacancy = useSelector((state) => state.vacancy.vacancies)




    const currentVacancy = vacancy.find((v) => v.id === Number(id));

    if (!currentVacancy) {
        return <>
            <div>
                <Link to="/vacancy">Back to list</Link>
            </div>
            <h2>No vacancy find</h2>
        </>
    }

    return (
        <div>
            <h3>{currentVacancy.id}</h3>
            <h2>{currentVacancy.titleEn}</h2>
            <br/>
            <p>{currentVacancy.descriptionEn}</p>
        </div>
    );
}

export default AboutVacancy;