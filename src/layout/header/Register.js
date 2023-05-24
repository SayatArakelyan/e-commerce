import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../redux/reducers/authActions';
import logo from "../../assets/img/logo.png";
import {useTranslation} from "react-i18next";


const Register = ({userData,setUserData}) => {
    const dispatch = useDispatch();
    const [isFirstStepPassed, setIsFirstStepPassed] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {t} = useTranslation();



    // useEffect(() => {
    //     const storedUserEmail = localStorage.getItem('userEmail');
    //     setUserData(storedUserEmail);
    // }, [userData]);

    const handleFinish = (event) => {
        event.preventDefault();

        if (!isFirstStepPassed) {
            setIsFirstStepPassed(true);
            return;
        }

        onFinish(event);
        setIsModalVisible(!isModalVisible);
    };

    const handleShowModal = () => {
        setIsModalVisible(true);
    };

    const handleHideModal = () => {
        setIsModalVisible(false);
    };

    const onFinish = (event) => {
        const formData = new FormData(event.target);
        const {firstName, lastName, birthDate, gender, country, phoneNumber} = Object.fromEntries(formData.entries());


        const userData = {
            Email: email,
            password: password,
            FirstName: firstName,
            LastName: lastName,
            BirthDate: birthDate,
            country: country,
            phoneNumber: phoneNumber,
        };

        dispatch(registerUser(userData)).then(() => {


        });
    };

    return (
        <>
            {
                userData ? null :
                    <button onClick={handleShowModal}>{t("form.btn2")}</button>}

            {isModalVisible && (
                <div className="modal">
                    <div className="modal__overlay" onClick={handleHideModal}></div>
                    <div className="modal__content">
                        <div className="sign__in__form">
                            <div className="sign__in__form__header">
                                <img src={logo} alt="logo" className="header__logo"/>
                                <div>
                                    <button className="sign__in__form__register__button">
                                        {t("form.btn1")}
                                    </button>
                                    <button className="sign__in__form__hide" onClick={handleHideModal}>
                                        x
                                    </button>
                                </div>
                            </div>

                            <div className="sign__in__form__description">
                                <p>{t("form.title3")}</p>
                                <h2>{t("form.title4")}</h2>
                            </div>

                            <div className="sign__in__form__form">
                                <form onSubmit={handleFinish}>
                                    {!isFirstStepPassed && (
                                        <>
                                            <input
                                                placeholder="Email"
                                                className="username"
                                                type="text"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <input
                                                placeholder="Password"
                                                className="password"
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </>
                                    )}

                                    {isFirstStepPassed && (
                                        <>
                                            <input
                                                placeholder="First Name"
                                                name="firstName"
                                                className="username"
                                                type="text"
                                            />
                                            <input
                                                placeholder="Last Name"
                                                name="lastName"
                                                className="username"
                                                type="text"
                                            />
                                            <input
                                                placeholder="BirthDay"
                                                name="birthDate"
                                                className="username"
                                                type="text"
                                            />
                                            <input
                                                placeholder="Select Country"
                                                name="country"
                                                className="username"
                                                type="text"
                                            />
                                            <input
                                                placeholder="Phone"
                                                name="phoneNumber"
                                                className="username"
                                                type="number"
                                            />
                                        </>
                                    )}

                                    <button type="submit" className="sign__in">
                                        {!isFirstStepPassed ? (
                                            t("form.btn3")
                                        ) : (
                                            <p>Finish</p>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;