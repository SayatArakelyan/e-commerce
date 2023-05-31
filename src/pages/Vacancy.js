import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from "../constants/api";
import {useDispatch} from "react-redux";
import {filterVacancies} from "../redux/reducers/VacancySlice";


const Vacancy = () => {
    const [vacancies, setVacancies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [levels, setLevels] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const dispatch = useDispatch

    useEffect(() => {
        // Fetch job categories
        axios.get(`${API_URL}/vacancy/category`)
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        // Fetch specialist levels
        axios.get(`${API_URL}/vacancy/specialistLevel`)
            .then(response => {
                setLevels(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
    };

    const handleFilter = () => {
        axios.get(`${API_URL}/vacancy`, {
            params: {
                categoryId: selectedCategory,
                levelId: selectedLevel
            }
        })
            .then(response => {
                setVacancies(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1>Vacancy List</h1>
            <div>
                <label>Category:</label>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.titleEn}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Specialist Level:</label>
                <select value={selectedLevel} onChange={handleLevelChange}>
                    <option value="">All Levels</option>
                    {levels.map(level => (
                        <option key={level.id} value={level.id}>
                            {level.titleEn}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleFilter}>Filter</button>
            <h2>Filtered Vacancies:</h2>
            <ul>
                {vacancies.map(vacancy => (
                    <li key={vacancy.id}>
                        <h3>{vacancy.titleEn}</h3>
                        <p>{vacancy.descriptionEn}</p>
                        <p>Deadline: {vacancy.deadline}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vacancy;