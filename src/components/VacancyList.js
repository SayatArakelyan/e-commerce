// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchVacancies,filterVacancies } from '../redux/reducers/VacancySlice';
// import CategoryDropdown from './CategoryDropdown';
// import LevelDropdown from './LevelDropdown';
// import VacancyItem from "./VacancyItems"
//
// const VacancyList = () => {
//     const dispatch = useDispatch();
//     const vacancy = useSelector((state)=> state.vacancy.vacancies);
//
//     useEffect(()=>{
//         dispatch(fetchVacancies())
//
//     },[dispatch])
//
//     const handleFilter = () => {
//         dispatch(filterVacancies());
//     };
//
//
//
//     return (
//         <div>
//             <h1>Vacancy List</h1>
//             <CategoryDropdown />
//             <LevelDropdown />
//             <button onClick={handleFilter}>Filter</button>
//             <h2>Filtered Vacancies:</h2>
//             <ul>
//                 {vacancy.map((vacancy) => (
//                     <VacancyItem key={vacancy.id} vacancy={vacancy} />
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default VacancyList;
