import React, {useRef, useEffect, useState} from 'react';
import logo from "../../assets/img/logo.png";
import {useTranslation} from "react-i18next";
import {login} from "../../redux/reducers/authActions";
import {useDispatch} from "react-redux";

const SignIn = ({isModalVisible, onClickOutside, setIsModalVisible, userData, setUserData}) => {
    const {t} = useTranslation();
    const ref = useRef(null);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});


    useEffect(() => {

        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
            setUserData({Email: storedEmail});
        }
    }, []);


    const handleFinish = (event) => {
        event.preventDefault();
        const isValid = validateForm(event.target);

        if (isValid) {
            onFinish(event);
            setIsModalVisible(!isModalVisible);
            window.location.reload()

        } else setIsModalVisible(isModalVisible)
    };

    const onFinish = (event) => {
        const formData = new FormData(event.target);
        const {email, password} = Object.fromEntries(formData.entries());


        const user = {
            Email: email,
            password: password,
        };


        dispatch(login(user)).then((response) => {

            const data = response.payload.user;

            setUserData(data)


            localStorage.setItem("userEmail", data.Email);


        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };

        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (onClickOutside.show) {
        return null;
    }


    const handleShowModal = () => {
        setIsModalVisible(true);
    };

    const handleHideModal = () => {
        setIsModalVisible(false);
    };

    const validateForm = (form) => {
        const emailInput = form.querySelector('input[name="email"]');
        const passwordInput = form.querySelector('input[name="password"]');
        let isValid = true;
        const errors = {};
        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');
        const emailValue = emailInput.value.trim();

        if (emailValue === '') {
            emailInput.classList.add('error');
            errors.email = 'Email is required';
            isValid = false;
        }


        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '') {
            passwordInput.classList.add('error');
            errors.password = 'Password is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <>

            {!userData && (
                <button onClick={handleShowModal}>{t("form.btn1")}</button>
            )}


            {isModalVisible && (
                <div className="modal" ref={ref}>
                    <div className="modal__overlay"></div>
                    <div className="modal__content">
                        <div className="sign__in__form">
                            <div className="sign__in__form__header">
                                <img src={logo} alt="logo" className="header__logo"/>
                                <div>
                                    <button className="sign__in__form__register__button">
                                        {t("form.btn2")}
                                    </button>
                                    <button className="sign__in__form__hide" onClick={handleHideModal}>
                                        x
                                    </button>
                                </div>
                            </div>

                            <div className="sign__in__form__description">
                                <p>{t("form.title1")}</p>
                                <h2>{t("form.title2")}</h2>
                            </div>
                            <div className="sign__in__form__form">
                                <form onSubmit={handleFinish}>
                                    <input placeholder="" className="username" type="text" name="email"/>
                                    {errors.email &&
                                        <span className="error-message" style={{color: "red"}}>{errors.email}</span>}
                                    <input placeholder="" className="password" type="password" name="password"/>
                                    {errors.password &&
                                        <span className="error-message" style={{color: "red"}}>{errors.password}</span>}
                                    <button className="sign__in">{t("form.btn1")}</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {userData && (

                <span></span>
            )}


        </>

    );
};

export default SignIn;
