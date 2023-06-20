import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from "../constants/api";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVacancies } from "../redux/reducers/VacancySlice";


const Vacancy = () => {
    const vacancies = useSelector((state) => state.vacancy.vacancies);

    const [categories, setCategories] = useState([]);
    const [levels, setLevels] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${API_URL}/vacancy/category`);
                setCategories(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchLevels = async () => {
            try {
                const response = await axios.get(`${API_URL}/vacancy/specialistLevel`);
                setLevels(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
        dispatch(fetchVacancies());
        fetchLevels();
    }, [dispatch,localStorage.getItem('i18nextLng')]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
    };

    const handleFilter = () => {
        dispatch(fetchVacancies({
            categoryId: selectedCategory,
            levelId: selectedLevel
        }));
    };

    console.log(vacancies)
    return (
        <section className="vacancy">
            <div className="container">
                <div className="row">
                    <div className="filter__content">
                        <div>
                            <h1>Filter by job category</h1>
                            <select value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="">All Categories</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {localStorage.getItem('i18nextLng') === 'ru'
                                            ? category.titleRu
                                            : category.titleEn
                                        }
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h1>Filter by specialist level</h1>
                            <select value={selectedLevel} onChange={handleLevelChange}>
                                <option value="">All Levels</option>
                                {levels.map(level => (
                                    <option key={level.id} value={level.id}>
                                        {localStorage.getItem('i18nextLng') === 'ru'
                                            ? level.titleRu
                                            : level.titleEn
                                        }
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button onClick={handleFilter}>Filter</button>
                    </div>

                    <div className="job__content">
                        <h2 style={{ textAlign: "center", color: "red" }}>
                            {vacancies.length > 0 ? "Hot jobs" : "No filtered jobs"}
                        </h2>
                        <div>
                            {vacancies.map(vacancy => (
                                <div key={vacancy.id} className="vacancy__content">
                                    <div className="vacancy__item1">
                                        <img src={`http://localhost:4444/${vacancy.image}`}
                                             style={{ width: "80px", height: "80px" }}
                                             alt={`${vacancy.titleEn}`}
                                        />
                                    </div>
                                    <div className="vacancy__item2">
                                        <h3>
                                            {localStorage.getItem('i18nextLng') === 'ru'
                                                ? vacancy.titleRu
                                                : vacancy.titleEn
                                            }
                                        </h3>
                                    </div>
                                    <div className="vacancy__item3">
                                        <p>Deadline: {vacancy.deadline}</p>
                                    </div>
                                    <div className="vacancy__item3">
                                        <Link to={`${vacancy.titleEn}/${vacancy.id}`}>
                                            <button>view more</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vacancy;