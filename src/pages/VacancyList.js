import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchVacancies} from "../redux/reducers/VacancySlice";


function VacancyList() {
    const {titleEn, id} = useParams();
    const vacancy = useSelector((state) => state.vacancy.vacancies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVacancies())
    }, [dispatch])

    return (
        <div>
            {vacancy.map((item) => (
                <div key={item.id}>
                    <Link to={`/vacancy/${item.titleEn}/${item.id}`}>{item.titleEn}</Link>
                </div>
            ))}
        </div>
    );
}

export default VacancyList;